import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react' 
import emailjs from 'emailjs-com'

const Contact = () => { 
    const form =useRef();
    const sendEmail = (e) => {
      console.log('BDSLKDJF')
        e.preventDefault();
        // emailjs.sendForm('service_v9u43ar', 'template_700hi4o', form.current, '');
      e.target.reset();
    };

return (
  <section id='Contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
    <div className="contact_options">
      <article className="contact_option">
      <simulateCall className='contact_option-icon'/>
      <h4>contact_me  </h4>
      <h5>+919576683153</h5>
      <a href="call_on:+919576683153" target="_blank">Give a Missed Call</a>
      </article>
      <article className="contact_option">
      <MdOutlineEmail className='contact_option-icon'/>
      <h4>Email</h4>
      <h5>raviroushan1820@gmail.com</h5>
      <a href="mailTo:raviroushan1820@gmail.com" target="_blank">Send a massage</a>
      </article>
      <article className="contact_option">
      <BsMessenger className='contact_option-icon'/>
      <h4>Messenger</h4>
      <h5>raviroushan</h5>
      <a href="https://m.me/ravi.roushan.58533" target="_blank">Send a massage</a>
      </article>
      <article className="contact_option">
      <BsWhatsapp className='contact_option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+919576683153</h5>
      <a href="https://wa.me/919576683153" target="_Blank">send a message</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}
    <from ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required /> 
      <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
      <button type='submit' className = 'btn btn-primary'>Send Message</button>
    </from>
 </div>
</section>
  )
}

export default Contact