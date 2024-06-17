import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import EditExpenseForm from "./EditExpenseForm";
import "./ExpenseList.css"; // Import the CSS file

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "expenses"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const expensesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setExpenses(expensesData);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "expenses", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount}
            <div>
              <button
                className="edit-button"
                onClick={() => setEditingExpense(expense)}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(expense.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {editingExpense && (
        <EditExpenseForm
          expense={editingExpense}
          setEditingExpense={setEditingExpense}
        />
      )}
    </div>
  );
};

export default ExpenseList;
