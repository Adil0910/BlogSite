import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { useState, useEffect, Suspense, lazy } from "react";
import './App.css'; 
import "./pages/SignUp.css";
import "./pages/Blog.css";
import EditBlog from "./pages/EditBlog";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./Pages/Navbar";
import Home from "./pages/Home";
import About from "./Pages/About";
import Manage from "./Pages/Manage";
import AddBlog from "./Pages/AddBlog";
import SignIn from "./Pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Blogdetails from "./pages/Blogdetails";
import { initialBlogs } from "./pages/BlogData";

const Blog = lazy(() => import("./Pages/Blog"));

function App() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogs"));
    if (saved && saved.length > 0) {
      setBlogs(saved);
    } else {
      setBlogs(initialBlogs);
      localStorage.setItem("blogs", JSON.stringify(initialBlogs));
    }
  }, []);

  const updateBlogs = (newBlogs) => {
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage" element={<Manage blogs={blogs} setBlogs={updateBlogs} />} />
            <Route path="/edit/:id" element={<EditBlog blogs={blogs} setBlogs={updateBlogs} />} />
            <Route path="/addblog" element={<AddBlog blogs={blogs} setBlogs={updateBlogs} />} />
            <Route path="/blog" element={<Blog blogs={blogs} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/blogdetails/:id' element={<Blogdetails blogs={blogs} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
