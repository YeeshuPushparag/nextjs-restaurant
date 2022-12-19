import React from 'react'

const ContactContainer = () => {
  return (
    <section id="contact">
        <h2>Contact Us</h2>
        <div className="form-container">
            <input type="text" placeholder='Write Your Full Name' />
            <input type="email" placeholder='Write Your Email Address' />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Write Your Message'/>
            <button type='submit' className='contact-button' id='contact-btn'>Send Message</button>
        </div>
    </section>
  )
}

export default ContactContainer