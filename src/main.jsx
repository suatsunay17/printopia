import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { PrimeReactProvider } from 'primereact/api';


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <AuthProvider>
        <PrimeReactProvider>
        <App />
        </PrimeReactProvider>
      </AuthProvider>
    </BrowserRouter>
);
