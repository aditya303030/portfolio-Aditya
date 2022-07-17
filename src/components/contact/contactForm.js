import React,{useRef} from "react";
import '../../App.css'
import emailjs from '@emailjs/browser';
//sservice_p8dentd
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
    <form ref={form} className="form-container" onSubmit={sendEmail}>
      <label>Name</label>
      <input className="input-c" type="text" name="user_name" />
      <label>Email</label>
      <input className="input-c" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="input-c" name="message" />
      <input className="submit-btn" type="submit" value="Send" />
    </form>
  )
}

export default ContactForm;