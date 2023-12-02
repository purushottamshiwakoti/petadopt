import { Button } from "@/components/ui/button";
import React from "react";
import VIewPetRequest from "./components/VIewPetRequest";

async function getData() {
  try {
    const data = await fetch(`${process.env.NEXT_URL}/api/requestpet`, {
      cache: "no-store",
    });
    const response = await data.json();
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

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="p-10">
      <div>
        <VIewPetRequest pet={data} />
      </div>
    </div>
  );
};

export default page;
