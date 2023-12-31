import React from 'react'

export default function Contactme() {
  return (
    <section className="contact-me" id="contact">
      <h1> Contact </h1>

    <div className="contact-wrapper">
        <div class="form-container">
          <h2>Send me an email!</h2>

          <div className="contact-info">
            <h2> Let's get in touch</h2>
            <h2>Email: Harunsaini99@gmail.com <br></br></h2>
          </div>

          <div class="login-details-container">
          <b>Email:</b>
          <input type="text" placeholder="Enter Email" name="mail" id="email"/>

          <b>Name:</b>
          <input type="text" placeholder="Enter your name" name="name" id="name"/>
          
          <b>Message:</b>
          <textarea type="password" placeholder="Enter your message" name="message" id="message"/>
      
          <span id ='send-error' class="error"></span>
          <button className='submit-button' type ="submit" id="sendbtn">Send</button>
          </div>
        </div>
      </div>

</section>
  )
}

