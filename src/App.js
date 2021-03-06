import React, { useState } from 'react';
import data from './data';
function App() {
  const[count,setCount]=useState(0);
  const[text,setText]=useState([]);

  const handleSubmit=(e)=>{
   e.preventDefault();
   if(count<=0)
   setText(data.slice(0,1));
   else
   setText(data.slice(0,count));
  }
  return (
 <section className="section-center">
   <h1>wanna generate text ????</h1>
   <form className="lorem-form" onSubmit={handleSubmit}>
  <label>paragraphs:</label> 
    <input type="number" name="amount" id="amount" value={count}
    onChange={(e)=>setCount(e.target.value)}></input>  
   <button type="submit" className="btn">generate</button>
   </form>
   <article className="lorem-text">
   {text.map((item,index)=>{
     return <p key={index}>{item}</p>
   })}
   </article>
 </section>
    )
}

export default App;
