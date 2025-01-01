/* eslint-disable prettier/prettier */
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import "../css/style.css";
const SigninButton = () => {
  const { data: session } = useSession();


  if (session && session.user) {
    return (
      <div className="order-2 md:order-3">
        <div className="signoutbt">
          <div className=" flex gap-4 ml-auto ">
            <p className="text-sky-600">{session.user.name}</p>
            <button className="text-red-600" onClick={() => signOut()}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="order-2 md:order-3">
        <div className="signupbt">
          {" "}
          <button className="px-4 py-4 mt-3 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
          
            <Link href="/signup">Create account</Link>
          </button>
        </div>{" "}
      </div>{" "}
      <div className="order-2 md:order-3">
        <div className="signinbt">
          <button
            className="px-6 py-4  bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default SigninButton;
