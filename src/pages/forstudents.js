import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from '../components/forstudents.module.css'
import education from '../assets/images/education.png'
import Subscribe from '../components/Subscribe'

const Forstudents = () => {
  return(
  <Layout>
    <SEO title="Forstudents" />
    <div className={styles.intro}>
      <div className={styles.introheader}>
        <p style={{color:`white`}}>
          This is how we help you land in your dream job...
        </p>
      </div>
    </div>
    <div className={styles.clgapplication}>
      <div className={styles.applicationimg}>
        <div className={styles.applicationtext}>
            <h1 style={{color:`white`}}>College Application & Exam Preparation</h1>
            <p>We guide you through the preparation for your entrance exams 
              and interviews for higher education, we also provide you with 
              an overall outlook and personalised analysis about which course 
              or college suits you better.
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
    <div className={styles.study}>
      <div className={styles.studyimg}>
        <div className={styles.studytext}>
          <h1>Higher Study Guidance</h1>
          <p>The needs of your higher education are specific 
            to your field, financial background and interest. 
            We help you identify what has been holding you back 
            and enable you to get into the best institute or college.
          </p>
        </div>
      </div>
    </div>
    <div className={styles.jobsearch}> 
      <div className={styles.jobinfo}>
        <div className={styles.jobimg}>
          <img src={education} alt="education" />
        </div>
        <div className={styles.jobtext}>
          <h1>Finding difficulty in planning your higher education dreams</h1>
          <a href="https://go.oncehub.com/RanaInsight" target="_blank"><button className={styles.buttoncall}>Schedule A Call</button></a>
        </div>
      </div>
    </div>
    <Subscribe/>
  </Layout>
  )
}

export default Forstudents