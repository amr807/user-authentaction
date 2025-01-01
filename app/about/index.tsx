"use client"
import dynamic from 'next/dynamic';


const DynamicComponentWithNoSSR = dynamic(
  () => import('./Description'),
  { ssr: false}
)

  
export default function About(){
return(
  <>
  <DynamicComponentWithNoSSR/>
  </>
)
}