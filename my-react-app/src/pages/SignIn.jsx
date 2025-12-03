// SignIn.jsx
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom"; 
import "./SignUp.css";

export default function SignIn() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    setTimeout(() => setShowForm(true), 200);
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    dispatch(login({ email }));
    alert("Logged in successfully!");
    navigate("/"); 
  };

  return (
<div className="signup-video-container">
      
    <video autoPlay loop muted className="bg-video">
      <source className="video" src="/img/Hero2.mp4" type="video/mp4" />
    </video>

    <div className="video-overlay"></div>  {/* <-- Opacity control */}

    <div 
      className={`signup-form ${showForm ? "show" : ""}`}
      style={{
        transform: showForm
          ? "translate(-50%, -50%) scale(1)"
          : "translate(-50%, -50%) scale(0.9)",
      }}
    >
    <h2 style={{color:"white"}}>Sign In</h2>
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  </div>
</div>

  );
}
