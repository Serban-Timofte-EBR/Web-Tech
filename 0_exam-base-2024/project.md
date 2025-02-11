# Project Overview

This project is a web application that includes both server-side and client-side components. Below is a detailed description of the project structure and the purpose of each file and directory.

## Server

The server-side code is located in the `server` directory. It is built using Node.js and Express.

### Directories and Files

- **routers**

  - `auth-router.mjs`: Defines routes for authentication (login and logout).
  - `controllers/index.mjs`: Contains the controllers for handling various routes.

- **models**
  - `permission.mjs`: Defines the 'permission' entity in the database using Sequelize.

### Example Code

#### auth-router.mjs

```javascript
import express from "express";
import controllers from "./controllers/index.mjs";

const authRouter = express.Router();

authRouter.post("/login", controllers.auth.login);
authRouter.post("/logout", controllers.auth.logout);

export default authRouter;
```

#### permission.mjs

```javascript
// filepath: /Users/serbantimofte/Documents/ASE/Web-Tech/0_exam-base-2024/server/models/permission.mjs
export default (sequelize, DataTypes) => {
  return sequelize.define("permission", {
    forResource: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    forUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: "project",
    rights: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
  });
};
```

## Client

The client-side code is located in the `client` directory. It is built using React.

### Directories and Files

- **components**

  - `App/App.js`: The main application component that sets up routing and context providers.
  - `AuthGuard`: A component that guards routes based on authentication status.
  - `LoginForm`: A component for user login.
  - `ProjectList`: A component that lists projects.
  - `ProjectForm/ProjectForm`: A component for creating and editing projects.
  - `TaskList`: A component that lists tasks.
  - `TaskForm`: A component for creating and editing tasks.
  - `TaskDetails`: A component that shows task details.
  - `Dashboard`: A component that shows the dashboard.
  - `ErrorDisplay`: A component that displays errors.
  - `NavBar`: A navigation bar component.
  - `TaskList/Task/Task.js`: A component that represents a single task in the task list.

- **state**
  - `AppContext`: Provides global state using React Context.
  - `stores/UserStore`: Manages user-related state.
  - `stores/ProjectStore`: Manages project-related state.
  - `stores/TaskStore`: Manages task-related state.
  - `stores/UserSuggestionStore`: Manages user suggestion-related state.

### Example Code

#### App.js

```javascript
// filepath: /Users/serbantimofte/Documents/ASE/Web-Tech/0_exam-base-2024/client/src/components/App/App.js
import "./App.css";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AppContext from "../../state/AppContext";

import AuthGuard from "../AuthGuard";
import LoginForm from "../LoginForm";
import ProjectList from "../ProjectList";
import ProjectForm from "../ProjectForm/ProjectForm";
import TaskList from "../TaskList";
import TaskForm from "../TaskForm";
import TaskDetails from "../TaskDetails";
import Dashboard from "../Dashboard";

import UserStore from "../../state/stores/UserStore";
import ProjectStore from "../../state/stores/ProjectStore";
import TaskStore from "../../state/stores/TaskStore";
import UserSuggestionStore from "../../state/stores/UserSuggestionStore";
import ErrorDisplay from "../ErrorDisplay";

import Navbar from "../NavBar";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userStore] = useState(new UserStore());
  const [projectStore] = useState(new ProjectStore());
  const [taskStore] = useState(new TaskStore());
  const [userSuggestionStore] = useState(new UserSuggestionStore());

  useEffect(() => {
    userStore.emitter.addListener("LOGIN_SUCCESS", () => {
      setIsAuthenticated(true);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        user: userStore,
        project: projectStore,
        task: taskStore,
        userSuggestion: userSuggestionStore,
      }}
    >
      <Router>
        {isAuthenticated && (
          <>
            <Navbar />
            <div className="app-header">
              <div>
                <h5>Welcome, {userStore.data.email}</h5>
              </div>
              <div>
                <button
                  onClick={() => {
                    userStore.logout();
                    setIsAuthenticated(false);
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
        <ErrorDisplay />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <Dashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/dashboard/:type"
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <Dashboard />
              </AuthGuard>
            }
          />
          <Route
            path="/projects"
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <ProjectList />
              </AuthGuard>
            }
          />
          <Route
            path="/projects/new"
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <ProjectForm />
              </AuthGuard>
            }
          />
          <Route
            path="/projects/:pid/tasks"
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <TaskList />
              </AuthGuard>
            }
          />
          <Route
            path="/projects/:pid/tasks/new"
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <TaskForm />
              </AuthGuard>
            }
          />
          <Route
            path="/projects/:pid/tasks/:tid"
            element={
              <AuthGuard isAuthenticated={isAuthenticated}>
                <TaskDetails />
              </AuthGuard>
            }
          />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
```

#### Task.js

```javascript
// filepath: /Users/serbantimofte/Documents/ASE/Web-Tech/0_exam-base-2024/client/src/components/TaskList/Task/Task.js
import React, { useState, useContext } from "react";
import AppContext from "../../../state/AppContext";
import { useParams, useNavigate } from "react-router-dom";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const globalState = useContext(AppContext);
  const params = useParams();
  const navigate = useNavigate();

  return (
    <tr>
      {globalState.user.data.id === task.permission?.forUser ? (
        isEditing ? (
          <>
            <td>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button onClick={() => setIsEditing(false)}>Cancel</button>
              <button
                onClick={() => {
                  globalState.task.updateOne(globalState, project.id, {
                    task,
                    description,
                  });
                  setIsEditing(false);
                }}
              >
                Save
              </button>
            </td>
          </>
        ) : (
          <>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>{task.assignedTo ? task.assignedTo.email : "unassigned"}</td>
            <td>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button
                onClick={() => {
                  globalState.task.deleteOne(globalState, params.pid, task.id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  navigate(`/projects/${params.pid}/tasks/${task.id}`);
                }}
              >
                Details
              </button>
            </td>
          </>
        )
      ) : (
        <>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{task.status}</td>
          <td>{task.assignedTo ? task.assignedTo.email : "unassigned"}</td>
          <td>
            <button
              onClick={() => {
                navigate(`/projects/${params.pid}/tasks/${task.id}`);
              }}
            >
              Details
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default Task;
```

## Conclusion

This project is structured to separate concerns between the server and client sides. The server handles API requests and database interactions, while the client provides a user interface for interacting with the application. Each component and module is designed to be modular and reusable.
