import React from "react";
import { TrendingUp } from "lucide-react";

const Description = ({ title, value }: { title: string; value: string }) => {
  return (
    <>
      <div className="w-[20rem]  shadow-lg p-4 text-blue-500 ">
        <h2 className="text-center mb-2  font-bold">{title}</h2>
        <div className="flex items-center justify-center">
          <TrendingUp />
          <h2 className=" font-bold ml-2">{value}</h2>
        </div>
      </div>
    </>
  );
};

export default Description;
