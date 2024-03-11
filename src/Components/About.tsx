import React from "react";
import Container from "./Container";
import AB from '../Assets/Aboubakor-removebg-preview.png'
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Container>
        <div>
          
          <div>
            {/* About me */}
            <h1 className="flex items-cenetr justify-center mt-20">
              <span className="text-5xl roboto font-semibold">
                ABOUT <div className="w-full h-[2px] bg-yellow-500" />
              </span>
              <span className="text-yellow-500 text-5xl roboto font-semibold "> ME</span>
            </h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center justify-center gap-20">
              <div>
              <div className="grid items-center justify-center   mt-20">
         <Image src={AB} alt="banner" className="relative "  />
         {/* <div className=" bg-yellow-200 h-40 w-2 ms-40 absolute bottom-[319px] left-24  shadow-inner backdrop-blur-sm   shadow-yellow-700"/> */}
         <div className=" bg-yellow-300 h-5 w-[100px]   top-[789px] left-[160px]      absolute  rounded-md  shadow-inner   shadow-yellow-700"/>
         <div className=" bg-yellow-300 h-4 w-[275px] ms-40 shadow-inner shadow-yellow-700 rounded-md "/>
        </div>
              </div>
              <div> 
                {/* discribtion */}
                <p>discribtion</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
