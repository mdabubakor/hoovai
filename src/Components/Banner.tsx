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
      <div className="grid  md:grid-cols-1 lg:grid-cols-2">
      <div className=" ">
         <Image src={AB} alt="banner" className="relative "  />
         {/* <div className=" bg-yellow-200 h-40 w-2 ms-40 absolute bottom-[319px] left-24  shadow-inner backdrop-blur-sm   shadow-yellow-700"/> */}
         <div className=" bg-yellow-300 h-5 sm:w-[75px] sm:top-[580px]   lg:w-[130px]  absolute   shadow-inner rounded-md  shadow-yellow-700"/>
         <div className=" bg-yellow-300 h-4 w-[275px] ms-40 shadow-inner shadow-yellow-700 rounded-md "/>
        </div>
        <div>
          <h1 className="roboto">ABU-BAKAR</h1>
              <Typewriter
              options={{
                strings: ["ami tomake valobasi"],
                autoStart: true,
                loop: true,
              }}
            />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Banner;
