import React from 'react'
// import Skills from './Skills'
// import ProjecItems from './ProjecItems'
export default function profile() {
  const pimgstyle={
    position: 'relative',
    right: '5rem', // Adjust relative to the container width
    bottom: '5rem',
    // display:'flex',
    width: '11rem',
    height: 'auto',
    alignItems: 'center',justifyContent: 'space-around'
  }
  const tstyle={
    position: 'relative',
    left:'50px',
    top:'120px',
    textWeight:'bold',
    color:'green'
    
  }
  const cam={
    position:'relative',
    bottom:'150px',
    left:'10px',
    fontSize: '50px'
  
  }
  const wrap={
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    gap:'35px'
    
  }
  const iconStyle = {
    fontSize: '40px', // Adjust the font size as needed
    color:'green'
  }
  // const btn={
  //   size:'40px', height:'50px',position:'relative',right:'50px',
  // }

  return (
    <>
    <div className="container" style={{display:'flex'}}>
      <div className="small-column"  style={{padding: '135px' ,border: '9px solid green' ,borderRadius :'35px',marginTop:'50px' ,width: '20%',display:'flex',flexDirection:'column',backgroundColor:'white' }}>
        
          <h1 style={cam}>.</h1>
      <h2 style={{ margin: 0, position: 'relative', bottom: '9.5rem', right: '5rem' ,color:'#2E8B57',fontWeight:'bold' }}>My Portfolio</h2>
    
      {/* <div  style={ {alignItems: 'center',justifyContent: 'space-around'}}> */}
      <img src="/ptfimg.jpg"  alt="" style={pimgstyle} />
      {/* <button type="button" class="btn btn-success" style={{ flexGrow: 2, width: '100%'}}>ContactMe</button> */}
      <div className="wrapper" style={wrap}>
        <a className="button" href="https://www.linkedin.com/in/purna-nandigana-1a4b18243/" >
          <div className="icon">
            <i className="fab fa-linkedin-in" style={iconStyle}></i>
          </div>
          {/* <span>LinkedIn</span> */}
        </a>
        <a className="button" href='https://www.instagram.com/p_u_r_n_a__/?igshid=NTc4MTIwNjQ2YQ%3D%3D'>
          <div className="icon">
            <i className="fab fa-instagram" style={iconStyle}></i>
          </div>
          {/* <span>Instagram</span> */}
        </a>
        <div className="button">
          <div className="icon">
            <i className="far fa-envelope" style={iconStyle}></i>
          </div>
          {/* <span>Email</span> */}
        </div>
      </div>
      </div>
      {/* </div> */}
      <div className="big-column" style={{ width: '100%' ,display:'flex',flexDirection:'column',justifyContent:'center' }}>
        <h1 className='text' style={tstyle}>Hello! 
        I am <br /><span style={{ color: 'white' }}>Purna Chandra Nandigana.</span></h1>
        <h3 className='text' style={tstyle} my-3>A dedicated student with a passion for learning and creating.</h3>
        {/* <h2 style={{position:'absolute',left:'4rem',top:'20rem',fontWeight:'bold',color:'green'}}>My Skills </h2> */}
        </div>
    </div>
    </>
  )
}
