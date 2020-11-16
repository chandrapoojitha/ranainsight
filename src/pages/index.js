import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import styles from '../components/index.module.css'
import part2img1 from '../assets/images/part2img1.jpeg'
import part2img2 from '../assets/images/part2img2.jpg'
import image3_1 from '../assets/images/image3_1.png'
import image3_2 from '../assets/images/image3_2.jpg'
import image3_3 from '../assets/images/image3_3.jpg'
import image3_4 from '../assets/images/image3_4.jpg'
import testimage from '../assets/images/testimage.png'
import quote from '../assets/images/quote.svg'
import Subscribe from '../components/Subscribe'

const Index = () => {
  return(
  <Layout >
    <SEO title="Home " />
  <div className={styles.part1}>
    <div className={styles.part1image}>
      <div className={styles.part1text}>
        <p>Are your Career plans affected by Covid-19?</p>
      </div>
      <div className={styles.part1text2}>
        <p>Unable to find a job amid covid crisis?</p>
        <p>Facing difficult getting through the competition?</p>
        <p>Lacking relevant skills to match your profile with the requirements of your dream 
          company?</p>
        
      </div>
    </div>
  </div>
  <div className={styles.schedulebutton}>
    <a href="https://go.oncehub.com/RanaInsight" target="_blank"><button className={styles.buttoncall}>
      Schedule A Call</button></a>
  </div>
  <div className={styles.part2}>
    <div className={styles.heading}>
      <h2 className={styles.part2Text}>
        Stand out from the crowd to get selected in your
      </h2>
    </div> 
    <div className={styles.image}>
      <div className={styles.imagepart1}>
        <div className={styles.image1}>
          <img src={part2img1} alt="part2img1" />
        </div> 
        <div className={styles.text1}>
          <div className={styles.image1text}>
            <h2 >Dream Job</h2>
            <ul>
              <li>Personalized Career Guidance</li>
              <li>Interview Preparation</li>
              <li>Dominant Resume Building</li>
              <li>Corporate Soft Skill Training</li>
            </ul>
          </div>
        </div> 
      </div> 
      <div className={styles.imagepart2}>
        <div className={styles.image2}>
          <img src={part2img2} alt="part2img2"  />
        </div>
        <div className={styles.text2}>
          <div className={styles.image2text}>
            <h2>Dream University</h2>
            <ul>
              <li>Live Consulation Sessions</li>
              <li>Training For College Interviews</li>
              <li>Guidance on Course selection</li>
              <li>Student Motivation programs</li>
            </ul>
          </div>
        </div>  
      </div>  
    </div>
  </div>
  <div className={styles.part3}>
    <div className={styles.heading}>
      <h2 style={{paddingTop:50,textAlign:`center`}}>We Offer You</h2>
    </div>
    <div className={styles.cards}>
      <div className={styles.card}>
        <img src={image3_1} alt="image3_1" style={{width:`100%`}} />
        <div className={styles.container}>
          <h4 style={{color:`#0E1E40`}}><b>Executive Coaching</b></h4> 
          <p>It can get difficult staying relevant in a dynamic world. 
            Our corporate executive training program helps you to 
            progress and become a better leader for the global market.</p> 
        </div>
      </div>
      <div className={styles.card}>
        <img src={image3_2} alt="image3_2" style={{width:`100%`}}/>
        <div className={styles.container}>
          <h4 style={{color:`#0E1E40`}}><b>Interview Preparation</b></h4> 
          <p>Are you nervous about sitting for your first big interview? 
            Or have you been unable to get call backs from recruiters?
             Our exclusive interview training can boost your confidence 
             and help you land your dream job!</p> 
        </div>
      </div>
      <div className={styles.card}>
        <img src={image3_3} alt="image3_3" style={{width:`100%`}}/>
        <div className={styles.container}>
          <h4 style={{color:`#0E1E40`}}><b>Soft Skills Training</b></h4> 
          <p>This program trains you in real-world skills like 
            communication, networking and personality development 
            while helping you find your true self. Participate in
            this unique coaching to identify your goals and succeed in life.</p> 
        </div>
      </div>
      <div className={styles.card}>
        <img src={image3_4} alt="image3_4" style={{width:`100%`}}/>
        <div className={styles.container}>
          <h4 style={{color:`#0E1E40`}}><b>Career & Team Building</b></h4> 
          <p>If your organisation has been facing bottlenecks 
            in everyday business activities, our team building 
            program may be right for you. We help you identify 
            your weaknesses and turn them into your core strengths
            for a prosperous future.</p> 
        </div>
      </div>  
    </div>
  </div>
  <div className={styles.testimonial}>
    <div className={styles.heading}>
      <h2 style={{paddingTop:50,textAlign:`center`}}>Testimonials</h2>
    </div>
    <div className={styles.testcards}>
      <div className={styles.testcard1}>
        <div className={styles.textcard1}>
          <div className={styles.images}>
            <div className={styles.testimage1}>
              <img src={testimage} alt="testimage" style={{width:60,height:60}}/>
            </div>
            <span>Amal</span>
            <div className={styles.testimage2}>
              <img src={quote} alt="quote" style={{width:60,height:60}}/>
            </div>
          </div>
          <div className={styles.textcontainer}>
            <p>First of all I would like to thank Rana Insight, 
              for their efforts and works to build an awareness 
              about the importance of soft skills in today’s youth. 
              They provide a wonderful opportunity for our career. 
              For me personally it was a very helpful and interesting 
              learning experience with Rana Insight. I feel powered 
              with knowledge and potential to take control of my career 
              and face the interviews confidently after joining team Rana. 
              The content they offer is really good and was helpful for us 
              to understand and identify our mistakes and also to correct them.
              Would recommend everyone to join the journey of empowerment with 
              Rana Insight, right now.
              All the best to all the budding aspirants! 👍🏻</p>
          </div>
        </div>
      </div>
      <div className={styles.testcard2}>
        <div className={styles.textcard2}>
          <div className={styles.images}>
            <div className={styles.testimage1}>
              <img src={testimage} alt="testimage" style={{width:60,height:60}}/>
            </div>
            <span>Sudheer</span>
            <div className={styles.testimage2}>
              <img src={quote} alt="quote" style={{width:60,height:60}}/>
            </div>
          </div>
          <div className={styles.textcontainer}>
            <p>I did my bachelor's in commerce from one of India's 
              top colleges. But after graduating, I was really uncertain 
              about what I wanted. I have always been weak with 
              presentations and wanted to strengthen my communication 
              skills too. When I heard about Rana Insight's Soft Skills 
              coaching, it sounded perfect for me. Who I was before and 
              after the training are two completely different people. 
              I am now more confident about what my goals are and just 
              got into one of Europe's best MBA programs. 
              Thank you Rana for helping me achieve this!</p> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <Subscribe/>
  </Layout>
  )
}

export default Index
  
