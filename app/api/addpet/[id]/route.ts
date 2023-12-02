import { NextRequest, NextResponse } from "next/server";

import path from "path";
import { writeFile } from "fs/promises";
import prismadb from "@/lib/prismadb";

export async function POST(req:NextRequest,{params}:{params:any}){
    try {
     const id=params.id;
        const data=await req.formData();
        const image:any=data.get('image');
        const name:any=data.get('name');
        const description:any=data.get('description');
        const price:any=data.get('price');
     

        if(image){
            const byteData=await image.arrayBuffer();
        const buffer=Buffer.from(byteData)
        const path=`./public/${image.name}`

       await  writeFile(path,buffer)

       

      const pet=await prismadb.pet.update({
        where:{
            id
        },
        data:{
            name,
            description,
            price,
            image:path
        }
      })
      return NextResponse.json({message:"Successfully updated pet",pet},{status:200})

        }else{
            const pet=await prismadb.pet.update({
                where:{
                    id
                },
                data:{
                    name,
                    description,
                    price,
                }
              })
              return NextResponse.json({message:"Successfully updated pet",pet},{status:200})
        }


        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error},{status:500})
    }

};


export async function DELETE(req:NextRequest,{params}:{params:any}){
    try {
const id=params.id;
        await prismadb.pet.delete({
            where:{
                id
            }
        })
        return NextResponse.json({message:"Successfully deleted pet",},{status:200})
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:error},{status:500})
    }
}

