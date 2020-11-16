import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from '../components/faq.module.css'

const faq = () => {
  return(
    <Layout>
      <SEO title="FAQ" />
      <div className={styles.faq}>
        <div className={styles.faqimage}>
          <div className={styles.faqheading}>
            <p>Frequently Asked Questions</p>
          </div>
        </div>
      </div>
      <div className={styles.questions}>
        <h3>Who is the training for?</h3>
        <ul>
          <li>
          The group training is particularly valuable for 
          anyone who wants to stand out of the crowd, be 
          it students applying for a place at one of the 
          world’s leading universities or graduates wanting 
          to secure a top job. We also offer individual 
          one-to-one sessions to help you navigate your 
          personal path at any stage of your career.
          </li>
        </ul>
        <h3>Do the classes only take place online?</h3>
        <ul>
          <li>
          Yes, our classes only take place online. 
          We believe that online courses offer maximum 
          flexibility and allow our students to learn 
          in a safe and comfortable environment. Online 
          courses do not require travel and are therefore 
          a carbon-neutral way of learning.
          </li>
          <li style={{paddingTop:15}}>
          For the best outcome we recommend you coming 
          on video camera to be able to engage with your 
          fellow classmates in an interactive manner. 
          The extra benefit is that all our lessons will 
          be recorded so that you can revisit any lesson 
          at any time once the course has been completed.
          </li>
        </ul>
        <h3>How many participants will there be per course?</h3>
        <ul>
          <li>
          The courses will have a maximum of 8 participants 
          to offer you the best learning outcome. The small 
          group size will give you the chance to actively 
          engage in the lessons.
          </li>
        </ul>
        <h3>What language will the lessons be taught in?</h3>
        <ul>
          <li>
          The course is taught in English language. 
          The benefit is that it helps you prepare 
          for a career in an international environment.
          </li>
        </ul>
        <h3>What are the payment policies?</h3>
        <ul>
          <li>
          We strive hard at Rana Insight to make sure 
          everything goes to plan. We understand that 
          sometimes plans can change and we will work 
          with you when this happens. With that being 
          said our payment policies and general requirements 
          will be presented to you when purchasing 
          a seat on our training - its usually the case 
          that there will be no refund 14 days before the 
          teaching is set to take place. Please refer to 
          your individual booking confirmation 
          invoice for further details.
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default faq