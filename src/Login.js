import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() !== "") {
      onLogin(name.trim());
      navigate("/lobby");
    } else {
      alert("Please enter a valid username.");
    }
  };

  return (
    <div className="login-container">
      <h2>Enter Your Username</h2>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
