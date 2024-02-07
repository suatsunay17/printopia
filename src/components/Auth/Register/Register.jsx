import React, { useState, useContext } from "react";
import { signUpUser } from "../../../firebase/firebase"; // Adjust this path to your firebase.js file
import { useNavigate } from "react-router-dom";

import "./Register.scss";

const defaultUserData = {
  email: "",
  password: "",
};

const initPasswordValues = {
  has6Char: false,
  hasUpper: false,
  hasLower: false,
};

function Register() {
  const [userData, setUserData] = useState(defaultUserData);
  const [passwordCriteria, setPasswordCriteria] = useState({
    has6Char: false,
    hasUpper: false,
    hasLower: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    if (name === "password") {
      setPasswordCriteria({
        has6Char: value.length >= 6,
        hasUpper: /[A-Z]/.test(value),
        hasLower: /[a-z]/.test(value),
      });
    }
  };

  const isPasswordValid = () => {
    return Object.values(passwordCriteria).every(Boolean);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isPasswordValid()) {
      setError("Password must meet all criteria.");
      return;
    }

    try {
      await signUpUser(userData.email, userData.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const renderCriteria = (criteria, text) => {
    return (
      <p style={{ color: criteria ? "green" : "red" }}>
        {criteria ? "✔️" : "❌"} {text}
      </p>
    );
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

          {error && <p className="error">{error}</p>}

          <button type="submit">Register</button>
        </form>
        <div className="password-criteria">
          {renderCriteria(passwordCriteria.has6Char, "At least 6 characters")}
          {renderCriteria(passwordCriteria.hasUpper, "Contains an uppercase letter")}
          {renderCriteria(passwordCriteria.hasLower, "Contains a lowercase letter")}
        </div>
      </div>
    </div>
  );
}

export default Register;
