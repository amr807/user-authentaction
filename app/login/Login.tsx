/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

"use client"; 
import { useState } from "react";
import Link from "next/link";
import { Label } from "flowbite-react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

const EyeFilledIcon = dynamic(() => import("../EyeFilledIcon").then((mod) => mod.EyeFilledIcon), { ssr: false });
const EyeSlashFilledIcon = dynamic(() => import('../EyeSlashFilledIcon').then((mod) => mod.EyeSlashFilledIcon), { ssr: false });
const Button = dynamic(() => import("flowbite-react").then((mod) => mod.Button), { ssr: false });
const Input = dynamic(() => import("@nextui-org/input").then((mod) => mod.Input), { ssr: false });

export default function LogIn() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data = new Date();
  
  // Form data and error states
  const [forms, setForms] = useState({
    username: "",
    password: "",
  });
  
  const [error, setError] = useState("");
  const [errort, setErrort] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  async function sumbit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setIsLoading(true);  

    if (forms.password !== "" && forms.username !== "") {
      let result = await signIn("credentials", {
        username: forms.username,
        password: forms.password,
        redirect: false,
        callbackUrl: "/login",
      });

           console.log(result?.status);

      // Handle response status
      if (result?.status === 401) {   

        setErrort(false);
        setError("Sorry, your username or password is incorrect. Or you may need to create an account.");
      }
      if (result?.status==200) {

        setErrort(true);
        redirect("/");
      }

      setIsLoading(false);  
    } else {
      console.log("Username or password is empty");
      setIsLoading(false);  
      redirect("/error");
    }
  }

  return (
    <>
      <h1 className="font-bold mb-10 pl-2 text-4xl">Sign in</h1>
      <form
        action=""
        className="w-[30rem] shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={sumbit}
      >
        <div className="text-black">
          <Label className="block font-bold text-xl mb-5" htmlFor="username">
            Username
            <Input
              isRequired
              required
              classNames={{
                input: ["w-60 h-40 block text-gray-700 text-xl font-bold mb-2"],
              }}
              placeholder="Enter your username"
              type="text"
              value={forms.username}
              onChange={(e: { target: { value: any; }; }) => {
                setErrort(true);
                setForms({ ...forms, username: e.target.value });
              }}
            />
          </Label>

          <Label className="block text-xl font-bold mb-2" htmlFor="password">
            Password
            <Input
              isRequired
              required
              classNames={{
                input: ["w-42 block text-xl font-bold mb-2"],
              }}
              endContent={
                <Button
                  className="relative left-20 focus:ring-0"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-lg top-1.4 text-default-500" />
                  ) : (
                    <EyeFilledIcon className="text-lg top-1.4 text-default-500" />
                  )}
                </Button>
              }
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              value={forms.password}
              variant="bordered"
              onChange={(e: { target: { value: any; }; }) => {
                setErrort(true);
                setForms({ ...forms, password: e.target.value });
              }}
            />
          </Label>

          {errort === false && (
            <p className="text-red-500 text-s italic">{error}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Button
  className="mt-3 size-13 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline relative"
  type="submit"
  disabled={isLoading} // Disable the button while loading
>
  {isLoading ? (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="animate-spin h-7 w-7 border-4 border-t-7 border-blue border-soild rounded-full" />
    </div>
  ) : (
    "Login"
  )}
</Button>


          <div className="inline-block text-2xl align-baseline mt-3 font-bold text-blue-500 hover:text-blue-800">
            <Link className="text-lg" href="/signup">Create Account?</Link>
          </div>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">&copy;{data.getFullYear()}. All rights reserved.</p>
    </>
  );
}