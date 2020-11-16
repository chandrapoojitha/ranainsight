import React from 'react'
import facebook from "../../assets/images/facebook.svg"
import insta from "../../assets/images/insta.svg"
import twitter from "../../assets/images/twitter.svg"
import linkedin from "../../assets/images/linkedin.svg"
import './heading.css'

const Heading = ()=>{
    return(
        <div className ="header">
        <div className="name">
          <span>Unlock Your Personal potential!</span>
          <div className="mediaicons">
            <a href="https://www.facebook.com/RanaInsight/" target="_blank">
              <img src={facebook} alt="facebook" style={{width:26,paddingLeft:10}}/></a>
            <a href="https://www.instagram.com/ranainsight/" target="_blank">
              <img src={insta} alt="insta" style={{width:26,paddingLeft:10}}/></a>
            <a href="https://twitter.com/RanaInsight" target="_blank">
              <img src={twitter} alt="twitter" style={{width:26,paddingLeft:10}}/></a>
            <a href="https://www.linkedin.com/company/ranainsight/" target="_blank">
              <img src={linkedin} alt="linkedin" style={{width:26,paddingLeft:10}}/></a>
          </div>
        </div>
      </div> 
    )
}

export default Heading