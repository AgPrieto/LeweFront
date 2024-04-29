// Contact.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./contact.module.css";
import leweIcon from "./lewe.png";
import { FaInstagram, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { contactMail } from "../../redux/actions/contactActions";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, []);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      const contactData = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };
      dispatch(contactMail(contactData));
        e.target.reset();
    };
    return (
      <div className={styles.contactContainer} style={window.innerWidth < 790 ? {overflowX:'hidden',overflowY:'hidden'}: null}>
        <div className={styles.contactHeader} data-aos="fade-down"
          data-aos-duration="1000">
            <img src={leweIcon} alt="Lewe Icon" />
            <h2>Lewe Sportlife ©</h2>
        </div>
        
        <div className={styles.containerInfoForm}>
        
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit} data-aos="fade-right"
          data-aos-duration="1000">
            <h3>Envianos un mensaje!</h3>
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Correo Electronico" required />
            <textarea name="message" placeholder="Mensaje.." required></textarea>
            <button type="submit">Enviar</button>
          </form>
          <div className={styles.contactInfo} data-aos="fade-right"
          data-aos-duration="1000">
          <p>
            <a href="mailto:facurimini@gmail.com">facurimini@gmail.com</a>
            <br />
            (012) 345 67 89
          </p>
          <FaLocationDot style={{color: "red"}}/>
          <p>
          Pje. Félix Olmedo 6664 B°,
            <br />
          X5009 Córdoba, Argentina
          </p>
          <ul className={styles.socialLinks}>
            <li>
            <Link to="https://wa.me/+5493517658536" target="_blank">
                <FaWhatsapp style={{ color: "white" }} size={30} />
            </Link>
            </li>
            <li>
            <Link to="https://www.instagram.com/leweargentina?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <FaInstagram style={{ color: "white" }} size={30} />
              </Link>
            </li>
          </ul>
        </div>
          </div>
          <div className={styles.frame}>
          <iframe className={styles.map}
          data-aos="fade-left"
          data-aos-duration="1000"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.489016850996!2d-64.24572122351857!3d-31.34548209282887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329f2118e2866b%3A0x79039e33a3a991d8!2sLewe%20Squash!5e0!3m2!1sen!2sar!4v1711387823296!5m2!1sen!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            
          ></iframe>
          </div>
        </div>

        
        
      </div>
    );
  };
  

export default Contact;
