import Link from "next/link";
import React from "react";
import Blur from "./Blur";

const Footer = ({setModal}) => {
  return (
    <div className="relative">
      <Blur style="bg-[#FFC0CB] blur-[150px] bottom-[-100px] left-[-50px]" />
      <div className="w1 flex justify-between md:flex-col md:gap-10">
        <div className="font-semibold text-[20px]">OLiBot</div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-[20px] mb-[30px]">Links</h2>
          <span className="mb-3">
            <Link className="text-[15px] font-light" href="/">
              Home
            </Link>
          </span>
          <span>
            <Link className="text-[15px] font-light" href="/">
              How we help you grow
            </Link>
          </span>
        </div>
        {/* <div className="flex flex-col">
          <h2 className="font-semibold text-[20px] mb-[30px]">Time to Grow?</h2>
          <span className="mb-3">
            <div
              onClick={() => {
                setModal({
                  purpose: 'Sign Up',
                  open: true
                })
              }}
              className="text-[15px] font-light cursor-pointer">Sign Up</div>
          </span>
          <div
            onClick={() => {
              setModal({
                purpose: 'Log In',
                open: true
              })
            }}
            className="text-[15px] font-light cursor-pointer">Log In</div>
        </div> */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-[20px] mb-[30px]">Products</h2>
          <span className="mb-3">
            <Link className="text-[15px] font-light" href="/chatbot">
              AI Chatbot
            </Link>
          </span>
          {/* <span>
            <Link className="text-[15px] font-light" href="/automatation">
              AI Automatation
            </Link>
          </span> */}
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-[20px] mb-[30px]">Location</h2>
          <div className="text-[15px] font-light">Germany, EU</div>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-[20px] mb-[30px]">Contact email</h2>
          <span>
            <Link target='_blank' className="text-[15px] font-light" href="https://mail.google.com/mail/u/3/?ogbl#inbox?compose=CllgCKHRLhtCZgKJFNRjcDdsLPNhFtkzWHbVJMLLHPQCbtZsvMGfHlhpZGXsmQJQTFSkQjrhwSV">
              olibot.co@gmail.com
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
