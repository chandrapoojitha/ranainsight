import React from 'react'
import fb1 from '../assets/images/fb1.svg'
import insta1 from '../assets/images/insta1.svg'
import twitter1 from '../assets/images/twitter1.svg'
import linkedin1 from '../assets/images/linkedin1.svg'
import contact from '../assets/images/contact.png'
import video from '../assets/images/video.svg'
import youtube from '../assets/images/youtube.svg'
import styles from './footer.module.css'

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <div className={styles.list}>
          <h4>Menu</h4>
          <ul>
            <li><a href="/" >Home</a></li>
            <li><a href="/forstudents">For Students</a></li>
            <li><a href="/forjobseekers">For Job Seekers</a></li>
            <li><a href="/aboutus">About us</a></li>
            <li><a href="/scheduleacall">Schedule A Call</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li style={{textDecoration:`underline`,display:`block`}}>
              <a href="/refundpolicy">Refund Policy</a></li>
            <li style={{textDecoration:`underline`}}>
              <a href="/privacypolicy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className={styles.info}>
          <div className={styles.information}>
            <h4>Support</h4>
            <div className={styles.contact}>
              <a href="/contactus" style={{textDecoration:`none`}}>
              <img src={contact} alt="contact" style={{width:72}}/>
              <div className={styles.infotext}>
                <span>Contact Us</span>
              </div>
              </a>
            </div>
            <div className={styles.video}>
              <a href="https://go.oncehub.com/RanaInsight" target="_blank" style={{textDecoration:`none`}}>
              <img src={video} alt="video" style={{width:48,marginLeft: `7%`}}/>
              <div className={styles.infotext2}>
                <span>Schedule Free Coaching Call</span>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.icons}>
          <ul>
            <li>
              <a href="https://www.facebook.com/RanaInsight/" target="_blank">
                <img src={fb1} alt={fb1} style={{width:50}}/></a>
              <a href="https://www.instagram.com/ranainsight/" target="_blank">
                <img src={insta1} alt={insta1} style={{width:50}}/></a>
              <a href="https://twitter.com/RanaInsight" target="_blank">
                <img src={twitter1} alt={twitter1} style={{width:50}}/></a>
              <a href="https://www.linkedin.com/company/ranainsight/" target="_blank">
                <img src={linkedin1} alt={linkedin1} style={{width:50}}/></a>
              <a href="https://www.youtube.com/channel/UC6pdCHsv210-z1fhVx4d2jw" target="_blank">
                <img src={youtube} alt={youtube} style={{width:50}}/></a>
            </li>
          </ul>
        </div>
      <div className={styles.copyright}>
        © 2020 by Rana Insight Limited.
      </div>  
    </footer>
  )
}

export default footer
