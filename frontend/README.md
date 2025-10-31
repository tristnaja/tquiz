<div align="center">
  <h1 style="font-size: 3rem; font-weight: bold;">TQUIZ - Frontend</h1>
  <p>The sleek and interactive user interface for the TQUIZ application.</p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Badge">
</p>

---

This directory contains the frontend for the TQUIZ application. It is a modern single-page application built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [TypeScript](https://www.typescriptlang.org/), and styled with the utility-first CSS framework [Tailwind CSS](https://tailwindcss.com/).

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Running with Docker](#running-with-docker)
    -   [Manual Installation](#manual-installation)
-   [Available Scripts](#available-scripts)
-   [Folder Structure](#folder-structure)
-   [Key Dependencies](#key-dependencies)

## Getting Started

### Running with Docker

To run the frontend service using Docker, ensure you have Docker and Docker Compose installed.

1.  From the root of the project, run:
    ```sh
    docker-compose up --build frontend
    ```
2.  The frontend application will be available at `http://localhost:5173`.

### Manual Installation

#### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))

#### Installation Steps

1.  **Navigate to the `frontend` directory.**

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be running at `http://localhost:5173`.

## Available Scripts

In the `frontend` directory, you can run the following scripts:

| Script        | Description                                       |
| :------------ | :------------------------------------------------ |
| `npm run dev`     | Starts the Vite development server.               |
| `npm run build`   | Builds the app for production to the `dist` folder. |
| `npm run lint`    | Lints the codebase using ESLint.                  |
| `npm run preview` | Serves the production build locally for preview.  |

## Folder Structure

The `src` directory is structured as follows:

```
src/
├── api/         # Functions for making API calls to the backend
├── pages/       # Top-level page components for routing
├── App.tsx      # Main application component with routing setup
├── index.css    # Global CSS styles and Tailwind directives
└── main.tsx     # Main entry point of the application
```

## Key Dependencies

| Dependency                                                     | Description                                                     |
| :------------------------------------------------------------- | :-------------------------------------------------------------- |
| [React](https://react.dev/)                                    | A JavaScript library for building user interfaces.              |
| [Vite](https://vitejs.dev/)                                    | A fast build tool and development server for modern web apps.   |
| [TypeScript](https://www.typescriptlang.org/)                  | A typed superset of JavaScript that compiles to plain JavaScript. |
| [Tailwind CSS](https://tailwindcss.com/)                       | A utility-first CSS framework for rapid UI development.         |
| [React Router](https://reactrouter.com/)                       | For declarative routing in React applications.                  |
| [Axios](https://axios-http.com/)                               | A promise-based HTTP client for making API requests.            |