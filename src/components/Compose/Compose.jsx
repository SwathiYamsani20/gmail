// Compose.jsx
import React, { useState } from "react";
import "./Compose.css";

function Compose({ closeCompose, onSendMail }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const[openCC,setOpenCC]=useState(false)
  const[cc,setCC]=useState("")

  const handleSend = () => {
    const newMail = { to, subject, body, id: Date.now() }; // Example mail object
    onSendMail(newMail);
    closeCompose();
  };
  function handleOpenCC(){
    setOpenCC((prev)=>!prev);

  }

  return (
    <div className="compose-overlay">
      <div className="compose-box">
        <div className="compose-header">
        <p className="new-msg">New Message</p>
        <button className="close-button" onClick={closeCompose}>x</button>
        </div>
        <div>
        <input
          type="text"
          placeholder="To"
          value={to}
          className="to"
          onChange={(e) => setTo(e.target.value)}
        />
        
        <button onClick={handleOpenCC}>CC</button></div>
        {openCC?<input type="text"
        value={cc}
        className="cc"
        onChange={(e)=>setCC(e.target.value)}
        />:null}
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          className="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="message"
        />
        <button onClick={handleSend}className="send-btn">Send</button>
      </div>
    </div>
  );
}

export default Compose;
