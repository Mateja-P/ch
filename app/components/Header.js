"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import arrowDownImg from "../../public/Header/arrow-down.svg";
import dropDownGearImg from "../../public/Header/dropdowngear.png";
import dropDownRobotImg from "../../public/Header/dropdownrobot.png";
import userImg from "../../public/Header/user.png";
import { motion } from "framer-motion";
import Blur from "./Blur";
import Cookies from 'js-cookie'

const Header = ({ setModal }) => {
  const [activeProducts, setActiveProducts] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [chageHeader, setChangeHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setChangeHeader(true)
      } else {
        setChangeHeader(false)
      }
    })
  }, [])

  return (
    <div className="relative">
      <Blur style="bg-[#814CC6] blur-[150px] top-[-100px] right-[-50px]" />
      <div className={`${chageHeader ? 'bg-black-rgba' : 'bg-transparent'} py-5 z-[99] fixed w-full text-white top-0`}>
        <div className="w1 flex justify-between items-center">
          <div className="font-semibold text-[18px]">OliBot</div>
          <div className="flex gap-14 relative md:hidden">
            <Link className="font-regular text-[15px]" href="/">
              Home
            </Link>
            <div
              onClick={() => {
                setActiveProducts(!activeProducts);
              }}
              className="font-regular flex gap-2 relative cursor-pointer"
              href="/products">
              <div className="text-[15px]">Products</div>
              <img
                className={`${activeProducts && "rotate-180"} w-[12px]`}
                src={arrowDownImg.src}
              />
            </div>
            <motion.div
              className={`${activeProducts ? "scale-1" : "scale-0"
                } absolute top-[200%] w-full bg-white rounded-md overflow-hidden  transition-all duration-100 ease-in`}>
              <Link
                onClick={() => {
                  setActiveProducts(false)
                }}
                href="chatbot"
                className="hover:bg-[#f9f9f9] flex items-center gap-2 text-black py-5 border-b px-2">
                <img src={dropDownRobotImg.src} className="w-[40px]" />
                <div className="font-semibold">AI Chatbots</div>
              </Link>
              {/* <Link
                onClick={() => {
                  setActiveProducts(false)
                }}
                href="automatation"
                className="hover:bg-[#f9f9f9] text-black flex items-center gap-2 py-5 px-2">
                <img src={dropDownGearImg.src} className="w-[40px]" />
                <div className="font-semibold">AI Automatation</div>
              </Link> */}
            </motion.div>
            <Link className="font-regular text-[15px]" href="/articles">
              How we help you grow
            </Link>
          </div>
          {/* <div className="md:hidden">
            {Cookies.get('user') ? (
              <Link href='/platform'>
                <img className="w-[35px]" src={userImg.src} />
              </Link>
            ) : (
              <div className="flex gap-5 md:hidden">
                <div
                  onClick={() => {
                    setModal({
                      purpose: 'Log In',
                      open: true
                    })
                  }}
                  className="font-medium cursor-pointer py-2 px-5 border border-white">
                  Log In
                </div>
                <div
                  onClick={() => {
                    setModal({
                      purpose: 'Sign Up',
                      open: true
                    })
                  }}
                  className={`hover:bg-transparent font-medium cursor-pointer py-2 px-5 border border-prBlue  bg-prBlue`}>
                  Sign Up
                </div>
              </div>
            )}
          </div> */}

          {/* Mobile Menu */}
          <div
            className={`${openMenu ? "scale-1" : "scale-0"
              } z-[99] flex flex-col justify-center items-center py-5 transition-all duration-100 ease-in top-[120%] hidden md:flex flex-col gap-10 absolute left-0  bg-white w-full`}>
            <div className="flex flex-col gap-4 relative">
              <Link className="font-medium text-[17px] text-black" href="/">
                Home
              </Link>
              <div
                className="flex gap-2 relative cursor-pointer text-black font-medium"
                href="/products">
                <div className="text-[17px]">Products</div>
                <img
                  className={`${activeProducts && "rotate-180"} w-[12px]`}
                  src={arrowDownImg.src}
                />
              </div>
              <div>
                <Link
                  href="chatbot"
                  className="hover:bg-[#f9f9f9] flex items-center gap-2 py-5 px-2 pl-10 text-black">
                  <img src={dropDownRobotImg.src} className="w-[30px]" />
                  <div className="font-medium">AI Chatbot</div>
                </Link>
                {/* <Link
                  href="automatation"
                  className="hover:bg-[#f9f9f9] text-black flex items-center gap-2 py-5 pl-10 px-2">
                  <img src={dropDownGearImg.src} className="w-[30px]" />
                  <div className="font-medium">AI Automatation</div>
                </Link> */}
              </div>
              <Link
                className="font-medium text-[17px] text-black"
                href="/articles">
                How we help you grow
              </Link>
            </div>
            {/* <div className="flex gap-5">
              <div
                onClick={() => {
                  setModal({
                    purpose: 'Log In',
                    open: true
                  })
                }}
                className="font-medium cursor-pointer py-2 px-5 border border-black text-black">
                Log In
              </div>
              <div
                onClick={() => {
                  setModal({
                    purpose: 'Sign Up',
                    open: true
                  })
                }}
                className="font-medium cursor-pointer py-2 px-5 border border-prBlue bg-prBlue">
                Sign Up
              </div>
            </div> */}
          </div>
          <div
            className="hidden mr-5 md:flex md:flex-col md:justify-between md:w-5 md:h-5 z-[3]"
            onClick={() => setOpenMenu(!openMenu)}>
            <div
              className={`w-full h-0.5 transition-all bg-white duration-200 ease-in ${openMenu ? "rotate-[-45deg] translate-y-[9px]" : ""
                }`}></div>
            <div
              className={`w-full h-0.5 bg-white transition-all duration-200 ease-in ${openMenu ? "opacity-0" : ""
                }`}></div>
            <div
              className={`w-full h-0.5 bg-white transition-all duration-200 ease-in ${openMenu ? "rotate-45 translate-y-[-9px]" : ""
                }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
