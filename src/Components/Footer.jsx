import React from 'react';
import GitHub from './images/github.png';
import LinkedIn from './images/linkedin.png';

const Footer = () => {
  return (
    <section className="bg-[#2d2e32] p-[45px] xl:m-auto">
      <div className="flex justify-between">
        <div>
          <h3 className="text-white text-xl xl:ml-[10.5rem]">
            Copyright © 2023. All rights are reserved
          </h3>
        </div>
        <div>
          <div className="md:invisible flex">
            <a
              href="https://linkedin.com/in/eboweme-ayo"
              target="_blank"
              rel="noreferrer"
              className="text-white">
              <img
                src={GitHub}
                alt="GitHub"
                className="w-[25px] text-white socialIcon"
                style={{ filter: 'brightness(0) invert(1)' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter =
                    'invert(26%) sepia(70%) saturate(2147%) hue-rotate(304deg) brightness(96%) contrast(93%)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'brightness(0) invert(1)';
                }}
              />
            </a>

            <a href="https://github.com/lebrin-Ay" target="_blank" rel="noreferrer">
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="w-[25px] socialIcon"
                style={{ filter: 'brightness(0) invert(1)', transition: 'filter 0.3s' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter =
                    'invert(26%) sepia(70%) saturate(2147%) hue-rotate(304deg) brightness(96%) contrast(93%)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'brightness(0) invert(1)';
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
