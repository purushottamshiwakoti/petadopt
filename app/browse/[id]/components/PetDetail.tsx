"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface PetDetailProps {
  pet: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
  userId: string | undefined;
}

const PetDetail: React.FC<PetDetailProps> = ({ pet, userId }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRequestPet = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/requestpet", {
        petId: pet?.id,
        userId,
      });
      const { message } = await response.data;
      toast.success(message);
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log({ userId });
  return (
    <Card>
      <CardHeader>
        <CardTitle>{pet?.name}</CardTitle>
        <CardDescription className="line-clamp-6">
          {pet?.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={`/${pet?.image.split("/").pop()}`}
          alt="image"
          width={1000}
          height={1000}
        />
        <p className="mt-2 text-xl font-bold text-green-500">Rs.{pet?.price}</p>
      </CardContent>
      <CardFooter>
        <div className="space-x-5 w-full">
          {!userId ? (
            <div>
              <Link href="/login">
                <Button className="bg-black text-white hover:bg-black/90 capitalize ">
                  Login to request pet
                </Button>
              </Link>
            </div>
          ) : (
            <Button onClick={() => handleRequestPet()} disabled={loading}>
              Request Pet
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PetDetail;
