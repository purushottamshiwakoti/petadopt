import PetCarousel from "@/components/user/PetCarousel";
import React from "react";

const page = () => {
  return (
    <div className="bg-black">
      <div className="mt-[2rem] text-white ">
        <h2 className="text-center text-4xl font-bold ">Our Story</h2>
        <p className="lg:text-center lg:w-[55rem] lg:ml-[25%] mt-5 text-base p-3 lg:p-0">
          It is incredible how one small idea can grow into something truly
          special. Pet Adoption Website is rooted in the belief that we all have
          an inherent responsibility to make a meaningful difference in our
          community. With a variety of active projects and a large volunteer
          staff, we harness our skills and resources to successfully achieve our
          goals.
        </p>
        <p className="lg:text-center lg:w-[55rem] lg:ml-[25%] mt-5 text-base p-3 lg:p-0">
          Since our founding in 2000, we have been proud to witness how our
          activities have benefitted the San Francisco community and beyond.
          Want to take part? Contribute to our work by donating or volunteering
          today.
        </p>
      </div>
      <div className="mt-10">
        <PetCarousel />
      </div>
    </div>
  );
};

export default page;
