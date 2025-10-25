import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './index.css';
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<App />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
);
