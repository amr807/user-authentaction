import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useSession } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import "../../css/style.css";

import { siteConfig } from "@/config/site";
const Signup=dynamic(()=>import("./Signup"))

export const metadata: Metadata = {
    title: {
      default: "Signup page",
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
        <Signup/>
        </Suspense>
        // </body>
    )
}
