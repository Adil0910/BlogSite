import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useState } from "react";

export default function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // 👉 NEW: Mobile menu toggle (no effect on PC)
  const [open, setOpen] = useState(false);

  return (
    <nav className="Navbar">
      
      <div className="box1">
        <h2>MyBlog</h2>
      </div>

      {/* 👉 NEW: Hamburger icon (mobile only, PC me hidden) */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* 👉 UPDATED: toggle class add ki */}
      <div className={`links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>

        {isLoggedIn && (
          <>
            <Link to="/manage" onClick={() => setOpen(false)}>Manage</Link>
            <Link to="/addblog" onClick={() => setOpen(false)}>Add Blog</Link>
          </>
        )}

        <Link to="/blog" onClick={() => setOpen(false)}>Blogs</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>

      <div className="loggoutt" style={{ display: "flex", gap: "15px", alignItems: "center",position:"relative",right:"22px" }}>
        {isLoggedIn ? (
          <button
            style={{
              paddingBlock: "6px",
              paddingInline: "12px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontWeight: "500"
            }}
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        ) : (
          <>
          <div className="linksign">
            <Link style={{color:"white"}} to="/signin">Sign In</Link>
            <Link style={{color:"white"}} to="/signup">Sign Up</Link></div>
          </>
        )}
      </div>
    </nav>
  );
}
