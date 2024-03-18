import React from "react";
import Image from 'next/image'
import Img from "../assets/id8nxt.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/footerlogo"

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white lg:flex justify-between py-10">
      <div className="flex justify-around lg:px-10 ">
        <div className="text-3xl font-semibold pr-3 lg:pr-10 border-r scale-75 lg:scale-100   border-blue-900">
          <Logo />
        </div>
        <div className="lg:pl-10 pr-10 lg:pr-0 lg:pt-4">
          <p>Sponsored By</p>
          <Image src={Img} alt="" />
        </div>
      </div>

      <div className="px-10 lg:px-14 lg:py-0 pt-10 ">
        <div className="flex gap-6 py-2 pb-3  border-b border-b-blue-900">
          <a href=""><FaInstagram className="text-2xl" /></a>
          <a href=""><FaXTwitter className="text-2xl " /></a>
          <a href=""><FaFacebookF className="text-2xl text-white" /></a>
          <a href=""><FaLinkedinIn className="text-2xl text-white" /></a>
        </div>
        <div>
          <div className="font-semibold  text-lg pt-2">Get In Touch</div>
          <div className=" font-semibold underline">
            <a href="mailto:" >info@societyofexcellance.in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
