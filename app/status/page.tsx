import prismadb from "@/lib/prismadb";
import React from "react";
import { cookies } from "next/headers";

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
import { Textarea } from "@/components/ui/textarea";

const page = async () => {
  const cookieStore = cookies();
  const user = cookieStore.get("user");
  const status = await prismadb.requestPet.findMany({
    where: {
      userId: user?.value,
    },
    include: {
      pet: true,
    },
  });
  return (
    <div className="bg-black">
      <div className="grid lg:grid-cols-3 mg:grid-cols-2 grid-cols-1">
        {status.map((item) => (
          <Card key={item.id} className="mx-5 mb-5">
            <CardHeader>
              <CardTitle>{item.pet.name}</CardTitle>
              <CardDescription className="line-clamp-4">
                {item.pet.description}
                <Image
                  src={`/${item.pet.image.split("/").pop()}`}
                  alt="image"
                  width={400}
                  height={200}
                />
              </CardDescription>
            </CardHeader>

            <CardFooter>
              <p>Status:{item.status}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
