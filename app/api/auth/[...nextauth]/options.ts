/* eslint-disable prettier/prettier */
import  { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Fascinate } from "next/font/google";
export const handler: NextAuthOptions={
  pages: {
    signIn: "/login",
    signOut: "/signup",
  
  },secret:process.env.NEXTAUTH_SECRET
  ,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      }, 
      async authorize(credentials,_req) {
console.log(_req.method,"to api login")
  const res= await fetch(`${process.env.Base_URL}/userlogin`, {
          method: "POST",
          body: JSON.stringify({username:credentials?.username,password:credentials?.password}),
          headers: { "Content-Type": "application/json" },
         })
         const resp =  await res.json();
    
         if (resp?.status==202 ) {
         return res.ok ;
         }
         if (resp?.status==401 ) {
         return false ;
         }
else{
  return resp }
      },
    }
    ),
  ],
 
  callbacks: {

    async signIn(e) {
      const res=Object(e.user)

console.log(e.user)
      if ( res==true) {
      return true
    } 
    else {
      // Return false to display a default error message
      return false
      
    }
  }
}
};

