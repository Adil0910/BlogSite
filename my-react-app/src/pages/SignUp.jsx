import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import "./SignUp.css";

export default function SignUp() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  useEffect(() => {
    setTimeout(() => setShowForm(true), 200);
  }, []);

const handleSignUp = (e) => {
  e.preventDefault();
      navigate("/"); 

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
    
  }

  
  const userData = { name, email, password };
  localStorage.setItem("user", JSON.stringify(userData));

  dispatch(login({ name, email }));

  alert("Account created successfully!");
  setName("");
  setEmail("");
  setPassword("");
};

  return (
     <div className="signup-video-container">
      
    <video autoPlay loop muted className="bg-video">
      <source className="video" src="/img/Hero2.mp4" type="video/mp4" />
    </video>

    <div className="video-overlay"></div>  

    <div 
      className={`signup-form ${showForm ? "show" : ""}`}
      style={{
        transform: showForm
          ? "translate(-50%, -50%) scale(1)"
          : "translate(-50%, -50%) scale(0.9)",
      }}
    >
        <h2 style={{color:"white"}}>Create Account</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            value={name}
onChange={(e) => setName(e.target.value)}
/>

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

          <button type="submit">Sign Up</button>
        </form>
      </div>

    </div>
    
  );
}
