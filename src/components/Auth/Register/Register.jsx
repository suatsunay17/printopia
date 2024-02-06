import React, { useState } from "react";
import { auth } from "../../../firebase"; // Adjust the import path
import { createUserWithEmailAndPassword } from "firebase/auth"; // Use compat version
import { useNavigate } from "react-router-dom";

import "./Register.scss";

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // Additional actions upon successful registration
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration error:", errorCode, errorMessage);
        // Display or log the error message
      });
  };

  return (
    <div className="reg-main">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
