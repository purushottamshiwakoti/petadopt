import AddButton from "@/components/admin/AddButton";
import BackButton from "@/components/admin/BackButton";
import checkAdminAuth from "@/lib/checkAdminAuth";
import prismadb from "@/lib/prismadb";
import React from "react";
import ViewPetForm from "./components/ViewPetForm";

const page = async ({ params }: { params: any }) => {
  const id = params.id;
  const pet = await prismadb.pet.findUnique({
    where: {
      id,
    },
  });

  checkAdminAuth();
  return (
    <>
      <div className="p-10 w-[75vw]">
        <div className=" flex items-start justify-start ">
          <BackButton />
        </div>
        <div className="mt-5">
          <ViewPetForm pet={pet} />
        </div>
      </div>
    </>
  );
};

export default page;
