import React from "react";
import { useState } from "react";
import "./Hero.css";
import mails from "../../mails";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useLocation } from "react-router-dom";

function Hero() {
  const [mail, setMail] = useState(mails);
  const [checkedMails, setCheckedMails] = useState([]);
  const [search, setSearch] = useState("");

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
  function toggleStar(id) {
    setMail(mail.map((m) => (m.id === id ? { ...m, starred: !m.starred } : m)));
  }
  const mailsToDisplay =
    location.pathname === "/starred" ? mail.filter((m) => m.starred) : mail;

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search mail"
          className="search-box"
        />
      </div>
      <div className="table-container">
        <table>
          <tr>
            <td onClick={() => deleteMail()} className="delete-icon">
              <DeleteOutlinedIcon />
            </td>
          </tr>
          {mailsToDisplay
            .filter((val) =>
              search
                ? val.content.toLowerCase().includes(search.toLowerCase()) ||
                  val.title.toLowerCase().includes(search.toLowerCase())
                : true
            )
            .map((val) => (
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
                <Link to={`/content/${val.id}`}>
                  <td>
                    <td>{val.title}</td>
                  </td>
                  <td>{val.content.substring(0, 115) + "..."}</td>
                </Link>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
export default Hero;
