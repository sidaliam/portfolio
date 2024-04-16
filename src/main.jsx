import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import More from "./More.jsx";
import { myProjects } from "./myprojects.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/more/:projectId"
          element={<More myProjects={myProjects} />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
