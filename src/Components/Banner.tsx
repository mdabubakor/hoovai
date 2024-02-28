"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Container from "./Container";
import Image from "next/image";
import AB from '../Assets/Aboubakor-removebg-preview.png'

const Banner = () => {
  return (
    <div>
         {/* <Typewriter
              options={{
                strings: ["ami tomake valobasi"],
                autoStart: true,
                loop: true,
              }}
            /> */}
      <Container>
      <div className="grid  md:grid-cols-1 lg:grid-cols-2 mt-20 gap-10">
      <div className="grid items-center justify-center shadow-inner shadow-yellow-500 ">
         <Image src={AB} alt="banner" className="relative "  />
         {/* <div className=" bg-yellow-200 h-40 w-2 ms-40 absolute bottom-[319px] left-24  shadow-inner backdrop-blur-sm   shadow-yellow-700"/> */}
         <div className=" bg-yellow-300 h-5 sm:w-[75px] sm:top-[580px] sm:left-40 lg:top-[650px] lg:left-[250px]   lg:w-[130px]   absolute   shadow-inner rounded-md  shadow-yellow-700"/>
         <div className=" bg-yellow-300 h-4 w-[275px] ms-40 shadow-inner shadow-yellow-700 rounded-md "/>
        </div>
        <div className="mt-44 ms-20">
         <h1 className="roboto text-7xl text-zinc-500">ABU-<span className="text-zinc-500">BAKAR</span></h1>
         <div className="text-3xl mt-10 font-semibold">
              <Typewriter 
              options={{
                strings: ["A Web Artist"],
                autoStart: true,
                loop: true,
              }}
            />
         </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Banner;
