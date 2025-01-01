// import { Link } from "@nextui-org/link";
// import { Snippet } from "@nextui-org/snippet";
// import { Code } from "@nextui-org/code";
// import { button as buttonStyles } from "@nextui-org/theme";
"use client";
import { useEffect } from "react";
import {AzureMap, AzureMapsProvider, IAzureMapOptions} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'
import 'azure-maps-control/dist/atlas.min.css'
// import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";



export default function Home() {
  
useEffect(()=>{
  navigator.geolocation.getCurrentPosition(async (pos)=>{
    console.log(pos.coords)
     fetch(`https://atlas.microsoft.com/map/tile?subscription-key=6GbGZztVA65ZlJgedTMvAMRvq9EnyKsIoz8UXU3cIWj4anaKdFJ9JQQJ99AKACYeBjFMIJGqAAAgAZMP4Ilx&api-version=2024-04-01&tilesetId=microsoft.base.road&zoom=15&x=5236&y=12665&tileSize=256`,
       { method: "GET",
      
}).then((e)=>console.log(e)).catch((e)=>console.log(e))
  })
},[])

  return (
   
<>
  <h1>hello</h1>

</>  );
}
