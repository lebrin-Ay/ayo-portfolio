import React from 'react';
import AboutMe from '..//images/about-me-medium.png';

const About = () => {
  return (
    <section
      className="p-4 mt-[4rem] bg-white xl:flex xl:justify-center xl:gap-[4rem] xl:mt-[7rem]"
      id="about">
      <figure className="xl:ml-[2.6rem]">
        <img
          src={AboutMe}
          alt="Two black computer monitors on black table"
          className="rounded mb-7 md:m-auto md:w-[600px] xl:w-[480px]"
        />
      </figure>
      <article>
        <h1 className="text-center text-pink uppercase font-extrabold text-lg">about me</h1>
        <p
          className="text-harsh text-center font-medium text-lg md:w-[600px] md:m-auto xl:w-[390px]"
          id="name">
          As a Junior Front-End Developer, I am proficient in HTML, CSS, JavaScript, React, and
          Bootstrap. I am constantly improving my skills and learning new programming languages to
          enhance my abilities. I specialize in designing visually appealing interfaces that are
          built on clean and optimized code, ensuring seamless navigation for users. I also excel in
          collaborating with cross-functional teams to produce exceptional web applications.
        </p>
      </article>
    </section>
  );
};

export default About;
