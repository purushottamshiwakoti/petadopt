import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {userId,petId}=await req.json();
        const requestPet=await prismadb.requestPet.create({
            data:{
                petId,
                userId
            }
        });

      return NextResponse.json({message:"Successfully requested pet",requestPet},{status:200})


    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error},{status:500})
    }

}

export async function GET(){
    try {

        const pet=await prismadb.requestPet.findMany({
            orderBy:{
               createdAt:"desc" 
            },
            include:{
                pet:true,
                user:true
            }
        });
      return NextResponse.json({message:"Successfully fetched pet",pet},{status:200})

        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error},{status:500})
        
    }
}