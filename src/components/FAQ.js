import React from 'react'
import Accordion from './Accordian'
import Avatar from "../assets/Avatar_group.png"
const FAQ = () => {
  return (
    <div>
        <p style={{fontWeight:"600",fontSize:"36px"}}>Frequently asked questions</p>
        <p style={{color:"#475467",margin:"1rem"}}>Everything you need to know about the product and billing.</p>
        <Accordion/>
        <div style={{marginTop:"2rem",marginBottom:"3rem"}}>
        <img src={Avatar} alt="avatar"/>
        <p style={{fontWeight:"600",fontSize:"20px"}}>Still have questions?</p>
        <p style={{color:"#475467",margin:"1rem"}}>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button style={{backgroundColor:"#7F56D9",border:"1px solid #FFFFFF",borderRadius:"5px",color:"white",textAlign:"center",padding:"2px"}}>Get in touch</button>
        </div>
    </div>
  )
}

export default FAQ