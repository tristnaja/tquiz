import type { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleStart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        navigate("/sign-in");
    }
    return (
        <div className="relative w-screen h-screen bg-dot">
            <div className="bg-black absolute inset-0 opacity-40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent">
                <h1 className="font-inter-black text-white text-[96px]">TQUIZ</h1>
                <button onClick={handleStart} className="cursor-pointer text-white text-[24px] font-inter-semibold px-12 py-2 border-2 border-white rounded-xl bg-black">Start</button>
            </div>
        </div>
    )
}

export default Home;
