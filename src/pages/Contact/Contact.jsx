import React from 'react';
import './Contact.scss';
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import profile from '../../assets/profile.png'
import Info from '../../components/Info/Info';

function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__title">
        <h1>Kontakt</h1>
        
      </div>

      <div className="form__main">
        <Info />
        <div className="form__content">
          <div className="form__image">
            <img src={profile} alt="ai" />
          </div>
          <div className="form__title">
            <h3>Piotr Deręgowski</h3>
          </div>
          <div className="form__contact-data">
            <div className="form__contact-adress">
              <AiOutlineHome />
              <h5>Warszawa, ul. Zagłoby 23 m 45</h5>
            </div>
            <div className="form__contact-phone">
              <AiOutlinePhone />
              <h5>kom 667 982 767</h5>
            </div>
            <div className="form__contact-mail">
              <AiOutlineMail />
              <h5>piotr.deregowski7@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;