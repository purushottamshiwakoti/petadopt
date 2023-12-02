import AddButton from "@/components/admin/AddButton";
import { DataTable } from "@/components/ui/datatable";
import checkAdminAuth from "@/lib/checkAdminAuth";
import React from "react";
import { columns } from "./column";

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

const page = async () => {
  const data = await getData();
  const filteredData = data.map((item: any) => ({
    id: item.id,
    name: item.name,
    description: item.description.slice(0, 100),
    price: item.price,
  }));
  checkAdminAuth();
  return (
    <>
      <div className="p-10 w-[75vw]">
        <div className=" flex items-end justify-end ">
          <AddButton href="/admin/addpet/add" title="Add Pet" />
        </div>
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={filteredData} />
        </div>
      </div>
    </>
  );
};

export default page;
