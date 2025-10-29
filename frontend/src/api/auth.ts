import api from "./axios.ts";

interface RegisterData {
    username: string;
    email: string;
    password: string;
}

interface LoginData {
    email: string;
    password: string;
}

export async function register(data: RegisterData) {
    const res = await api.post("/auth/register", data);
    return res.data;
}

export async function login(data: LoginData) {
    const res = await api.post("/auth/login", data);
    return res.data;
}

export async function getCurrentUser() {
    const res = await api.get("/auth/me");
    return res.data;
}

export async function logout() {
    await api.post("/auth/logout");
}
