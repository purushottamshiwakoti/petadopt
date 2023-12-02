import AddButton from "@/components/admin/AddButton";
import BackButton from "@/components/admin/BackButton";
import checkAdminAuth from "@/lib/checkAdminAuth";
import React from "react";
import AddPetForm from "./components/AddPetForm";

const page = () => {
  checkAdminAuth();
  return (
    <>
      <div className="p-10 w-[75vw]">
        <div className=" flex items-start justify-start ">
          <BackButton />
        </div>
        <div className="mt-5">
          <AddPetForm />
        </div>
      </div>
    </>
  );
};

export default page;
