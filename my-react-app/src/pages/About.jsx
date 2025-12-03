import React from "react";

export default function About() {
  return (
    <>
    <div className="about-container">
      {/* Heading */}
      <div className="about-heading">
        <h1>About Us</h1>
        <div className="heading-border"></div>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <div className="about-image">
          <img src="/img/tra.jpeg" alt="About us" />
        </div>
        <div className="about-text">
          <h2>Our Journey</h2>
          <p className="paraour">
            Welcome to our travel blog! We share amazing travel experiences,
            tips, and guides to help you explore the world like a pro. From
            hidden gems to popular destinations, our blog covers everything a
            traveler needs.  
            <br /><br />
            Our team believes in authentic travel, connecting with local
            cultures, and making memories that last a lifetime.
          </p>
        </div>
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
