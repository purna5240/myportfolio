import React,{useState} from 'react'

export default function Textform(props) {
   const handlemessage=()=>{
      console.log("clicked")
      if(message==="")
      {
        setmessage("YOU DIDNT ENTER ANYTHING  ")
        props.showAlert("You didnn't enter anything","warning")
      }
      else
      {
      let newmessage="Purna recieved your message("+message+")"
      setmessage(newmessage)
      props.showAlert("Thanks for the message","success")
    }}
    const onchange=(event)=>{
        
        console.log("onchange")
        setmessage(event.target.value)
  
      }
   
    const [message,setmessage]=useState("") 
        console.log(useState("send message"))
  return (
    <div>  
<div className="mb-3">
    <h3>{props.heading}</h3>
  {/* <label for="mytext" className="form-label">Example textarea</label> */}
  
  <textarea className="form-control" id="mytext" rows="3" value={message} onChange={onchange}></textarea>
  <button className="btn btn-primary my-3" onClick={handlemessage} >Send Message</button>
  
</div>
    </div>  
  )
}
