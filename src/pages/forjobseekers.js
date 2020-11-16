import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import jobsearch from '../assets/images/jobsearch.png'
import styles from '../components/jobseekers.module.css'
import Subscribe from '../components/Subscribe'

const Forjobseekers = () => {
  return(
    <Layout>
      <SEO title="Forjobseekers" />
      <div className={styles.intro}>
        <div className={styles.introheader}>
          <p style={{color:`white`}}>
            This is how we help you land in your dream job...
          </p>
        </div>
      </div>
      <div className={styles.resume}>
        <div className={styles.resumeimg}>
          <div className={styles.resumetext}>
              <h1 style={{color:`white`}}>Interview Preparation</h1>
              <p>We will prepare you for the interviews that can decide large
                positions of your career and overall outlook.We work with everyone
                from students to those looking to enter the workplace for the first time.
              </p>
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.skillsimg}>
          <div className={styles.skillstext}>
              <h1 style={{color:`white`}}>Soft Skills Training</h1>
              <p>We offer you a bespoke Soft Skills coaching program,with a 
                unique blend of Life coaching and tangible real world skills
                including communication,personality development and people skills.
              </p>
          </div>
        </div>
      </div>
      <div className={styles.career}>
        <div className={styles.careerimg}>
          <div className={styles.resumetext}>
              <h1 style={{color:`red`,fontWeight:`bold`}}>Career Guidance</h1>
              <p style={{color:`#0E1E40`,opacity:1}}>The needs of your team and you are specific to your business
                situation,experience and background.We help you identify what has been
                holding you back and enable you to construct a bright career path.
              </p>
          </div>
        </div>
      </div>
      <div className={styles.jobsearch}>
        <div className={styles.jobinfo}>
          <div className={styles.jobimg}>
            <img src={jobsearch} alt="jobsearch" />
          </div>
          <div className={styles.jobtext}>
            <h1>Having difficult finding jobs amid COVID crisis?</h1>
            <a href="https://go.oncehub.com/RanaInsight" target="_blank"><button className={styles.buttoncall}>Schedule A Call</button></a>
          </div>
        </div>
      </div>
      <Subscribe />
    </Layout>  
  )
}

export default Forjobseekers
