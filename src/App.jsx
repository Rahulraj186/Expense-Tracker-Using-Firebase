import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ExpenseTracker from "./components/ExpenseTracker";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/expense-tracker"
          element={
            <PrivateRoute>
              <ExpenseTracker />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
