import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useOutletContext } from 'react-router-dom';

function StarredMails() {
  const { starredMails, toggleStar } = useOutletContext(); // Access only starred mails

  return (
    <div className="table-container">
      <table>
        <tbody>
          {starredMails.map((val) => (
            <tr key={val.id} className="row">
              <td>
                {/* Star Icon - clickable to toggle star status */}
                <span onClick={() => toggleStar(val.id)}>
                  {val.starred ? <StarIcon /> : <StarBorderIcon />}
                </span>
              </td>
              <td>
                <a href={`/content/${val.id}`}>
                  <span>{val.title}</span>
                  <span>{val.content.substring(0, 115) + "..."}</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StarredMails;
