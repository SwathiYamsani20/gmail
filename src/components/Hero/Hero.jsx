import React from "react";
import { useState } from "react";
import "./Hero.css";
import mails from "../../mails";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star"; // Add Material-UI Star icon
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useLocation } from "react-router-dom";

function Hero() {
  const [mail, setMail] = useState(mails);
  const { mails, toggleStar } = useOutletContext();
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
        {filteredMails.map((val) => (
          <tr key={val.id} className="row">
            <td>
              <input
                type="checkbox"
                onClick={() => updateCheckBox(val.id)}
                className="checkb0x"
              />
            </td>
            <td>
              {/* Star Icon - clickable to toggle star status */}
              <span onClick={() => toggleStar(val.id)}>
                {val.starred ? <StarBorderIcon /> : <StarIcon />}
              </span>
            </td>
            <a href={`/content/${val.id}`}>
              <td>
                <td>{val.title}</td>
              </td>
              <td>{val.content.substring(0, 115) + "..."}</td>
            </a>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Hero;
