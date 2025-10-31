<div align="center">
  <h1 style="font-size: 4rem; font-weight: bold;">TQUIZ</h1>
  <p>A modern and interactive quiz application with a sleek frontend and a robust backend.</p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge">
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI Badge">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python Badge">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Badge">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License Badge">
</p>

---

## 🚀 About TQUIZ

TQUIZ is a full-stack quiz application designed to provide a seamless and engaging user experience. It features a clean user interface, secure authentication, and an interactive quiz-taking process. The project is fully containerized with Docker, allowing for easy setup and deployment.

## ✨ Features

-   🔐 **Secure User Authentication:** Safe and secure user registration and login functionality.
-   🧠 **Interactive Quizzes:** Engage with a variety of dynamic quizzes.
-   📊 **Performance Summary:** Review your quiz results and performance.
-   🐳 **Containerized:** Run the entire application with a single Docker command.

## 🛠️ Tech Stack

| Category      | Technology                                                                                                                                                           |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**  | [React](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [Axios](https://axios-http.com/) |
| **Backend**   | [FastAPI](https://fastapi.tiangolo.com/), [Python](https://www.python.org/), [SQLAlchemy](https://www.sqlalchemy.org/), [JWT](https://jwt.io/)                               |
| **Database**  | [MySQL](https://www.mysql.com/) (via `PyMySQL`)                                                                                                                      |
| **DevOps**    | [Docker](https://www.docker.com/), [Docker Compose](https://docs.docker.com/compose/)                                                                                             |

## 📂 Project Structure

The repository is organized into two main directories, `frontend` and `backend`, each containing its own dedicated source code and documentation.

```
tquiz/
├── backend/            # FastAPI Backend
│   ├── app/
│   ├── Dockerfile
│   └── README.md
├── frontend/           # React Frontend
│   ├── src/
│   ├── Dockerfile
│   └── README.md
├── docker-compose.yaml # Docker Compose configuration
└── README.md           # This file
```

## 🏁 Getting Started

### Prerequisites

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/)

### 🐳 Running with Docker (Recommended)

This is the simplest way to get the application running.

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd tquiz
    ```

2.  **Set up environment variables:**
    Create a `.env` file in the `backend/app/` directory. See the [backend README](backend/README.md#configuration) for the required variables.

3.  **Build and run the containers:**
    ```sh
    docker-compose up --build
    ```

4.  **Access the application:**
    -   **Frontend:** `http://localhost:5173`
    -   **Backend API:** `http://localhost:8000`

### <details>
<summary>💻 Manual Setup</summary>

If you prefer to run the services manually without Docker, follow the steps below.

#### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [Python](https://www.python.org/) (v3.8 or higher)

#### Backend Setup

1.  Navigate to the `backend` directory.
2.  Follow the instructions in the [backend README](backend/README.md#getting-started).

#### Frontend Setup

1.  Navigate to the `frontend` directory.
2.  Follow the instructions in the [frontend README](frontend/README.md#getting-started).

</details>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have ideas for improvements or find any bugs.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.