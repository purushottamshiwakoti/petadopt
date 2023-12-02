import prismadb from "@/lib/prismadb";
import React from "react";
import { cookies } from "next/headers";

import PetDetail from "./components/PetDetail";

const page = async ({ params }: { params: any }) => {
  const cookieStore = cookies();
  const user = cookieStore.get("user");

  const id = params.id;
  const pet = await prismadb.pet.findUnique({
    where: {
      id,
    },
  });
  return (
    <div className="bg-black text-white">
      <div className="p-10">
        <h2 className="mb-4 text-xl font-bold">View Pet Detail</h2>

        <PetDetail pet={pet} userId={user && user.value} />
      </div>
    </div>
  );
};

export default page;
