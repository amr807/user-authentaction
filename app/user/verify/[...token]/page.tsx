"use client";
import React, { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { permanentRedirect, redirect } from 'next/navigation';
import Link from 'next/link';
import qs from "qs";
import { revalidatePath } from 'next/cache';
interface Params {
    params: Promise<{ token: string}>;
  }

const VerifyTokenPage: React.FC<Params> = ({ params }) => {
  const now = Date.now();
  const [loading, setLoading] = useState(false);

      params.then(async ({token})=>{
        const tokn = jwtDecode(qs.stringify(token));
        const dateToken = tokn.exp! * 1000;

console.log(  Object(tokn).email)
        if(now>dateToken){
          await fetch(`http://localhost:4000/verifed`,{method:"POST",body:JSON.stringify({email: Object(tokn).email})}).then((e)=>{console.log(e.ok)}).catch((e)=>console.log(e))

          permanentRedirect("/error")}
else{console.log(tokn)

   await fetch(`http://localhost:4000/verifed`,{method:"POST",body:JSON.stringify({email:tokn})}).then((e)=>{console.log(e)}).catch((e)=>console.log(e))
  setLoading(true)  
  }
    })

    return loading && (<>
      <button className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="successModal" type="button">
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"  /></svg>
  </button>
  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
      <svg aria-hidden="true" className="w-12 left-6 h-11 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"  /></svg>
      <span className="sr-only -ml-9sss6 ">Sucess
      </span>
  </div>
  <p className="mb-4 ml-80 text-2xl fixed left-9 font-semibold text-gray-900 dark:text-white">Congratulations! your email has been verified</p>
  <button className="py-2 mt-14  ml-80 px-3 left-56 fixed text-lg font-semibold text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900" data-modal-toggle="successModal" type="button">
   <Link  href="/login">Continue</Link>    
  </button>
  </>

)};

export default VerifyTokenPage;
