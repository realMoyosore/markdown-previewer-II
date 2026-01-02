# Markdown Previewer

Markdown Previewer is a browser-based Markdown editor that provides a seamless, side-by-side live preview of your rendered document. Built with a modern tech stack, this project demonstrates advanced frontend engineering principles, including real-time rendering, robust error handling, local and remote data persistence, and a strong commitment to accessibility.

## Live Preview

[Markdown Previewer](https://dotmdpreviewer.netlify.app/)

## About The Project

This application was developed to showcase proficiency in building modern, interactive, and resilient web applications using React. It goes beyond a simple text-to-HTML converter by integrating a professional-grade editor, file system interactions, and data persistence strategies, all wrapped in a clean, responsive, and accessible user interface.

The primary goal is to provide users with an intuitive and efficient tool for writing and previewing Markdown, whether for note-taking, documentation, or content creation.

## Core Features

- Instantaneous Real-time Preview: A side-by-side view that renders Markdown to HTML the moment you type, powered by the fast and reliable marked.js library.

- Enhanced Code Editor: CodeMirror was used for a superior writing experience, complete with Markdown syntax highlighting, proper indentation, and a professional theme.

- Dual Persistence: Never lose your work again. Your content is automatically saved to Local Storage as you type and can be reloaded on your next visit.

- Cloud Save/Load (Mock API): Save your documents to a remote server and retrieve them later by ID, demonstrating asynchronous API handling with loading and error states.

- Full File Control: Easily upload `.md` files from your local machine to continue editing, and download your finished work as a `.md` file with a single click.

- Fully Responsive Design: The UI gracefully adapts from a side-by-side desktop layout to a stacked, mobile-friendly view, ensuring a great experience on any device.

- Robust Error Handling: Implemented with a React Error Boundary to catch runtime errors gracefully without crashing the entire app, plus a custom 404 Not Found page for invalid routes.

## Technology Stack

- **Framework**: React 19+ (with Hooks)
- **Language**: TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS
- **Markdown Parsing**: `marked.js`
- **Syntax Highlighting**: CodeMirror (`@uiw/react-codemirror`)
- **Icons**: `react-icons`
- **Tooling**: Vite

## Installation and Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/realMoyosore/markdown-previewer.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd markdown-previewer
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Prerequisites

- Node.js (v18.x or later recommended)
- npm or your preferred package manager

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run lint`**: Lints the project files.
- **`npm run preview`**: Serves the production build locally.

## Project Structure

```blockquote
markdown-preview-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ErrorBoundary.tsx
│   │   ├── MarkdownEditor.tsx
│   │   └── Toolbar.tsx
│   ├── pages/
│   │   ├── ErrorTestPage.tsx
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Future Improvements

- [ ] Backend Service: Implement a proper backend service instead of a placeholder API.

- [ ] User Authentication: Implement user accounts to allow users to save and manage their own private documents.

- [ ] Multiple Editor Themes: Add a settings panel to allow users to switch between different CodeMirror themes (e.g., light, dark, solarized).

- [ ] Advanced Export Options: Add functionality to export the rendered content as PDF or HTML files.

- [ ] Collaborative Editing: Integrate a library to enable real-time collaborative editing for multiple users.

- [ ] GitHub Integration: Allow users to load Markdown files directly from GitHub Gists or repositories.

---
An AltSchool Africa Project - Designed by [Moyosore Sulola](https://www.linkedin.com/in/moyosore-sulola/)
