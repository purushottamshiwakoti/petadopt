import DonationForm from "@/components/user/DonationForm";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <div className="mt-[2rem] text-white ">
        <h2 className="text-center text-4xl font-bold ">Take Part</h2>
        <p className="text-center mt-2">You Can Make a Difference</p>
      </div>
      <div className="mt-10">
        <div className=" text-white ">
          <h2 className="text-center text-4xl font-bold ">Donate</h2>
          <p className="lg:text-center lg:w-[55rem] lg:ml-[25%] mt-5 text-base p-3 lg:p-0">
            This is your donation form. Encourage your site visitors to make a
            donation today by providing additional information about your
            organization, or how their contribution can best help achieve your
            goals.
          </p>
        </div>
        <DonationForm />
      </div>
    </div>
  );
};

export default page;
