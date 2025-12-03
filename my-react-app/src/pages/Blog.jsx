import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

export default function Blog({ blogs }) {
  const navigate = useNavigate(); 

  return (
    <>
      <h1 style={{ width: "100%", textAlign: "center", marginBlock: "40px" }}>TRAVEL BLOGS</h1>
      <div className="container-blog">
        
        {blogs.map((p) => (
          <div
            key={p.id}
            className="scard"
            onClick={() => navigate(`/blogdetails/${p.id}`)}
            style={{ cursor: "pointer" }}
          >
            
          <img src={p.image} loading="lazy" className="image" />

            <div className="titl">
              <h3>{p.title}</h3>
                  <div
      className="blog-desc"
      dangerouslySetInnerHTML={{ __html: p.desc }}/>
              <Link 
                to={`/blogdetails/${p.id}`} 
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  color: "black",
                  textDecoration: "underline",
                  fontWeight: "bold"
                }}
              >
                View More
              </Link>
            </div>


          </div>
          
        ))}
        
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
