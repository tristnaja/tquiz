# TQUIZ

TQUIZ is a modern and interactive quiz application designed to provide a seamless and engaging user experience. This project is built with a separate frontend and backend, following modern development practices.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure user registration and login functionality.
- **Interactive Quizzes:** Engage with a variety of quizzes.
- **Quiz Summaries:** Review your performance and results after completing a quiz.

## Tech Stack

### Frontend

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **API Communication:** [Axios](https://axios-http.com/)

### Backend

- **Framework:** [FastAPI](https://fastapi.tiangolo.com/)
- **Language:** [Python](https://www.python.org/)
- **Database:** [SQLAlchemy](https://www.sqlalchemy.org/) (with PyMySQL)
- **Authentication:** JWT using `python-jose` and `passlib`

## Project Structure

The project is organized into two main directories:

- `frontend/`: Contains the React-based user interface.
- `backend/`: Contains the FastAPI-based server and business logic.

Each directory has its own specific README with detailed instructions for development and deployment.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Python](https://www.python.org/) (v3.8 or higher)
- [pip](https://pip.pypa.io/en/stable/installation/)

### Backend Setup

1.  **Navigate to the backend directory:**

    ```sh
    cd backend
    ```

2.  **Create and activate a virtual environment:**

    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install dependencies:**

    ```sh
    pip install -r requirements.txt
    ```

4.  **Configure environment variables:**
    Create a `.env` file in the `backend/app` directory and add the necessary variables (e.g., database connection string, secret key).

5.  **Run the development server:**
    ```sh
    uvicorn app.main:app --reload
    ```
    The backend will be running at `http://127.0.0.1:8000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**

    ```sh
    cd frontend
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The frontend will be running at `http://localhost:5173`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
