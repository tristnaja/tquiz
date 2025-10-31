# TQUIZ - Backend

This is the backend for the TQUIZ application, providing a robust and scalable API. It is built with Python using the FastAPI framework and interacts with a SQL database via SQLAlchemy.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Key Dependencies](#key-dependencies)

## Getting Started

### Prerequisites

- [Python](https://www.python.org/) (v3.8 or higher)
- [pip](https://pip.pypa.io/en/stable/installation/)
- A running MySQL or other compatible SQL database instance.

### Installation

1.  **Navigate to the `backend` directory.**

2.  **Create and activate a virtual environment:**

    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install dependencies:**

    ```sh
    pip install -r requirements.txt
    ```

### Configuration

Create a `.env` file inside the `backend/app` directory. This file will hold your environment-specific settings, such as database credentials and your JWT secret key.

Example `.env` file:

```
DATABASE_URL="mysql+pymysql://user:password@host:port/database"
SECRET_KEY="your_secret_key"
ALGORITHM="HS256"
```

### Running the Server

To start the FastAPI development server, run the following command in the `backend` directory:

```sh
uvicorn app.main:app --reload
```

The API will be available at `http://127.0.0.1:8000`, and you can access the interactive API documentation at `http://127.0.0.1:8000/docs`.

## API Endpoints

The backend provides the following authentication endpoints:

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in a user and receive an access token via an HTTP-only cookie.
- `GET /auth/me`: Get the current authenticated user's details.
- `POST /auth/logout`: Log out the current user.

Quiz-related endpoints will be documented here as they are developed.

## Folder Structure

The `app` directory contains the core application logic:

```
app/
├── __init__.py
├── auth.py        # Authentication logic and routes
├── config.py      # Configuration management
├── database.py    # Database session management
├── main.py        # FastAPI application entry point
├── models.py      # SQLAlchemy database models
├── schemas.py     # Pydantic schemas for data validation
└── utils.py       # Utility functions (e.g., password hashing)
```

## Key Dependencies

- **[FastAPI](https://fastapi.tiangolo.com/):** A modern, fast (high-performance) web framework for building APIs with Python.
- **[SQLAlchemy](https://www.sqlalchemy.org/):** The Python SQL Toolkit and Object Relational Mapper.
- **[Pydantic](https://docs.pydantic.dev/):** Data validation and settings management using Python type annotations.
- **[python-jose](https://github.com/mpdavis/python-jose):** A library for JWT, JWS, JWE, JWK, and JWA in Python.
- **[Passlib](https://passlib.readthedocs.io/en/stable/):** A library for password hashing.
