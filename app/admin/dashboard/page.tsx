import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Description from "./components/Description";

const page = () => {
  const cookieStore = cookies();
  const pet = cookieStore.get("pet");
  if (!pet) {
    redirect("/admin/login");
  }

  return (
    <>
      <div className="p-10 grid grid-cols-3 space-x-3 ">
        <Description title="Total Pet" value="10" />
        <Description title="Total Pet" value="10" />
        <Description title="Total Pet" value="10" />
      </div>
    </>
  );
};

export default page;
