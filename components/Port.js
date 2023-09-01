import React from 'react'
import './game.css';
export default function portfolio() {
  return (
    <>
     
    <div className="content connatiner my-3">
   
    <p className="para">
    <h2 className=" connatiner my-3"style={{color:'green'}}>My PortFolio </h2>
    <h4>Designed and developed a Gaming puzzle using HTML, CSS, JavaScript, and PHP.</h4> 
    <h4>Implemented interactive features and engaging visuals to enhance user experience .</h4>
     <h4>Utilized HTML to structure the puzzle layout and CSS to style and customize its appearance.</h4>
     <h4>Employed JavaScript for dynamic functionality, such as drag and drop interactions and timer countdown .</h4>
     <h4>Incorporated PHP to handle backend logic, user authentication, and score tracking. </h4></p>
     </div>
<div className="gallery container my-3">

<div  className="images1 container my-3">

  <img  className="images" src="home.png" alt="" />
  <img   className="images" src="skills.png" alt="" />
  <img  className="images" src="ach.png" alt="" />
  <img  className="images" src="project.png" alt="" />
  <img  className="images" src="pers.png" alt="" />
</div>

</div>
</>
  )
}
