import React, { Component } from 'react'
import './pi.css';
export default class ProjecItems extends Component {
  render() {
    const game =()=>{
     <game/>
    }
    return (
    <div className="container my-3" style={{display:'flex'}} >
      {/* <h2 className='left_right' style={{fontWeight:'bold',color:'Green'}}>Projects </h2> */}
      <div></div>
      <div className="row " style={{display:'flex', justifyContent:'space-around'}}>
          <div className="col-md-4 container my-3">
          <div className="card" style={{width: 's20rem',color:'green',border:'4px solid green',borderRadius:'10px'}}>
           <img src="/portfolio.jpeg" className="card-img-top" alt="..."/>
         <div className="card-body">
        <h5 className="card-title">My Portfolio</h5>
         
         
         <a href="/Port" className="btn btn-success">View More</a>
        </div>
     </div>
          </div>
           <div className="col-md-4 container my-3">
           <div className="card" style={{width: 's20rem',color:'green',border:'4px solid green',borderRadius:'10px'}}>
           <img src="/gpuzzle.jpeg" className="card-img-top" alt="..."/>
         <div className="card-body">
        <h5 className="card-title">Gaming Puzzle</h5>

         <a href='/Game' className="btn btn-success" onClick={game}>View More</a>
        </div>
     </div>
          </div> 
          
      </div>
    </div>
    )
  }
}
