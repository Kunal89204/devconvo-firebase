import React from "react";
import Image from "next/image";
import Bsp from "../assets/bsp.png";
import Bsp2 from "../assets/bsp2.jpg";

const Partners = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-700 to-green-400 py-5 mt-20">
        <div className="text-center text-4xl  lg:text-5xl text-white font-bold">
          PARTNERS
        </div>
        <p className="text-center text-white lg:w-2/3 m-auto p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="lg:pb-20 pb-10 pt-6">
        <h1 className="text-center py-2 mb-4 text-2xl  font-semibold text-black">
          Educational Partners
        </h1>
        <div className="flex justify-center gap-10 lg:w-1/4 lg:m-auto">
          <Image src={Bsp} alt="" className="w-1/4 " />
          <Image src={Bsp2} alt="" className="w-1/4 " />
        </div>
      </div>
    </>
  );
};

export default Partners;
