import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import { auth } from "./Firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      console.log("User Registered Successfully!!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
}
export default SignUp;
