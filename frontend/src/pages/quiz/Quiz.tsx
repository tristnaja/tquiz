import { useEffect, useRef, useState } from "react";
import { getCurrentUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    shuffled_answers: string[];
}

interface UserAnswer {
    question: string;
    userSelectedAnswer: string | null;
    correctAnswer: string;
}

function Quiz() {
    const [user, setUser] = useState<any>(null);
    const [seconds, setSeconds] = useState(1800);
    const [isActive, setIsActive] = useState(false);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const intervalRef = useRef<number | any>(null)
    const [index, setIndex] = useState(0);
    const currentQuestion = questions[index];
    const navigate = useNavigate();

    useEffect(() => {
        if (isActive && seconds > 0) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => {
                    if (prev <= 1) {
                        setIsActive(false);
                        handleTimeout();
                        clearInterval(intervalRef.current);
                        return 0;
                    }

                    return prev - 1;
                });
            }, 1000);
        }

        if (seconds === 0) {
            console.log(index);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isActive]);

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await getCurrentUser();
                setUser(user);

            } catch (err: any) {
                alert("Unauthorized");
                console.error(err);
                navigate("/sign-in");
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await fetch(
                    "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
                );
                const data = await response.json();

                const shuffled = data.results.map((q: Question) => ({
                    ...q,
                    shuffled_answers: [q.correct_answer, ...q.incorrect_answers].sort(() => Math.random() - 0.5)
                }))

                setQuestions(shuffled);
                setIsActive(true)
            } catch (error: any) {
                console.error("Error fetching trivia:", error);
            }
        }

        fetchQuestions();
    }, []);

    function formatTime(time: number) {
        const mins = Math.floor(time / 60);
        const sec = time % 60;

        return `${mins.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    }

    function decodeHTML(html: string) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function handleAnswer(selected: string) {
        const newAnswer = {
            question: currentQuestion.question,
            userSelectedAnswer: selected,
            correctAnswer: currentQuestion.correct_answer,
        }

        const updatedAnswer = [...userAnswers, newAnswer];
        setUserAnswers(updatedAnswer);

        if (index < questions.length - 1) {
            setIndex(prev => prev + 1);
            console.log("handleAnswer: " + index);
            return;
        }

        finishQuiz(updatedAnswer);
    }

    function handleTimeout() {
        setIndex((prev) => {
            setUserAnswers((prevQ) => {
                console.log("handleTimeout: " + prev);
                const unanswered = questions.slice(prev).map((q) => ({
                    question: q.question,
                    userSelectedAnswer: null,
                    correctAnswer: q.correct_answer,
                }))

                const updatedAnswer = [...prevQ, ...unanswered];

                console.log(prevQ);
                console.log(unanswered);
                console.log(updatedAnswer);
                finishQuiz(updatedAnswer);

                return updatedAnswer
            })
            return prev + 1;
        })
    }

    function finishQuiz(finalAnswer: UserAnswer[]) {
        clearInterval(intervalRef.current);
        navigate("/summary", {
            state: {
                userAnswers: finalAnswer
            }
        })
    }

    if (questions.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen text-white text-xl">
                Loading questions...
            </div>
        );
    }

    return (
        <div className="bg-dot w-screen h-screen max-h-screen text-white">
            <div className="bg-black absolute inset-0 opacity-40" />
            <div className="flex justify-between items-center flex-col absolute inset-0 py-7 px-10">
                <div className="flex justify-between items-center w-full">
                    <h1 className="font-inter-black text-[32px] cursor-pointer select-none">TQUIZ</h1>
                    <p className="font-inter-black bg-black border-2 rounded-full w-max px-6 py-1">{formatTime(seconds)}</p>
                </div>
                <div className="bg-black border-2 border-white max-w-[578px] py-10 px-11 rounded-2xl flex flex-col gap-5">
                    <h2 className="text-justify mb-5 font-inter-extralight text-[16px]">
                        {decodeHTML(currentQuestion.question)}
                    </h2>
                    {currentQuestion.shuffled_answers.map((option, i) => (
                        <p onClick={() => handleAnswer(option)} key={i} className="font-inter-extralight text-[16px] bg-dark-grey px-5 py-3.5 rounded-lg cursor-pointer">{decodeHTML(option)}</p>

                    ))}
                </div>
                <div className="flex justify-between items-center w-full">
                    <h2 className="font-inter-black text-[16px]">
                        {user ? user.username : "username"}
                        <h3 className="font-inter-extralight">{user ? user.email : "user@email.com"}</h3>
                    </h2>
                    <p className="font-inter-black bg-black border-2 rounded-full w-max px-6 py-1">{index + 1} of {questions.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Quiz;
