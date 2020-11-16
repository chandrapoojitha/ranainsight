import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from '../components/aboutus.module.css'
import roots from '../assets/images/roots.png'
import careerguidance from '../assets/images/careerguidance.png'
import softskills from '../assets/images/softskills.png'
import careerplans from '../assets/images/careerplans.png'
import Subscribe from '../components/Subscribe'

const Aboutus = () => {
  return(
    <Layout>
      <SEO title="AboutUs" />
      <div className={styles.roots}>
        <div className={styles.rootsinfo}>
          <div className={styles.rootsimg}>
            <img src={roots} alt="roots" />
          </div>
          <div className={styles.rootstext}>
            <h1>Our Roots</h1>
            <p>Rana Insight is a coaching and career skills 
              counselling business based in the UK
            </p>
          </div>
        </div>
      </div>
      <div className={styles.softskills}>
        <div className={styles.softskillsinfo}>
          <div className={styles.softskillstext}>
            <h1>Soft Skills Training</h1>
            <p>Rana Insight has created bespoke Soft Skills 
              training with a unique blend of Life Coaching 
              and tangible real world skills
            </p>
          </div>
          <div className={styles.softskillsimg}>
            <img src={softskills} alt="softskills" />
          </div>
        </div>
      </div>
      <div className={styles.career}>
        <div className={styles.careerinfo}>
          <div className={styles.careerimg}>
            <img src={careerguidance} alt="careerguidance" />
          </div>
          <div className={styles.careertext}>
            <h1>Career Guidance</h1>
            <p>Rana Insight will prepare you for the 
              interviews that can decide large portions 
              of your career and overall outlook
            </p>
          </div>
        </div>
      </div>
      <div className={styles.plans}> 
        <div className={styles.plansinfo}>
          <div className={styles.planstext}>
            <h1>Are your career plans affected because of covid-19?</h1>
            <a href="https://go.oncehub.com/RanaInsight" target="_blank"><button className={styles.buttoncall}>Schedule A Call</button></a>
          </div>
          <div className={styles.plansimg}>
            <img src={careerplans} alt="careerplans" />
          </div>
        </div>
      </div>
      <Subscribe />
    </Layout>
  )
}
export default Aboutus