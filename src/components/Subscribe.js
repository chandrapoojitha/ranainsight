import React, {useState} from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import styles from './subscribe.module.css'

 const Subscribe = () => {
  const [Formstate, setFormState] = useState({
    name:"",
    email:"",
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
      "list_id":"eb74dfa56b",
      "SUBJECT":"subscriber_form",
    }).then((response) => {
      setFormState({
        feedbackMsg: "Form submitted successfully!",
      })
    })
    .catch((err) => {
      setFormState({
        feedbackMsg: "Form could not be submitted.",
      })
    })
  }
  return(
    <>
      <div className={styles.signup}>
        <div className={styles.signupimage}>
        <div className={styles.signuptext}>
          <div className={styles.signtext}>
            <div className={styles.textsignup}>
              <p>Subscribe for free to receive all the trending 
                global business and tech updated along with some 
                awesome career guidance tips for your job interviews 
                and college entrance tests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.signupform}>
      <div className={styles.formtext}>
        <h2>Subscribe to receive free interview tips</h2>
        <div className={styles.form}>
          {Formstate.feedbackMsg}
          <form name="contact" method="POST" 
          onSubmit={handleSubmit} 
          data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p>
          <label>
          <br/>
          <input type="text" name="name" placeholder="  Enter your name"
          onChange={handleChange} required value={Formstate.name}/>
          </label>
          </p>
          <p>
          <label>
          <br/>
          <input type="text" name="email" placeholder="  Enter your email"
          onChange={handleChange} required value={Formstate.email}/>
          </label>
          </p>
          <br/>
          <button className={styles.button} type="submit">Subscribe</button>
        </form>
        </div>  
      </div>
    </div>
  </>
  )
}

export default Subscribe