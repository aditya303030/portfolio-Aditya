import React,{useRef} from "react";
import '../../App.css'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef()
  //sending an email
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_p8dentd','template_z2e8x4b',form.current,'55eC1v8scPdqPqIPs')
      .then(result => {
        console.log(result.text)
      },(error)=> {
        console.log(error.text)
      })
  }
  return(
    <div className="form-container">
      <form ref={form} className="form" onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <input className="input-c name" type="text" name="user_name" />
        <label className="placeholder name">Your Name</label>
        <input className="input-c email" type="email" name="user_email" />
        <label className="placeholder email">Email Adress</label>
        <input className="input-c message" name="message" />
        <label className="placeholder message" >Your message for me...</label>
        <input className="submit-btn" type="submit" value="Send" />
      </form>
    </div>
    
  )
}

export default ContactForm;