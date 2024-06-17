import React, { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import "./EditExpenseForm.css"; // Import the CSS file

const EditExpenseForm = ({ expense, setEditingExpense }) => {
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const expenseDoc = doc(db, "expenses", expense.id);
      await updateDoc(expenseDoc, {
        description,
        amount: parseFloat(amount),
      });
      setEditingExpense(null);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Update Expense</button>
      <button type="button" onClick={() => setEditingExpense(null)}>
        Cancel
      </button>
    </form>
  );
};

export default EditExpenseForm;
