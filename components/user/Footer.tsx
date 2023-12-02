"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  return (
    <>
      {!path.includes("admin") && (
        <div className="bg-black ">
          <div className="text-white p-10 ">
            <h2 className=" text-center text-2xl  font-semibold">
              Pet Adoption Website
            </h2>
            <p className="text-center mt-5">prasoon2002.ps@gmail.com</p>

            <p className="text-center mt-16">©2023 by Pet Adoption Website. </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
