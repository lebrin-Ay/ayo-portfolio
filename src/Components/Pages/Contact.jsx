import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="p-4 mt-[4rem] bg-white text-center xl:ml-[12rem]" id="name">
      <h2 className="uppercase text-pink font-extrabold text-lg">Contact</h2>
      <p className="font-bold text-font-color text-2xl mb-[5rem]">
        Don&apos;t be shy! Hit me up! 👇
      </p>
      <div className="xl:flex xl:gap-[5rem]">
        <div className="xl:flex xl:gap-4">
          <span className="bg-white rounded-[50%] shadow-3xl p-[1.3rem] xl:shadow-none xl:h-[77px] xl:w-[79px] xl:mt-[1rem]">
            <FontAwesomeIcon icon={faMapLocationDot} className="text-2xl text-pink xl:text-3xl" />
          </span>
          <div>
            <h4 className="text-font-color text-lg font-bold mt-4">Location</h4>
            <p className="text-harsh text-xl mb-12">Lagos, Nigeria</p>
          </div>
        </div>

        <div className="xl:flex xl:gap-4">
          <span className="bg-white rounded-[50%] shadow-3xl p-[1.3rem] xl:shadow-none xl:h-[77px] xl:w-[79px] xl:mt-[1rem]">
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="text-2xl text-pink xl:text-3xl" />
          </span>
          <div>
            <h4 className="text-font-color text-lg font-bold mt-4">Mail</h4>
            <a
              href="mailto:ayo.eboweme@gmail.com"
              className="text-harsh text-xl no-underline hover:text-pink">
              ayo.eboweme@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
