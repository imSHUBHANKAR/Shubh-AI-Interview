"use client"
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function Header() {
  const path=usePathname();
  useEffect(()=>{
    console.log(path)
  },[])
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
      <ul className=" hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${
            path == "/dashboard" && "text-primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${
            path == "/dashboard/courses" && "text-primary font-bold"
          }`}
        >
          Courses
        </li>
        <li
          className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${
            path == "/dashboard/questions" && "text-primary font-bold"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${
            path == "/dashboard/how" && "text-primary font-bold"
          }`}
        >
          How it works?
        </li>
        <li
          className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${
            path == "/dashboard/aboutus" && "text-primary font-bold"
          }`}
        >
          About Us
        </li>
        <li
          className={`hover:text-primary hover:font-bold translate-all cursor-pointer ${
            path == "/dashboard/contactus" && "text-primary font-bold"
          }`}
        >
          Contact Us
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header
