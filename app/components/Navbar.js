"use client"
import React from 'react'
import { useSession , signIn , signOut } from 'next-auth/react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center  px-4 h-14">
      <div className="font-bold text-lg flex justify-center items-center">
        <Image src="/tea.gif" width={44} height={44} alt="" />
        <span>Get me a Chai!</span>
      </div>
      <div className="flex  justify-center items-center">
        <Link href={"/login"}>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
