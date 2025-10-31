<div align="center">
  <h1 style="font-size: 3rem; font-weight: bold;">TQUIZ - Backend</h1>
  <p>The robust and scalable API for the TQUIZ application.</p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI Badge">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python Badge">
  <img src="https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white" alt="SQLAlchemy Badge">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Badge">
</p>

---

This directory contains the backend for the TQUIZ application. It is built with Python using the high-performance [FastAPI](https://fastapi.tiangolo.com/) framework and interacts with a SQL database via [SQLAlchemy](https://www.sqlalchemy.org/).

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Running with Docker](#running-with-docker)
    -   [Manual Installation](#manual-installation)
-   [Configuration](#configuration)
-   [API Endpoints](#api-endpoints)
-   [Folder Structure](#folder-structure)
-   [Key Dependencies](#key-dependencies)

## Getting Started

### Running with Docker

To run the backend service using Docker, ensure you have Docker and Docker Compose installed.

1.  From the root of the project, run:
    ```sh
    docker-compose up --build backend
    ```
2.  The backend API will be available at `http://localhost:8000`.
3.  Interactive API documentation can be accessed at `http://localhost:8000/docs`.

### Manual Installation

#### Prerequisites

-   [Python](https://www.python.org/) (v3.8 or higher)
-   [pip](https://pip.pypa.io/en/stable/installation/)
-   A running MySQL instance or other compatible SQL database.

#### Installation Steps

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

4.  **Configure environment variables:**
    Set up your `.env` file as described in the [Configuration](#configuration) section.

5.  **Run the development server:**
    ```sh
    uvicorn app.main:app --reload
    ```

## Configuration

Create a `.env` file inside the `backend/app` directory. This file stores environment-specific settings.

**Example `.env` file:**

```env
DATABASE_URL="mysql+pymysql://user:password@host:port/database"
SECRET_KEY="your_super_secret_key_for_jwt"
ALGORITHM="HS256"
```

| Variable       | Description                                      |
| :------------- | :----------------------------------------------- |
| `DATABASE_URL` | The connection string for your SQL database.     |
| `SECRET_KEY`   | A secret key for signing JWT tokens.             |
| `ALGORITHM`    | The algorithm used for JWT signing (e.g., HS256). |

## API Endpoints

The backend provides the following core authentication endpoints:

-   `POST /auth/register`: Register a new user.
-   `POST /auth/login`: Log in a user and receive an access token via an HTTP-only cookie.
-   `GET /auth/me`: Get the current authenticated user's details.
-   `POST /auth/logout`: Log out the current user.

Quiz-related endpoints will be documented here as they are developed.

## Folder Structure

The `app` directory contains the core application logic:

```
app/
├── auth.py        # Authentication logic and routes
├── config.py      # Configuration management
├── database.py    # Database session management
├── main.py        # FastAPI application entry point
├── models.py      # SQLAlchemy database models
├── schemas.py     # Pydantic schemas for data validation
└── utils.py       # Utility functions (e.g., password hashing)
```

## Key Dependencies

| Dependency                                                 | Description                                                                 |
| :--------------------------------------------------------- | :-------------------------------------------------------------------------- |
| [FastAPI](https://fastapi.tiangolo.com/)                   | A modern, fast web framework for building APIs with Python.                 |
| [SQLAlchemy](https://www.sqlalchemy.org/)                  | The Python SQL Toolkit and Object Relational Mapper.                        |
| [Pydantic](https://docs.pydantic.dev/)                     | Data validation and settings management using Python type annotations.      |
| [python-jose](https://github.com/mpdavis/python-jose)      | A library for JWT, JWS, JWE, JWK, and JWA in Python.                        |
| [Passlib](https://passlib.readthedocs.io/en/stable/)       | A comprehensive library for password hashing.                               |
| [PyMySQL](https://github.com/PyMySQL/PyMySQL)              | A pure-Python MySQL client library.                                         |