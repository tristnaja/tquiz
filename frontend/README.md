# TQUIZ - Frontend

This is the frontend for the TQUIZ application, a modern and interactive quiz platform. It is built using React, Vite, and TypeScript, and styled with Tailwind CSS.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Key Dependencies](#key-dependencies)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))

### Installation

1.  Navigate to the `frontend` directory.
2.  Run the following command to install the necessary dependencies:

    ```sh
    npm install
    ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server, and you can view the application at `http://localhost:5173`.

## Available Scripts

In the `frontend` directory, you can run the following scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Serves the production build locally for preview.

## Folder Structure

The `src` directory is structured as follows:

```
src/
├── api/         # Functions for making API calls to the backend
├── pages/       # Top-level page components
├── App.tsx      # Main application component
├── index.css    # Global CSS styles
└── main.tsx     # Main entry point of the application
```

## Key Dependencies

- **[React](https://react.dev/):** A JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/):** A fast build tool and development server.
- **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework.
- **[React Router](https://reactrouter.com/):** For declarative routing in React.
- **[Axios](https://axios-http.com/):** A promise-based HTTP client for the browser and Node.js.
