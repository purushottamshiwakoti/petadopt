import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  try {
    const data = await fetch(`${process.env.NEXT_URL}/api/addpet`, {
      cache: "no-store",
    });
    const response = await data.json();
    console.log(`${process.env.NEXT_URL}/api/addpet`);
    const { pet } = response;
    if (data.status === 200) {
      return pet;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}
const Browse = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="bg-black text-white mx-10">
      <div>
        {/* <p>dhhd</p> */}
        <p className="text-2xl capitalize">Available pets</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  ">
          {data.map((item: any) => (
            <div key={item.id} className="mt-10 mx-10">
              <Card>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription className="line-clamp-6">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`/${item.image.split("/").pop()}`}
                    alt="image"
                    width={400}
                    height={200}
                  />
                  <p className="mt-2 text-xl font-bold text-green-500">
                    Rs.{item.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="space-x-5 w-full">
                    <Link href={`/browse/${item.id}`}>
                      <Button className="w-full">View Details</Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
