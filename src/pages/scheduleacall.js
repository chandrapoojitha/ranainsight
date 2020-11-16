import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from '../components/scheduleacall.module.css'

const scheduleacall =()=>{
  return(
    <Layout>
      <SEO title="ScheduleAcall" />
      <div className={styles.schedulecall}>
        <div className={styles.schedulecallimg}>
          <div className={styles.schedulecalltext}>
            <p>Schedule a free counselling call with our experts to get career advice</p>
          </div>
          <div className={styles.schedulebutton}>
            <a href="https://go.oncehub.com/RanaInsight">
              <button className={styles.buttoncall}>Schedule A Call</button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default scheduleacall