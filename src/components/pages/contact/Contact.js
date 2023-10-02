import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <>
    <div className="contact_container">
    <div className="containerForm">
    <div className="contactForm">
       
      <form >
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    
    </div>
    </div>
    </div>
    </>

  )
}

export default Contact