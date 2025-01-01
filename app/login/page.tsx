import { Metadata } from "next";
import dynamic from "next/dynamic";

import { siteConfig } from "@/config/site";
import { Suspense } from "react";
const LogIn=dynamic(()=>import("./Login"))

export const metadata: Metadata = {
    title: {
      default: "Login page",
      template:""
    },
    description: siteConfig.description,
    icons: {
      icon: "/favicon.ico",
    },
  };
  
export default function LogInRender() {

    return(
        <Suspense>
        <LogIn/></Suspense>
    )
}
