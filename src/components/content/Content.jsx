import React from 'react'
import mails from '../../mails';
import { useParams } from 'react-router-dom';
import Mail from '../Mail/Mail';


function Content() {
  const {id} = useParams();
  const parsedId = parseInt(id, 10);
  const foundItem = mails.find(item => item.id === parsedId);

  return (
    <div> 
    {foundItem ? <Mail 
    subject={foundItem.title}
    text={foundItem.content}
    url={foundItem.url} />: "No mail found for this ID"}
    
    </div>
  )
}

export default Content