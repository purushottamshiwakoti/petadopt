"use client";
import React, { useState } from "react";
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
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

interface VIewPetRequestProps {
  pet: {
    id: string;
    userId: string;
    petId: string;
    status: string;
    message: string | null;
    createdAt: string;
    updatedAt: string;
    pet: {
      id: string;
      name: string;
      description: string;
      image: string;
      price: string;
      createdAt: string;
      updatedAt: string;
    };
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      createdAt: string;
      updatedAt: string;
    };
  }[];
}

const VIewPetRequest: React.FC<VIewPetRequestProps> = ({ pet }) => {
  const [loaing, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleAccept = async (id: any) => {
    try {
      setLoading(true);
      const response = await axios.patch(`/api/requestpet/${id}`, {
        status: "Approved",
        message,
      });
      const data = await response.data;
      toast.success(data.message);
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleReject = async (id: any) => {
    try {
      setLoading(true);
      const response = await axios.patch(`/api/requestpet/${id}`, {
        status: "Rejected",
        message,
      });
      const data = await response.data;
      toast.success(data.message);
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="grid grid-cols-3">
        {pet.map((item) => (
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
            <CardContent>
              <p>
                Requested By:{" "}
                <span className="font-bold capitalize">
                  {item.user.firstName}
                </span>
              </p>
            </CardContent>
            <CardFooter>
              {item.status === "Pending" ? (
                <div>
                  <div className="flex space-x-2">
                    <Button
                      disabled={loaing}
                      onClick={() => handleAccept(item.id)}
                    >
                      Accept
                    </Button>
                    <Button
                      disabled={loaing}
                      variant={"destructive"}
                      onClick={() => handleReject(item.id)}
                    >
                      Reject
                    </Button>
                  </div>
                  <div className="mt-5">
                    <Textarea
                      placeholder="Enter message here"
                      className="w-full"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <p>Status:{item.status}</p>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default VIewPetRequest;
