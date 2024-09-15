import React from "react";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import "./Hero.css";
import mails from "../../mails";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


function Hero() {
  const [mail, setMail] = useState(mails);
  const [checkedMails, setCheckedMails] = useState([]);

  function deleteMail() {
    setMail((prev) => prev.filter((val) => !checkedMails.includes(val.id)));
  }

  function updateCheckBox(id) {
    setCheckedMails((prev) => {
      if (prev.indexOf(id) === -1) {
        return [...prev, id];
      }
      return prev.filter((val) => val !== id);
    });
  }

  return (
    <div className="table-container">
      <table>
        <tr>
          <td onClick={() => deleteMail()} className="delete-icon">
            <DeleteOutlinedIcon />
          </td>
        </tr>
        {mail.map((val) => (
        <a href={`/content/${val.id}`}> <tr key={val.id} >
            <td>
              <input type="checkbox" onClick={() => updateCheckBox(val.id)} />{" "}
            </td>
            <td>
              <td>{val.title}</td>
            </td>
            <td>{val.content.substring(0,120)+"..."}</td>
          </tr>
          </a> 
        ))}
      </table>
    </div>
  );
}
export default Hero;
