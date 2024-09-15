import React from 'react';
import "./Mail.css"


function Mail({subject,text,url}) {
  return (
   <section className='mail'>
   <div className='title-url'>
   <h3>{subject}</h3>
   <p>{url}</p>
   </div>
   <p>{text}</p>
   
   </section>
  )
}

export default Mail