import { useState } from "react";
import "./LatestBlog.css";
import { Link } from "react-router-dom";

export default function LatestBlog({ blogs }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % blogs.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className="latest-section">
      <h2 className="heading-latest">
        Our Latest <span style={{borderBottom:"1px solid",color:"black",paddingBottom:"10px"}}>Blogs</span>
      </h2>

      <div className="arrow-controls">
        <button onClick={prev} className="arrow-btn">❮</button>
        <button onClick={next} className="arrow-btns">❯</button>
      </div>

      <div className="slider-container">
        {blogs.slice(index, index + 3).map((b) => (
          <Link to={`/blogdetails/${b.id}`} >
          <div key={b.id} className="slider-card">

            <img src={b.image} alt={b.title} className="slider-img" />

            <div className="blog-info">
              <p className="category">{b.location}</p>
              <h3 className="title">{b.title}</h3>

              <p className="short-desc">
                {b.desc.length > 60 ? b.desc.substring(0, 60) + "..." : b.desc}
              </p>

            </div>

          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
