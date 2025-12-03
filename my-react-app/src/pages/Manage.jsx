import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Manage({ blogs, setBlogs }) {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  const handleDelete = (id) => {
    const updated = blogs.filter((b) => b.id !== id);
    setBlogs(updated);
  };

  const filteredBlogs = blogs
    .filter((b) => b.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortType === "new") return new Date(b.date) - new Date(a.date);
      if (sortType === "old") return new Date(a.date) - new Date(b.date);
      if (sortType === "az") return a.title.localeCompare(b.title);
      if (sortType === "za") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <>
    <div className="manage-container">
      <div className="top-bar">
        <input 
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="">Sort</option>
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
          <option value="az">A–Z</option>
          <option value="za">Z–A</option>
        </select>

        <Link to="/addblog">
          <button className="add-button">+ Add Blog</button>
        </Link>
      </div>

      <div className="grid">
        {filteredBlogs.map((b) => (
          <div className="card" key={b.id}>
            <img src={b.image} />
            <h3>{b.title}</h3>
            <p>{b.date}</p>

            <div className="btnss">
              <Link to={`/edit/${b.id}`}>
                <button className="edit-btn">Edit</button>
              </Link>

              <button className="delete-btn" onClick={() => handleDelete(b.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
         <div className="Footer">
            <div className="boxf">
              <div className="fitem">
<h3 className="headf">Subscribe to the Newsletter</h3>
<h5 style={{color:"white",padding:"5px",fontSize:"13px"}}>Sign up for exciting Abu Dhabi news, learn more about our events and get great travel ideas.</h5>
</div>
<button style={{paddingBlock:"12px",paddingInline:"28px",background:"white",color:"black",fontWeight:"600",border:"none",marginBlock:"23px",marginInline:"20px",fontSize:"8px",borderRadius:"6px",fontSize:"10px"}}>SUBSCRIBE NEWSLETTER </button>
            </div>
            <div className="boxf">
              <div style={{padding:"20px"}}>
              <h3>THINGS TO DO </h3>
              <h3>WHERE TO GO</h3>
              <h3>PLAN YOUR TRIP</h3>
              <h3>EVENTS</h3>
              <h3>CONTACT US</h3></div>

            </div>
            <div className="boxfs">
              <div className="lastf">
                <h2 className="headfollow">Follow us</h2>
                <div className="linksss">
                  <i class="fa-brands fa-whatsapp ll"></i><i class="fa-brands fa-github ll"></i><i class="fa-brands fa-instagram ll"></i><i class="fa-brands fa-twitter ll"></i>
                </div>
              </div>
              <div className="lastf">
    
                <div ><h2 style={{color:"white"  }}>Download Our App</h2></div>
                <div ></div>
              </div>

            </div>
         
          </div>
             <div style={{width:"100%", background:"black",gap:"20px",display:"flex"}}>
            <p className="paraf">Terms and Conditions</p>
             <p className="paraf">Privacy policy</p>
             <p className="paraf">Cookie policy</p>

          </div>
      
    </>
  );
}
