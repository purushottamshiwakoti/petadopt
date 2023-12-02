import { NextRequest, NextResponse } from "next/server";

import { cookies } from 'next/headers'


import prismadb from "@/lib/prismadb";

export async function POST(req:NextRequest){
    try {
     
       const {email,password}=await req.json();
       

      const user=await prismadb.user.findUnique({
      where:{
        email
      }
      })
      if(!user){
        return NextResponse.json({message:"Invalid crediantials"},{status:400})

      }
      if(user.password===password){
        cookies().set('user', user.id);

        return NextResponse.json({message:"Successfully loggedin",user},{status:200})
      }else{
        return NextResponse.json({message:"Invalid crediantials"},{status:400})

      }

    

        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error},{status:500})
    }

};