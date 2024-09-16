import React from 'react'
import "./CTA.css"
const CTA = () => {
  return (
    <div>
        <p style={{fontWeight:"600",fontSize:"36px"}}>Start your free trial</p>
        <p style={{color:"#475467"}}>Join over 4,000+ startups already growing with Untitled.</p>
        <div className='actions'>
            <button style={{backgroundColor:"white"}}>Learn more</button>
            <button style={{border: "1px solid #7F56D9",color:"white",backgroundColor:"#7F56D9"}} >Get started</button>
        </div>
    </div>
   
  )
}

export default CTA