import { useState, type MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSignIn(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            if (!email || !password) {
                throw new Error("All fields are required");
            }

            if (password.length < 8) {
                throw new Error("Password must be at least 8 characters long");
            }

            await login({ email, password });
            alert("Login Successfull!");
            navigate("/quiz");
        } catch (err: any) {
            alert(err.response?.data?.detail || err.message || "Login failed");
        }
    }

    const handleRedirectToSignUp: MouseEventHandler<HTMLSpanElement> = (event) => {
        event.preventDefault();
        navigate("/sign-up", { replace: true });
    }

    return (
        <div className="relative w-screen h-screen bg-dot">
            <div className="bg-black absolute inset-0 opacity-40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-transparent">
                <h1 className="font-inter-black text-white text-[96px]">TQUIZ</h1>
                <form onSubmit={handleSignIn} className="px-8 py-11 border-2 border-white rounded-2xl flex flex-col gap-5 justify-center items-center text-white">
                    <div>
                        <label htmlFor="email" className="block font-inter-medium text-[14px] mb-1">email:</label>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-light-grey rounded-md text-[18px] px-5 py-2 w-[364px]" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-inter-medium text-[14px] mb-1">password:</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-2 border-light-grey rounded-md text-[18px] px-5 py-2 w-[364px]" />
                    </div>
                    <button type="submit" className="text-white bg-blue w-max h-max px-8 py-2 rounded-md text-[14px] font-inter-bold">Sign In</button>
                    <p className="font-inter-light">don't have an account? <span onClick={handleRedirectToSignUp} className="font-inter-bold cursor-pointer">sign up</span></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
