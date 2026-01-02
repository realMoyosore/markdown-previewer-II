# Markdown Previewer II

A modern, browser-based Markdown editor and previewer built with Vue.js. This application provides a seamless, real-time editing experience where users can write Markdown in a code editor and see the rendered HTML preview instantly side-by-side. It emphasizes user-friendly features like persistence, file handling, and responsiveness, making it suitable for note-taking, documentation, or content creation.

## Features

- **Real-Time Live Preview**: Side-by-side editor and preview layout. Markdown is parsed to HTML using the `marked.js` library with GitHub Flavored Markdown (GFM) support and line breaks enabled. Changes update instantly as you type.
- **Advanced Code Editor**: Powered by CodeMirror (`@uiw/vue-codemirror`) with Markdown language support, syntax highlighting, and the Okaidia dark theme for a professional writing experience. Includes features like tab indentation and autofocus.
- **Data Persistence**:
  - **Local Storage**: Automatically saves content to the browser's local storage with a 500ms debounce to prevent excessive writes. Content reloads on page refresh.
  - **Mock Cloud Persistence**: Integrates with JSONPlaceholder (a fake REST API) for saving/loading documents by ID. Users can "save to cloud" (POST) and "load from cloud" (GET by ID), with loading states and error handling.
- **File Management**:
  - **Upload**: Load `.md` or `.txt` files from the local device into the editor.
  - **Download**: Export the current Markdown content as a `document.md` file.
- **Responsive Design**: Adapts from a horizontal split-screen layout on desktop to a vertical stacked layout on mobile (breakpoint at 520px width). Uses Tailwind CSS for styling, with custom CSS variables for theming (e.g., background, foreground colors).
- **User Interface**:
  - **Toolbar**: A header with the app title ("Markdown Previewer"), file actions (upload/save), and cloud actions (save/load). Uses Lucide icons and custom Button components. Includes loading indicators and tooltips.
  - **Preview Styling**: The preview pane uses Tailwind's prose classes for readable typography, with dark mode support via `prose-invert`.

## Technology Stack

- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Markdown Parsing**: `marked.js`
- **Editor**: CodeMirror (via `@uiw/vue-codemirror`)
- **Icons**: Lucide Vue Next
- **Routing**: Vue Router 4
- **Utilities**: `clsx` and `tailwind-merge` for conditional class merging

## Installation

1. **Prerequisites**: Node.js (v18.x or later) and npm (or yarn/pnpm).

2. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd markdown-previewer-vue
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Serves the production build locally.

## Project Structure

```blockquote
markdown-previewer-vue/
├── public/                          # Static assets
├── src/
│   ├── assets/                      # Additional assets
│   ├── components/
│   │   ├── ErrorBoundary.vue        # Error boundary (placeholder)
│   │   ├── MarkdownEditor.vue       # Core component: editor + preview logic
│   │   ├── Toolbar.vue              # Header toolbar with action buttons
│   │   └── ui/
│   │       ├── Button.vue           # Reusable button component
│   │       ├── separator.tsx        # UI separator (unused)
│   │       └── tooltip.tsx          # Tooltip component (unused)
│   ├── lib/
│   │   └── utils.ts                 # Utility functions
│   ├── pages/
│   │   ├── ErrorTestPage.vue        # Test page for errors
│   │   ├── HomePage.vue             # Main page
│   │   └── NotFoundPage.vue         # 404 page
│   ├── App.vue                      # Root component
│   ├── index.css                    # Global styles
│   ├── main.ts                      # App entry point
│   └── router.ts                    # Vue Router configuration
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── vite.config.ts                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS config
├── tsconfig*.json                   # TypeScript configs
├── eslint.config.js                 # ESLint config
└── components.json                  # shadcn/ui component config
```

## Usage

- Open the app in your browser.
- Start typing Markdown in the editor pane.
- See the live preview update in real-time.
- Use the toolbar to upload files, download content, or save/load from the mock cloud.
- Content is automatically saved to local storage.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

An AltSchool Africa Project - Designed by [Moyosore Sulola](https://www.linkedin.com/in/moyosore-sulola/)
