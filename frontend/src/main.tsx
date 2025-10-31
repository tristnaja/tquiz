import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Quiz from "./pages/quiz/Quiz";
import Summary from "./pages/summary/Summary";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<App />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/summary" element={<Summary />} />
        </Routes>
    </BrowserRouter>
);
