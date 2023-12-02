import { NextRequest, NextResponse } from "next/server";

import { setCookie } from "cookies-next";
import { cookies } from 'next/headers'


import prismadb from "@/lib/prismadb";

export async function POST(req:NextRequest){
    try {
     
       const {firstName,lastName,email,password}=await req.json();
       

      const user=await prismadb.user.create({
        data:{
            firstName,
            lastName,email,password
        }
      })

      cookies().set('user', user.id);

      return NextResponse.json({message:"Successfully registered",user},{status:200})

        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error},{status:500})
    }

};

export async function GET(){
    try {
        const user=await prismadb.user.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
      return NextResponse.json({message:"Successfully fetched user",user},{status:200})
        
    } catch (error) {
        console.log(error);

        return NextResponse.json({message:error},{status:500})
        
    }
}