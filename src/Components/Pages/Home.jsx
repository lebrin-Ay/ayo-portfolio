import React from 'react';
import HeroImg from '..//images/hero-img.png';
import WomanCoding from '..//images/woman-coding.png';
import HtmlIcon from '..//images/html5.svg';
import CssIcon from '..//images/css.svg';
import JsIcon from '..//images/javascript.svg';
import ReactIcon from '..//images/reactjs.svg';
import BootstrapIcon from '..//images/bootstrap.svg';
import TailwindIcon from '..//images/tailwind.svg';

const Home = () => {
  return (
    <main
      id="home"
      className="pt-[8rem] xl:pt-[12rem] pl-2 xl:px-[14rem] bg-[#F9F9F9] outline-1 h-[140vh] xl:h-[100vh]">
      <section className="flex flex-col-reverse xl:flex-row xl:gap-[12rem]">
        <div>
          <h1
            className="text-5xl font-bold text-font-color text-center mt-[2.5rem] xl:text-6xl
            xl:mt-0 xl:text-left xl:w-[300px]"
            id="name">
            {' '}
            Front-End Developer{' '}
            <img
              src={WomanCoding}
              alt="Woman Coding"
              className="w-[60px] m-auto md:flex md:justify-center md:items-center"
            />{' '}
            {/* lg:absolute lg:left-[33rem] lg:top-[15rem]" */}
          </h1>
          <p
            className="text-xl text-harsh font-medium text-center mt-[2.5rem] xl:text-center xl:w-[390px]"
            id="name">
            Hi, I&apos;m Eboweme Ayo. A passionate Front-end Developer based in Lagos, Nigeria
          </p>
          <a
            href="Ayo Eboweme -New.pdf"
            download="Ayo Eboweme Resume"
            className="flex justify-center no-underline mt-[2.5rem] xl:justify-start">
            <button className="w-[200px] h-[45px] rounded-full text-pink font-semibold hover:bg-font-color mb-9">
              Download Resume
            </button>
          </a>
        </div>
        <div className="hero__img-container w-[280px] md:w-[350px]">
          <div className="hero__img">
            <img
              src={HeroImg}
              alt="Ayo's image"
              className="m-auto w-[280px] md:w-[350px] md:max-w-none"
              id="imageDesign"
            />
          </div>
          {/* relative z-10 transition-[.3s] border-none */}
        </div>
      </section>
      {/* md:border-b-solid md:border-b-2 md:border-b-font-color */}

      <div className="xl:mt-6">
        <p
          className="text-xl text-font-color m-auto font-semibold w-[100px] mb-4 xl:absolute xl:bottom-[1rem]"
          id="techStack">
          Tech Stack
        </p>
        <div>
          <ul className="flex xl:mt-0 xl:ml-32 flex-wrap gap-8 justify-center">
            <li className="cursor-pointer rounded-[50%] shadow-[0 0 10px rgba(0,0,0,.09)] bg-white w-[60px] flex justify-center h-[60px]">
              <img src={HtmlIcon} title="HTML5" alt="Skills" className="w-[35px]" />
            </li>
            <li className="cursor-pointer rounded-[50%] shadow-[0 0 10px rgba(0,0,0,.09)] bg-white w-[60px] flex justify-center h-[60px]">
              <img src={CssIcon} title="CSS" alt="Skills" className="w-[35px]" />
            </li>
            <li className="cursor-pointer rounded-[50%] shadow-[0 0 10px rgba(0,0,0,.09)] bg-white w-[60px] flex justify-center h-[60px]">
              <img src={JsIcon} title="JavaScript" alt="Skills" className="w-[35px] mt-[.8rem]" />
            </li>
            <li className="cursor-pointer rounded-[50%] shadow-[0 0 10px rgba(0,0,0,.09)] bg-white w-[60px] flex justify-center h-[60px]">
              <img src={BootstrapIcon} title="Bootstrap" alt="Skills" className="w-[35px]" />
            </li>
            <li className="cursor-pointer rounded-[50%] shadow-[0 0 10px rgba(0,0,0,.09)] bg-white w-[60px] flex justify-center h-[60px]">
              <img src={TailwindIcon} title="Tailwind CSS" alt="Skills" className="w-[35px]" />
            </li>
            <li className="cursor-pointer rounded-[50%] shadow-[0 0 10px rgba(0,0,0,.09)] bg-white w-[60px] flex justify-center h-[60px]">
              <img src={ReactIcon} title="React" alt="Skills" className="w-[35px] mt-[.8rem]" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
