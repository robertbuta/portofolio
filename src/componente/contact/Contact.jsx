import React from 'react'
import './contact.css'
import {HiMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form=useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6g6bzs', 'template_asf1mr5', form.current, 'GBATKV5MCHPHLPxEk')
  e.target.reset();
};
  return (
   <section id="contact">
   <h2>Contact me!</h2>
   <h5>Don't be shy ! :)</h5>

    <div id="space"></div>
   <div className="container contact_container">
    <div className="contact_options">
    <article className="contact_option">
    <HiMail size={25}/>
    <h4>Email</h4>
    <h5>roby_buta@yahoo.com</h5>
    <a href="mailto:roby_buta@yahoo.com">Send mail</a>
    </article>

    <article className="contact_option">
    <BsMessenger size={25} />
    <h4>Messenger</h4>
    <h5>RobertButa1406</h5>
    <a href="https://m.me/RobertButa1406" target='blank'>Send  a message</a>
    </article>
    
    <article className="contact_option">
    <IoLogoWhatsapp size={25} />
    <h4>WhatsApp</h4>
    <h5>+40744897979</h5>
    <a href="https://wa.me/+40744897979"  target='blank'>Send a message</a>

    </article>
    </div>
  

    <form  ref={form} onSubmit={sendEmail}>

    <input type="text" name='name' placeholder='Your full name ' required />
    <input type="email" name='email' placeholder='Your email' required />
    <textarea name="message"  rows="7" placeholder='Your message to me' required></textarea>
    <button type='submit' className='btn btn-primary'>Send!</button>
    
    </form>

   
   </div>
   </section>
  )
}


export default Contact