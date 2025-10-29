import { useEffect, useState } from "react";
import { getCurrentUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function Quiz() {
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();
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

    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <p className="text-white">{user ? user.username : "Loading..."}</p>
            <p className="text-white">{user ? user.email : "Loading..."}</p>
            <p className="text-white">{user ? user.id : "Loading..."}</p>
        </div>
    )
}

export default Quiz;
