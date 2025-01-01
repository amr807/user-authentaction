
"use client"
import {
Navbar as NextUINavbar,
NavbarContent,
NavbarMenu,
NavbarBrand,
NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon, Logo } from "@/components/icons";
import { Suspense } from "react";
import Loading from "react-loading";
import { Toaster } from "react-hot-toast";


const SigninButton=dynamic(()=>import("./Signbutoon"))
const Navbares=dynamic(()=>import("./Navbares"))

const Input=dynamic(()=>import("@nextui-org/input").then((mod)=>mod.Input),{ssr:false},);



export default function Navbar()  {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
    
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  const { data: session, status } = useSession();

if(status=="loading"){
return(<Suspense></Suspense>)}

  return (
    <Suspense >
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
        <Navbares/>
      
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <SigninButton />

        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>
{/* show on side navbar */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <SigninButton />

        {/* <NavbarMenuToggle /> */}
      </NavbarContent>


      <NavbarMenu>
     
      </NavbarMenu>
    </NextUINavbar></Suspense>
  );
 };
