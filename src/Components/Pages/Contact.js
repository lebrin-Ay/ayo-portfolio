import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section className="contactSection" id="contact">
      <h2 className="contactTitle">Contact</h2>
      <p className="contactSubTitle">Don&apos;t be shy! Hit me up! 👇</p>
      <div className="contactWrapper">
        <div className="contactDetails">
          <span className="iconWrapper">
            <FontAwesomeIcon icon={faMapLocationDot} className="contactIcon" />
          </span>
          <div className="contactLocation">
            <h4>Location</h4>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <div className="contactDetails">
          <span className="iconWrapper">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="contactIcon" />
          </span>
          <div className="contactLocation">
            <h4>Mail</h4>
            <a href="mailto:ayo.eboweme@gmail.com">ayo.eboweme@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
