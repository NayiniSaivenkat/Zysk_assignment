import React from 'react'
import "./Feature2.css"
import Content from "../assets/Content.png"
import Symbol1 from "../assets/chat-circle.png"
import Symbol2 from "../assets/Featured_icon.png"
import Symbol3 from "../assets/Featured_icon1.png"
import Arrow from "../assets/arrow-right.png"
import ContentMobile from "../assets/Content_small.png"
const Feature2 = () => {
  return (
    <div>
        <p style={{border:"1px solid #E9D7FE",color:"#6941C6",display: "inline-block",padding:"2px",borderRadius:"1rem",backgroundColor:"#F9F5FF"}}>Features</p>
        <p style={{fontWeight:"600",fontSize:"36px",margin:"10px"}}>Cutting-edge features for advanced analytics</p>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <picture>
        <source media="(max-width: 768px)" srcSet={ContentMobile} /> {/* Image for smaller screens */}
        <img src={Content} alt="content" /> {/* Default image for larger screens */}
        </picture>
        <div className='features_Container'>
        <div className='card'>
        <img src={Symbol1} alt="symbol"/>
        <p style={{fontWeight:"600",fontSize:"20px"}}>Share team inboxes</p>
        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        <p style={{color:"#6941C6"}}>Learn more<img src={Arrow} alt="arrow-right"/> </p> 
        </div>
        <div className='card'>
        <img src={Symbol2} alt="symbol"/>
        <p style={{fontWeight:"600",fontSize:"20px"}}>Deliver instant answers</p>
        <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        <p style={{color:"#6941C6"}}>Learn more<img src={Arrow} alt="arrow-right"/> </p>   
        </div>
        <div className='card'>
        <img src={Symbol3} alt="symbol"/>
        <p style={{fontWeight:"600",fontSize:"20px"}}>Manage your team with reports</p>
        <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
        <p style={{color:"#6941C6"}}>Learn more<img src={Arrow} alt="arrow-right"/> </p>    
        </div>
        
        </div>
    
    </div>
  )
}

export default Feature2