import React from 'react'
import Arrow from "../assets/arrow-right.png"
import Play from "../assets/play-circle.png"
import HeroImage from "../assets/Container.png"
import "./Heading.css"
const Heading = () => {
  return (
    <div className='heading'>
        {/* <div className='badge_group'>
        <p style={{border:"1px solid black",borderRadius:"1rem",padding:"0.1rem",marginRight:"0.5rem",marginLeft:"0.5rem"}}>New feature</p>
        <p>Checkout the team dashboard <img src={Arrow} alt="arrow-right"/> </p>
        </div> */}
            <div className="badge-button">
          <span className="badge">New feature</span>
          <a href="/team-dashboard" className="link">
            Check out the team dashboard →
          </a>
        </div>
        <h1 style={{marginLeft:"2rem",marginRight:"2rem"}}>Beautiful analytics to grow smarter</h1>
        <p style={{marginLeft:"2rem",marginRight:"2rem"}}>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className='actions'>
            <button style={{backgroundColor:"white"}}> <img src={Play} alt="play"  />   Demo</button>
            <button style={{border: "1px solid #7F56D9",color:"white",backgroundColor:"#7F56D9"}} >Sign up</button>
        </div>
        <img src={HeroImage} alt="Hero_Image" className='hero_image'  />
        
    </div>
  )
}

export default Heading