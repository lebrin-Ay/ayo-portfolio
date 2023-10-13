import React from 'react';
import { useState } from 'react';
import SushiImg from '..//images/Screenshot  Sushiman.png';
import SushiHover from '..//images/sushi hover.png';
import Calculator from '..//images/calculator.png';
import Dashboard from '..//images//dashboard.png';
import DashboardHover from '..//images//dashboardHover.png';
import Liquidmoni from '..//images/liquidmonni-website.png';
import LiquidmoniHover from '..//images/liquidmoni-website-hover.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  // const [scroll, setScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="p-4 mt-[4rem] bg-[#F9F9F9]">
      <div id="projects">
        <h3 className="uppercase text-pink font-extrabold text-center">Portfolio</h3>
        <p className="text-center font-bold text-font-color text-2xl mb-8">
          Every project presents a distinctive development challenge.
        </p>

        <div className="grid gap-20 grid-rows-[auto auto] grid-cols-[1fr] h-auto xl:ml-[13rem]">
          <div
            className="flex flex-col gap-3 w-full m-[0 auto] p-8 bg-white rounded-[1.7rem] xl:flex-row md:gap-32 shadow-3xl xl:w-[58.5rem] xl:h-[24rem]"
            id="p-container">
            <div
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              className="overflow-y-scroll no-scrollbar">
              <img
                src={isHovered ? LiquidmoniHover : Liquidmoni}
                alt="Liquidmoni Website"
                className="h-auto hover:cursor-pointer rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center text-center h-auto">
              <h4 className="uppercase mb-8 text-font-color text-base font-extrabold xl:mb-0">
                liquidmoni
              </h4>
              <p className="text-harsh text-center font-medium text-xl xl:mt-4 xl:w-[300px]">
                A financial platform that offers users the ultimate combination of convenience and
                security
              </p>
              <div className="flex gap-4 justify-center mt-8 mb-8 xl:mt-0 xl:mb-0">
                <p className="text-black font-bold shadow-3xl bg-white px-[1.3rem] py-[1rem]">
                  REACT JS
                </p>
              </div>
              <div className="xl:ml-8">
                {/* <a
                  target="_blank"
                  href="https://github.com/johnfeyisayo/Citrone-Redesign/tree/ayo_dashboard"
                  rel="noreferrer"
                  className="text-font-color text-xl font-medium mr-6 hover:text-pink no-underline">
                  Code
                  <FontAwesomeIcon icon={faGithub} className="ml-2 text-2xl" />
                </a> */}
                <a
                  target="_blank"
                  href="https://liquidmoni.com/"
                  rel="noreferrer"
                  className="text-font-color text-xl font-medium mr-6 hover:text-pink no-underline">
                  <span>Live Demo</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-3 w-full m-[0 auto] p-8 bg-white rounded-[1.7rem] xl:flex-row md:gap-32 shadow-3xl xl:w-[58.5rem] xl:h-[24rem]"
            id="p-container">
            <div
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              className="overflow-y-scroll no-scrollbar">
              <img
                src={isHovered ? DashboardHover : Dashboard}
                alt="Citrone Dashboard"
                className="h-auto hover:cursor-pointer rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center text-center h-auto">
              <h4 className="uppercase mb-8 text-font-color text-base mt-8 font-extrabold xl:mb-0">
                citrone dashboard
              </h4>
              <p className="text-harsh text-center font-medium text-xl xl:mt-4 xl:w-[300px]">
                A learning experience platform for seamlessly accessing learning materials. The
                website makes it easy for educators to create learning experiences that positively
                engage students.
              </p>
              <div className="flex gap-4 justify-center mt-8 mb-8 xl:mt-0 xl:mb-0">
                <p className="text-black font-bold shadow-3xl bg-white px-[1.3rem] py-[1rem]">
                  REACT JS
                </p>
              </div>
              <div className="xl:ml-8">
                <a
                  target="_blank"
                  href="https://github.com/johnfeyisayo/Citrone-Redesign/tree/ayo_dashboard"
                  rel="noreferrer"
                  className="text-font-color text-xl font-medium mr-6 hover:text-pink no-underline">
                  Code
                  <FontAwesomeIcon icon={faGithub} className="ml-2 text-2xl" />
                </a>
                <a
                  target="_blank"
                  href="https://citrone-redesign-git-ayodashboard-johnfeyisayo.vercel.app/dashboard"
                  rel="noreferrer"
                  className="text-font-color text-xl font-medium mr-6 hover:text-pink no-underline">
                  <span>Live Demo</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-3 w-[fit-content] m-[0 auto] p-8 bg-white rounded-[1.7rem] xl:flex-row md:gap-32 shadow-3xl xl:w-[58.5rem] xl:h-[24rem]"
            id="p-container">
            <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
              <img
                src={isHovered ? SushiHover : SushiImg}
                alt="Sushiman website"
                className="h-auto hover:cursor-pointer rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center text-center h-auto">
              <h4 className="uppercase mb-8 text-font-color text-base mt-8 font-extrabold xl:mb-0">
                sushiman 🍣
              </h4>
              <p className="text-harsh text-center font-medium text-xl xl:mt-4 xl:w-[300px]">
                The website provides a user-friendly interface and a variety of features to showcase
                products, services, and information about the business.
              </p>
              <div className="flex gap-4 justify-center mt-8 mb-8 xl:mt-0 xl:mb-0">
                <p className="text-black font-bold shadow-3xl bg-white px-[1.3rem] py-[1rem]">
                  HTML
                </p>
                <p className="text-black font-bold shadow-3xl bg-white px-[1.3rem] py-[1rem]">
                  CSS
                </p>
                <p className="text-black font-bold shadow-3xl bg-white px-[1.3rem] py-[1rem]">JS</p>
              </div>
              <div className="xl:ml-8">
                <a
                  target="_blank"
                  href="https://github.com/lebrin-Ay/sushiman-website"
                  rel="noreferrer"
                  className="text-font-color text-xl font-medium mr-6 hover:text-pink no-underline">
                  Code
                  <FontAwesomeIcon icon={faGithub} className="ml-2 text-2xl" />
                </a>
                <a
                  target="_blank"
                  href="https://sushiman-90.netlify.app/"
                  rel="noreferrer"
                  className="text-font-color text-xl font-medium mr-6 hover:text-pink no-underline">
                  Live Demo
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-3 w-full m-[0 auto] p-8 bg-white rounded-[1.7rem] xl:flex-row md:gap-32 shadow-3xl xl:w-[58.5rem] xl:h-[24rem]"
            id="p-container">
            <div>
              <img
                src={Calculator}
                alt="website"
                className="h-auto hover:cursor-pointer rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center text-center h-auto">
              <h4 className="uppercase mb-8 text-font-color text-base mt-8 font-extrabold xl:mb-0">
                calculator 🖩
              </h4>
              <p className="text-harsh text-center font-medium text-xl xl:mt-4 xl:w-[300px]">
                A simple calculator that performs mathematical operations such as addition,
                subtraction, multiplication, and division.
              </p>
              <div className="flex gap-4 justify-center mt-8 mb-8 xl:mt-0 xl:mb-0">
                <p className="text-black font-bold shadow-3xl bg-white px-[1.3rem] py-[1rem]">
                  HTML
                </p>
                <p className="text-black font-bold shadow-3xl bg-white px-[1.3rem] py-[1rem]">
                  CSS
                </p>
                <p className="text-black font-bold shadow-3xl bg-white px-[1.3rem] py-[1rem]">JS</p>
              </div>
              <div className="xl:ml-8">
                <a
                  target="_blank"
                  href="https://github.com/lebrin-Ay/Simple-Calculator"
                  rel="noreferrer"
                  className="text-font-color text-xl font-medium mr-6 hover:text-pink no-underline">
                  Code
                  <FontAwesomeIcon icon={faGithub} className="ml-2 text-2xl" />
                </a>
                <a
                  target="_blank"
                  href="https://lebrin-227549.netlify.app/"
                  rel="noreferrer"
                  className="text-font-color text-xl font-medium mr-6 hover:text-pink no-underline">
                  Live Demo
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
