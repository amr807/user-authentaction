/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import {  Suspense, useState } from "react";
import { useMemo } from "react";
import axios from "axios";
import qs from "qs";
import toast from "react-hot-toast"

import "../../css/style.css";
import { Label } from "flowbite-react";
import dynamic from "next/dynamic";

const EyeFilledIcon=dynamic(()=>import("../EyeFilledIcon").then((mod)=>mod.EyeFilledIcon),{ssr:false})
const EyeSlashFilledIcon=dynamic(()=>import('../EyeSlashFilledIcon').then((mod)=>mod.EyeSlashFilledIcon),{ssr:false});
const Button=dynamic(()=>import("flowbite-react").then((mod)=>mod.Button),{ssr:false},);
const Input=dynamic(()=>import("@nextui-org/input").then((mod)=>mod.Input),{ssr:false},);
const Toaster=dynamic(()=>import("react-hot-toast").then((mod)=>mod.Toaster),{ssr:false},);
const Link=dynamic(()=>import("next/link"));

export default function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const load = () => toast.loading("loading...", { duration: 500 });

  const toggleVisibility = () => setIsVisible(!isVisible);
  const data = new Date();
  const [forms, setForms] = useState({
    username: "",
    email: "",
    password: "",
  });

  const er = "user or email is used";
  const [error, setError] = useState("");
  const [errort, setErrort] = useState(true);

  async function sumbit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    toast.remove();
    if( validateEmail(value)!==false){
    
    await load();

    await axios({
      method: "post",
      url: "http://localhost:4000/signup",
      data: qs.stringify(forms),
    })
      .then((res) => {
        console.log(res);
        setErrort(true);
        toast.success(
          "You have been signup successfully please check your inbox mail to verify your account ",
        ); // window.location.href = `${res.data}`;
        e.preventDefault();
      })
      .catch((e) => {
        console.log(e);
        setErrort(false);
        setError(er);
      });}
      else{
        setErrort(false)
        setError("enter a vaild email")
      }
  }

  const [value, setValue] = useState(forms.email);

  const validateEmail = (value: string) =>
    
    (/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(value));

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ;
  }, [value]);

  return (
    <> 
    <Suspense>
     
      {" "}
      <>
        <h1 className=" font-bold mb-10 pl-2 text-4xl">Sign up </h1>
      </> 
     
      <>  
    

        <form
          action="http://localhost:4000/signup"
          className="   w-[30rem]  shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={sumbit}
        >        

          <div className="text-black">
            <Toaster />

            <Label className="block  text-black  text-xl font-bold mb-4">
              Email
            <Input
              required
              classNames={{
                input: ["w-70 text-gray-700 text-lg font-bold mb-2"],
              }}
                            color={isInvalid ?  "success": "danger"}
              errorMessage="Please enter a valid email"
              isRequired={isInvalid}
              placeholder=" Enter your email"
              type="email"
              value={value}
              variant="bordered"
              onChange={(e) => {
                setErrort(true);

                setForms({ ...forms, email: e.target.value });
              }}
              onValueChange={setValue}
            />            </Label>


            <Label
              className="block text-black  text-xl font-bold mb-4"
              htmlFor="username"
            >
              Username
            <Input
              isRequired
              required
              classNames={{
                input: ["w-80	 block text-gray-700 text-lg font-bold mb-2"],
              }}
            
              placeholder="Enter your username"
              type="text"
              value={forms.username}
              onChange={(e) => {
                setForms({ ...forms, username: e.target.value });
              }}
            />            </Label>


            <Label
              className="block   text-black text-xl font-bold mb-4"
              htmlFor="username"
            >
              Password
            <Input
              isRequired
              required
              classNames={{
                input: [
                  "w-60	 block text-gray-700 text-lg font-bold mb-2 sticky",
                ],
              }}
              endContent={
                <Button 
                className="bg-transparent pl-9 relative left-20 focus:ring-0"
                role="button"                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className=" text-lg  top-1.4 text-default-400 " />
                ) : (
                  <EyeFilledIcon className="text-lg top-1.4    text-default-400 "/>
                )}
                </Button>
              }
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              value={forms.password}
              variant="bordered"
              onChange={(e) => {
                setErrort(true);

                setForms({ ...forms, password: e.target.value });
              }}
            />            </Label>

            {errort == false ? (
              <>
                <p className="text-red-500  text-s italic">{error}</p> <br />{" "}
              </>
            ) : (
              false
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Sign Up
            </button>{" "}
            <div className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              <Link className="text-lg" href="/login">Already have account ? </Link>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;{data.getFullYear()}. All rights reserved.
        </p>
      </></Suspense>
    </>
  );
}
