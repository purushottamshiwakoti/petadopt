import { NextRequest, NextResponse } from "next/server";

import path from "path";
import { writeFile } from "fs/promises";
import prismadb from "@/lib/prismadb";

export async function POST(req:NextRequest){
    try {
     
        const data=await req.formData();
        const image:any=data.get('image');
        const name:any=data.get('name');
        const description:any=data.get('description');
        const price:any=data.get('price');
     

        const byteData=await image.arrayBuffer();
        const buffer=Buffer.from(byteData)
        const path=`./public/${image.name}`

       await  writeFile(path,buffer)

       

      const pet=await prismadb.pet.create({
        data:{
            name,
            description,
            price,
            image:path
        }
      })

      return NextResponse.json({message:"Successfully created pet",pet},{status:200})

        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error},{status:500})
    }

};

export async function GET(){
    try {
        const pet=await prismadb.pet.findMany({
            orderBy:{
                createdAt:"desc"
            }
        })
      return NextResponse.json({message:"Successfully fetched pet",pet},{status:200})
        
    } catch (error) {
        console.log(error);

        return NextResponse.json({message:error},{status:500})
        
    }
}