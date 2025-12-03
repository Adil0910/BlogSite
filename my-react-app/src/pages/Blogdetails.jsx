import React from "react";
import { useParams } from "react-router-dom";

export default function Blogdetails({ blogs }) {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  if(!blog) return <h1>Blog not found</h1>;

  return (
    <div className="detailbox" style={{ width:"100%" }}>
      <img className="imagedetail" src={blog.image} style={{ width:"100%", height:"110vh" }} />
      <div className=" dtb">
      <h1 className="titledetail">{blog.title}</h1>
              <div
      className="blog-desc"
      dangerouslySetInnerHTML={{ __html: blog.desc }}/></div>
    </div>
  );
}
