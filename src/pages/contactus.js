import React, {useState} from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styles from '../components/contactus.module.css'

const Contactus = () => {
  const [Formstate, setFormState] = useState({
    name:"",
    email:"",
    subject:"",
    message:"",
    feedbackMsg:null
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = (e) => {
    setFormState({ ...Formstate, [e.target.name]: e.target.value });

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({message:''});
    e.target.reset();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...Formstate,
      }),
    })
    addToMailchimp(Formstate.email,{
      "FNAME":Formstate.name,
      "SUBJECT":"contact_form -" + Formstate.subject,
      "MESSAGE":Formstate.message,
    }).then((response) => {
      setFormState({
        feedbackMsg: "Form submitted successfully!",
      })
    })
    .catch((err) => {
      setFormState({
        feedbackMsg: "This email already exists.",
      })
    })
  }
  return (
    <Layout>
      <SEO title="Contactus" />
      <div className={styles.contactus}>
        <div className={styles.contactusimg}>
          <div className={styles.contactustext}>
            <h2>Contact Us</h2>
            <p>We love to hear from you - if 
              you have any questions and would like 
              to get in contact with us then you can use
              the form below:</p>
          </div>
          <div className={styles.contactform}>
            <form name="contactform2" method="POST"  action="/" onSubmit={handleSubmit}
          data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contactform2" />
            <p>
            <input type="text" name="name" placeholder=" Name"
            onChange={handleChange} required value={Formstate.name}/>
            </p>
            <p>
            <input type="text" name="email" placeholder=" Mail-id"
            onChange={handleChange} required value={Formstate.email}/>
            </p>
            <p>
            <input type="text" name="subject" placeholder=" Subject"
            onChange={handleChange} required value={Formstate.subject}/>
            </p>
            <p>
            <textarea
              type="text" name="message" placeholder=" Message" 
              onChange={handleChange} required value={Formstate.message}/>
            </p>
            <br/>
            <p style={{color:`white`,paddingLeft:125}}>{Formstate.feedbackMsg}</p>
            <div>
            <button className={styles.button} type="submit"
            value="Send">Send</button>
            </div>
          </form>
        </div>  
        </div>
      </div>
    </Layout>
  )
}
export default Contactus