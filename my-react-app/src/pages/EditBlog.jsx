import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditBlog({ blogs, setBlogs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find(b => b.id === parseInt(id));

  const [title, setTitle] = useState(blog?.title || "");
  const [desc, setDesc] = useState(blog?.desc || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updated = blogs.map(b =>
      b.id === parseInt(id)
        ? { ...b, title, desc }
        : b
    );

    setBlogs(updated);
    navigate("/manage");
  };

  return (
    <>
    <div  style={{ padding: "20px" }}>
      <h2 style={{width:"100%",textAlign:"center", marginTop:"50px",marginBottom:"20px"}}>Edit Blog</h2>

      <form className="edits" style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",gap:"12px"}} onSubmit={handleUpdate}>
        <input  style={{padding:"9px", width:"50%"}}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea  style={{padding:"9px",width:"50%"}}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <button style={{paddingBlock:"6px",paddingInline:"12px",background:"green",border:"none",color:"white"}} type="submit">Update</button>
      </form>
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
