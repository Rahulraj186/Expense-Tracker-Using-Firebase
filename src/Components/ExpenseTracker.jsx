import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./ExpenseTracker.css"; // Import the CSS file

const ExpenseTracker = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.error("Error logging out:", error));
  };

  return (
    <div className="expense-tracker-container">
      <h2>Expense Tracker</h2>
      <ExpenseForm />
      <ExpenseList />
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ExpenseTracker;
