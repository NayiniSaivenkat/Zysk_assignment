import React from 'react'
import "./Social.css"
import Img1 from "../assets/Logomark-1.png"
import Img2 from "../assets/Logomark-2.png"
import Img3 from "../assets/Logomark-3.png"
import Img4 from "../assets/Logomark-4.png"
import Img5 from "../assets/Logomark-5.png"
import Img6 from "../assets/Logomark-6.png"

const Social = () => {
  return (
    <div>
        <p style={{marginTop:"3rem",marginLeft:"1rem"}}>Join 4,000+ companies already growing</p>
        <div className='sample_companies'>
        <div>
        <img src={Img1} alt="Boltshift"/>
        <h4>Boltshift</h4>
        </div>
        <div>
        <img src={Img2} alt="Lightbox"/> 
        <h4>Lightbox</h4>
        </div>
        <div>
        <img src={Img3} alt="Featherdev"/> 
        <h4>Featherdev</h4>  
        </div>
        <div>
        <img src={Img4} alt="Spherule"/> 
        <h4>Spherule</h4>  
        </div>
        <div>
        <img src={Img5} alt="GlobalBank"/>
        <h4>GlobalBank</h4>   
        </div>
        <div>
        <img src={Img6} alt="Nietzsche"/> 
        <h4>Nietzsche</h4>  
        </div>
        </div>
    </div>
  )
}

export default Social