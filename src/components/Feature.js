import React from 'react'
import "./Feature2.css"
import Symbol1 from "../assets/chat-circle.png"
import Symbol2 from "../assets/Featured_icon.png"
import Symbol3 from "../assets/Featured_icon1.png"
import Symbol4 from "../assets/Featured_icon2.png"
import Symbol5 from "../assets/Featured_icon3.png"
import Symbol6 from "../assets/Featured_icon4.png"
const Feature = () => {
  return (
    <div>
        <p style={{color:"#6941C6",marginTop:"1rem"}}>Features</p>
        <p style={{fontWeight:"600",fontSize:"36px"}}>Analytics that feels like it’s from the future</p>
        <p style={{color:"#475467"}}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className='features_Container'>
        <div className='card'>
        <img src={Symbol1} alt="symbol"/>
        <p style={{fontWeight:"600",fontSize:"20px"}}>Share team inboxes</p>
        <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>
        <div className='card'>
        <img src={Symbol2} alt="symbol"/>
        <p style={{fontWeight:"600",fontSize:"20px"}}>Deliver instant answers</p>
        <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>  
        </div>
        <div className='card'>
        <img src={Symbol3} alt="symbol"/>
        <p style={{fontWeight:"600",fontSize:"20px"}}>Manage your team with reports</p>
        <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>   
        </div>
        <div className='card'>
        <img src={Symbol4} alt="symbol"/>
        <p style={{fontWeight:"600",fontSize:"20px"}}>Connect with customers</p>
        <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>   
        </div>
        <div className='card'>
        <img  src={Symbol5} alt="symbol"/>
        <p style={{fontWeight:"600",fontSize:"20px"}}>Connect the tools you already use</p>
        <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>   
        </div>
        <div className='card'>
        <img src={Symbol6} alt="symbol" />
        <p style={{fontWeight:"600",fontSize:"20px"}}>Our people make the difference</p>
        <p>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>   
        </div>
        </div>
    </div>
  )
}

export default Feature