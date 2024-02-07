import React, { useState } from "react";
import {  signInUser } from "../../../firebase/firebase"; // Adjust this path to your firebase.js file
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom

import "./Login.scss";

const defaultUserData = {
  email: "",
  password: "",
};

function Login() {
  const [userData, setUserData] = useState(defaultUserData);
  const { email, password } = userData;
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const resetUserData = () => {
    return setUserData(defaultUserData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const userCredentials = await signInUser(email, password);

      if (userCredentials) {
        resetUserData();
        navigate("/");
      }
    } catch (error) {
      console.log("User Sign In Failed", error.message);
    }

    //   const userCredential = await signInWithEmailAndPassword(
    //     auth,
    //     userData.email,
    //     userData.password
    //   );
    //   // User signed in
    //   navigate("/"); // Redirect to dashboard or another page
    // } catch (error) {
    //   setError(error.message); // Display error message
    // }
  };

  return (
    <div className="login-main">
      <div className="login-form">
        <h2>Login</h2>
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

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
