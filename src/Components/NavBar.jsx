import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineAlignCenter } from 'react-icons/ai';
import Logo from './images/Logo2.png';
import GitHub from './images/github.png';
import LinkedIn from './images/linkedin.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    // setNav((prevNav) => !prevNav);
    // setNav(!nav);
    setNav((prevNav) => !prevNav);
  };

  const handleClickOutside = (e) => {
    if (e.target.closest('.mobileNav')) return;
    setNav(false);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: 'smooth' });
  };

  return (
    <div>
      <nav className="flex justify-between md:px-16 px-10 fixed left-0 right-0 bg-white shadow-[0 0 10px rgba(0,0,0,.09)] z-[999]">
        <img src={Logo} alt="Logo" className="object-contain cursor-pointer" onClick={pageUp} />

        <ul className="navBarList pt-9 gap-16 text-font-color hidden md:flex">
          <li>
            <a
              href="#home"
              className="no-underline text-font-color font-semibold text-lg hover:text-pink hover:font-bold hover:-translate-y-6">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="no-underline text-font-color font-semibold text-lg hover:text-pink hover:font-bold">
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="no-underline text-font-color font-semibold text-lg hover:text-pink hover:font-bold">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="no-underline text-font-color font-semibold text-lg hover:text-pink hover:font-bold">
              Contact
            </a>
          </li>
        </ul>

        <div className="mobileNav">
          <div onClick={handleNav} className="hamburger-icon block md:hidden">
            {nav ? (
              <AiOutlineClose size={36} className="mt-4 cursor-pointer" />
            ) : (
              <AiOutlineAlignCenter size={36} className="mt-4 cursor-pointer" />
            )}
          </div>
        </div>

        {/* mobile menu */}
        {nav && (
          <div
            className="fixed left-0 top-0 w-[100%] h-full text-center ease-in-out duration-500 bg-pink"
            onClick={handleClickOutside}>
            <AiOutlineClose size={36} className="mt-4 cursor-pointer" />
            <ul className="text-font-color pt-36">
              <li className="p-4">
                <a
                  href="#home"
                  className="no-underline text-font-color font-semibold text-md hover:text-white hover:font-bold hover:-translate-y-6 hover:text-font-color">
                  Home
                </a>
              </li>
              <li className="p-4">
                <a
                  href="#about"
                  className="no-underline text-font-color font-semibold text-md hover:font-bold hover:text-font-color">
                  About
                </a>
              </li>
              <li className="p-4">
                <a
                  href="#projects"
                  className="no-underline text-font-color font-semibold text-md hover:text-font-color hover:font-bold">
                  Projects
                </a>
              </li>
              <li className="p-4">
                <a
                  href="#contact"
                  className="no-underline text-font-color font-semibold text-md hover:text-font-color hover:font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="pt-9 gap-10 hidden md:flex">
          <a href="https://github.com/lebrin-Ay" target="_blank" rel="noreferrer">
            <img src={GitHub} alt="GitHub" className="w-[25px] socialIcon" />
          </a>
          <a href="https://linkedin.com/in/eboweme-ayo" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="LinkedIn" className="w-[25px] socialIcon" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
