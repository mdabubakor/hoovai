"use client";
import React, { useState } from "react";
import Container from "./Container";
import { Navbar } from "../../data";
import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Flamenco } from "next/font/google";
import { usePathname } from "next/navigation";

const Header = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname()
  return (
    <div className="  ">
      <Container className=" ">
        <div className="navbar bg-base-100 flex items-center justify-between h-20">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost"></button>
          </div>
          <div className="sm:ms-5 flex-1  ">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className=" sm:hidden md:hidden  lg:flex lg:gap-20 lg:text-3xl lg:font-serif ">
            {
              Navbar.map((item)=>(
                <ul key={item?.id_}>
                  <Link href={item?.href} >
                  <li className={` bg-yellow-400  shadow-2xl shadow-slate-800 rounded-lg px-3 ${item?.href === pathname && "shadow-inner shadow-yellow-200 text-white "}`}>
                    {item?.title}
                  </li>
                  </Link>
                </ul>
              ))
            }
          </div>
          <div className=" lg:hidden flex  sm:me-5">
            {
              show ? <div className="  mt-40 text-2xl   ">
                {Navbar.map((item)=>(
                  <ul key={item?.id_} className="bg-yellow-200 shadow-2xl shadow-slate-600  rounded-lg  ">
                    <Link href={item?.href} className="">
                      <li className={`mt-5 ps-3 ${item?.href === pathname && " shadow-inner bg-white shadow-yellow-400 rounded-xl  font-serif px-5 " }`}>
                        {item?.title}
                      </li>
                    </Link>
                  </ul> 
                ))} 
              </div>: null
            }
          <button onClick={()=>setShow(!show)} className=" text-3xl ">
              {
                show? <IoMdClose/> : <IoReorderThree/>
              }
            </button>
            
          </div>
       
        </div>
      </Container>
    </div>
  );
};

export default Header;
