import React from "react";
import Image from 'next/image'
import Bg from "../assets/gradbg.png";
import Speaker from "../assets/speaker.jpg";
import Grad from '../assets/DevConvo'


const Speakers = () => {
  return (
    <div className="mt-16">
      <h1 className="lg:text-7xl text-5xl font-bold text-blue-500 text-center pt-10 pb-4">SPEAKERS</h1>
      <div className="flex flex-col items-center lg:flex-row p-10 gap-6 lg:justify-center">

        <div className="p-1 border   border-gradient   w-fit lg:w-1/4">
          <div className="relative w-fit ">
            <Image src={Bg} alt="" />
            <Image src={Speaker} alt="" className="absolute top-0 w-full -z-20 h-full rounded" />
          </div>
          <div className="p-2">
            <div className="font-semibold text-lg">Lorem Ipsum</div>
            <div className="text-sm">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
        <div className="p-1 border   border-gradient  w-fit lg:w-1/4">
          <div className="relative w-fit ">
            <Image src={Bg} alt="" />
            <Image src={Speaker} alt="" className="absolute top-0 w-full -z-20 h-full rounded" />
          </div>
          <div className="p-2">
            <div className="font-semibold text-lg">Lorem Ipsum</div>
            <div className="text-sm">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
        <div className="p-1 border   border-gradient  w-fit lg:w-1/4">
          <div className="relative w-fit ">
            <Image src={Bg} alt="" />
            <Image src={Speaker} alt="" className="absolute top-0 w-full -z-20 h-full rounded" />
          </div>
          <div className="p-2">
            <div className="font-semibold text-lg">Lorem Ipsum</div>
            <div className="text-sm">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>

        <div className=" w-fit md:w-1/5">
            <Grad />
            {/* <div>
                <div className="text-customBlue">SPEAKERS</div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, sequi!</p>
            </div> */}
        </div>

      </div>
    </div>
  );
};

export default Speakers;
