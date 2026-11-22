# StudyFlow - React Study Planner

## Project Overview

StudyFlow is a responsive study planner built with React 19, Vite, React Router, and Tailwind CSS. It helps students organize their study tasks, track progress, and manage focused study sessions.

## Features

- Dashboard showing total, completed, and pending tasks.
- Add, edit, delete, and complete study tasks.
- Search tasks by title.
- Filter tasks by category and completion status.
- Sort tasks by due date, title, and priority.
- Focus timer with Study and Break modes.
- Settings for display name, study duration, and welcome message.
- Save tasks and preferences using browser localStorage.
- Responsive layout for different screen sizes.
- Custom 404 Not Found page.

## Technologies Used

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript
- Browser localStorage

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project folder:

   ```bash
   cd studyflow
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Project Structure

```text
src/
├── components/
│   ├── FocusTimer.jsx
│   ├── Header.jsx
│   ├── ProgressCard.jsx
│   ├── SectionCard.jsx
│   ├── Sidebar.jsx
│   ├── SummaryCard.jsx
│   └── TaskCard.jsx
├── data/
│   └── initialTasks.js
├── hooks/
│   ├── useDebounce.js
│   ├── useDocumentTitle.js
│   ├── useLocalStorage.js
│   └── useToggle.js
├── layouts/
│   └── SiteLayout.jsx
├── pages/
│   ├── DashboardPage.jsx
│   ├── FocusPage.jsx
│   ├── NotFoundPage.jsx
│   ├── SettingsPage.jsx
│   └── TasksPage.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Custom React Hooks

- **useLocalStorage:** Saves and retrieves application data from browser localStorage.
- **useDocumentTitle:** Updates the browser tab title when the page changes.
- **useDebounce:** Delays search updates to reduce unnecessary filtering.
- **useToggle:** Provides reusable boolean state and toggle functionality.

## React Concepts Demonstrated

- Components and reusable UI.
- Props and callback props.
- State management using useState.
- Side effects using useEffect.
- DOM references using useRef.
- Memoization using useMemo.
- Callback functions using useCallback.
- React Router navigation.
- Conditional rendering and list rendering.
- Controlled forms and validation.
- Component keys and state reset behavior.

## Data Storage

StudyFlow uses browser localStorage to save tasks, the display name, and user preferences. The application does not require a backend, external API, or database.

## React Compiler

The React Compiler is not enabled in this project. React hooks such as useMemo and useCallback are used where appropriate. The React Compiler can automatically optimize components when enabled.

## Project Links

- **GitHub Repository:** ADD_YOUR_GITHUB_LINK
- **Live Website:** ADD_YOUR_DEPLOYED_WEBSITE_LINK
- **Demo Video:** ADD_YOUR_DEMO_VIDEO_LINK

## Author

Emerance Himbazwe
