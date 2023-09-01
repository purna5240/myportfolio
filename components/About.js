import React from 'react'
// import { Container } from 'react-bootstrap'
import './About.css';

export default function About() {
  return (
    <>
    <div className="conatiner my-3"style={{scrollSnapType:'y mandatory'
       ,overflowY:'scroll',height:'100vh',
       }}>
      <section className='one' style={{height :'auto',backgroundColor:'black',display:'flex',justifyContent:'center',alignItems:'center',scrollSnapAlign:'start',}}>
        <div className="small" style={{flex:'1',height:'100vh',display:'flex',alignItems:'center'}}>
          {/* <img src="ptfimg.jpg" alt="" /> */}
          <img src="ptfimg2.jpg" alt=""  style={{maxWidth:'70%',height:'auto',}}/>
        </div>
        <div className="big" style={{flex:'2',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center'}}>
         {/* <img src="/abtme.png" alt="" /> */}
         
         <h1 className='text' style={{fontWeight:'bold',color:'green'}}>I am <span>Purna Chandra Nandigana,</span> </h1>
        <p className='text' style={{fontSize:'20px',color:'white'}}>I am an an undergraduate degree in Information Technology from Anil Neerukonda Institute Of Technology And Sciences.I am an aspiring web developer looking forward for a challenging position in a reputed organisation which would enhance my knowledge and Interests. I like to watch movies in my free time and have keen interest towards movies.</p>
        <div className="container my-3">
        <a href='/Purna Chandra NextLevel Resume (1).pdf' download="purnaresume.pdf" type="button" class="btn btn-success" style={{width:'30%',height:'auto'}}>Download Resume</a>
        </div></div>

      </section>
      <section className='two' style={{height :'100vh',backgroundColor:'black',scrollSnapAlign:'start',display:'flex',flexDirection:'column',justifyContent:'space-around',}}>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',}}>
            <img src="edu2.webp" className='eduimg' alt="" />
            <div className="education">
              <h1 className="education-heading">Education</h1>
              <ul className="education-list" >
                <li style={{color:'white'}}>
                  <strong>Bachelor of Technology - BTech</strong> • Anil Neerukonda Institute of Technology and Sciences (ANITS), Visakhapatnam
                  <br />
                  Information Technology • Grade: 8.69
                </li>
               
                <li style={{color:'white'}}>
                  <strong>Intermediate</strong> • Sri Chaitanya Junior College, Vijayawada
                  <br />
                  M.P.C • Grade: 9.0 • Jan 2020 - Apr 2020
                </li>
                <li style={{color:'white'}}>
                  <strong>Tenth</strong> • Dr KKR's Gowtham School, Rajamahendravaram
                  <br />
                  Grade: 10.0 • Jun 2016 - Jan 2018
                </li>
              </ul>
            </div>
            </div>
            <div className='container my-3' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <img src="psd.png" alt=""  style={{width:'20%',height:'auto'}}/>
            <h1 className="personals">Personal Details</h1>
            <p className="text1" style={{color:'white'}}>
              Vizianagaram, India &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +91 7396017491 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; purnanandigana@gmail.com
            </p>
            </div>

      {/* </section>
       <section style={{height :'100vh'}}>
         <h1>HI</h1>
       </section>
       <section style={{height :'100vh'}}>
         <h1>HI</h1> */}
       </section>
</div>
</>
  )
}
