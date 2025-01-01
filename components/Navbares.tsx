/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbares = () => {
  const { data: session } = useSession();

  console.log(session?.user);
const [style,setStyle]=useState(false)

  if (session && session.user) {


    return (
      <>

     <li className="md:px-4 md:py-2 text-indigo-500">
          <Link href="/">Dashboard</Link>
        </li><li className="md:px-4 md:py-2 text-indigo-400">
            <Link href="/">Search</Link>
          </li>
     
      </>
    );
  }

  return (
    <>
      <li className="md:px-4 md:py-2 hover:text-indigo-400">
        <Link href="#">Explore</Link>
      </li>
      <li className="md:px-4 md:py-2 hover:text-indigo-400">
        <Link href="#">About</Link>
      </li>
      <li className="md:px-4 md:py-2 hover:text-indigo-400">
        <Link href="#">Contact</Link>
      </li>
    </>
  );
};

export default Navbares;
