import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <section className="footerSection">
      <div className="footerFlex">
        <div>
          <h3 className="footerText">Copyright © 2023. All rights are reserved</h3>
        </div>
        <div>
          <div className="footerIconWrapper">
            <a
              href="https://linkedin.com/in/eboweme-ayo"
              target="_blank"
              rel="noreferrer"
              className="social">
              <FontAwesomeIcon icon={faLinkedin} className="footerIcon" />
            </a>

            <a href="https://github.com/lebrin-Ay" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="footerIcon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
