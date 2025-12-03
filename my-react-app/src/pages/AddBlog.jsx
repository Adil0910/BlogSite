import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

export default function AddBlog({ blogs, setBlogs }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content : "<p>Write...</p>",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const desc = editor.getHTML(); // rich text description

    const newBlog = {
      id: blogs.length + 1,
      title,
      desc,
      image: image || "/img/default.jpg",
      location: "Unknown",
      date: new Date().toISOString().split("T")[0],
    };

    setBlogs([...blogs, newBlog]);

    // clear input fields
    setTitle("");
    setImage("");
    editor.commands.setContent("");
  };

  if (!editor) return null;

  return (
    <>
      <div style={{ padding: "20px" }} className="Add-blogContainer">
        <div className="Form-Addblog">
          <h2>Add New Blog</h2>

          <form className="Addblogform" onSubmit={handleSubmit}>
            {/* Title */}
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <br />

            {/* Notion Style Toolbar */}
            <div className="btngroup"
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                background: "#f5f5f5",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                gap: "10px",
              }}
            >
              <button className="tool" type="button" onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
              <button className="tool" type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
              <button className="tool" type="button" onClick={() => editor.chain().focus().toggleUnderline().run()}>Underline</button>
         

              <button className="tool" type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>

              <button className="tool" type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
              <button className="tool" type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>

              <button className="tool" type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()}>Quote</button>

              <button className="tool" type="button" onClick={() => editor.chain().focus().toggleHighlight().run()}>Highlight</button>

              <button className="tool" type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()}>Line</button>



           
            </div>

            {/* Editor Area */}
            <div className="textarea"
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                minHeight: "200px",
                borderRadius: "10px",
                background: "white",
                marginBottom: "15px",
              }}
            >
              <EditorContent editor={editor} />
            </div>

            {/* Image */}
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <br />

            <button className="fbtns" type="submit">Add Blog</button>
          </form>
        </div>
      </div>

      {/* Your Footer (same as before) */}
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
