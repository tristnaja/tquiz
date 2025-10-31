import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../../api/auth";

interface Answer {
    question: string;
    userSelectedAnswer: string | null;
    correctAnswer: string;
}

function Summary() {
    const location = useLocation();
    const state = location.state as { userAnswers: Answer[] };
    const userAnswers = state?.userAnswers || [];
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();

    const correctAnswerAmount = userAnswers.filter((a) => a.userSelectedAnswer === a.correctAnswer).length;
    const incorrectAnswerAmount = userAnswers.filter((a) => a.userSelectedAnswer && a.userSelectedAnswer !== a.correctAnswer).length;
    const unansweredAmount = userAnswers.filter((a) => a.userSelectedAnswer === null).length;

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

    function toPercentage(num: number) {
        return num * 10;
    }

    async function handleFinish() {
        try {
            await logout();
            setUser(null);
            navigate("/")
        } catch (err: any) {
            alert(err);
        }
    }

    return (
        <div className="bg-dot w-screen h-screen max-h-screen text-white">
            <div className="bg-black absolute inset-0 opacity-40" />
            <div className="flex justify-between items-center flex-col absolute inset-0 py-7 px-10">
                <div className="flex justify-between items-center w-full">
                    <h1 className="font-inter-black text-[32px] cursor-pointer select-none">TQUIZ</h1>
                    <p className="font-inter-black bg-black border-2 rounded-full w-max px-6 py-1">00:00</p>
                </div>
                <div className="bg-black border-2 border-white w-[578px] py-10 px-11 rounded-2xl flex flex-col items-center gap-5">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-inter-black text-[16px] text-light-grey">YOUR SCORE</h1>
                        <h2 className="font-inter-black text-[64px]">{toPercentage(correctAnswerAmount)}%</h2>
                    </div>
                    <div className="w-full flex flex-col justify-center gap-1">
                        <h3 className="font-inter-medium text-[12px]">Correct Answers</h3>
                        <div className="w-full bg-dark-grey h-11 rounded-lg">
                            <h4 className="h-full flex justify-center items-center font-inter-bold text-[16px] rounded-lg"
                                style={{
                                    width: `${toPercentage(correctAnswerAmount) == 0 ? 100 : toPercentage(correctAnswerAmount)}%`,
                                    backgroundColor: toPercentage(correctAnswerAmount) == 0 ? "transparent" : "var(--green)"
                                }}
                            >
                                {toPercentage(correctAnswerAmount)}%
                            </h4>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center gap-1">
                        <h3 className="font-inter-medium text-[12px]">Incorrect Answers</h3>
                        <div className="w-full bg-dark-grey h-11 rounded-lg">
                            <h4 className="h-full flex justify-center items-center font-inter-bold text-[16px] rounded-lg"
                                style={{
                                    width: `${toPercentage(incorrectAnswerAmount) == 0 ? 100 : toPercentage(incorrectAnswerAmount)}%`,
                                    backgroundColor: toPercentage(incorrectAnswerAmount) == 0 ? "transparent" : "var(--red)"
                                }}
                            >
                                {toPercentage(incorrectAnswerAmount)}%
                            </h4>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center gap-1">
                        <h3 className="font-inter-medium text-[12px]">Unanswered Questions</h3>
                        <div className="w-full bg-dark-grey h-11 rounded-lg">
                            <h4 className="h-full flex justify-center items-center font-inter-bold text-[16px] rounded-lg"
                                style={{
                                    width: `${toPercentage(unansweredAmount) == 0 ? 100 : toPercentage(unansweredAmount)}%`,
                                    backgroundColor: toPercentage(unansweredAmount) == 0 ? "transparent" : "var(--light-grey)"
                                }}
                            >
                                {toPercentage(unansweredAmount)}%
                            </h4>
                        </div>
                    </div>
                    <button onClick={() => handleFinish()} className="font-inter-bold bg-blue p-3 rounded-lg mt-5 cursor-pointer w-full">Finish!</button>
                </div>
                <div className="flex justify-between items-center w-full">
                    <h2 className="font-inter-black text-[16px]">
                        {user ? user.username : "username"}
                        <h3 className="font-inter-extralight">{user ? user.email : "user@email.com"}</h3>
                    </h2>
                    <p className="font-inter-black bg-black border-2 rounded-full w-max px-6 py-1">congratulations!</p>
                </div>
            </div>
        </div>
    )
}

export default Summary;
