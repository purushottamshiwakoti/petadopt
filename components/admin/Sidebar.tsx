"use client";
import { LayoutDashboard, PlusSquare, View, LogOut } from "lucide-react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { deleteCookie } from "cookies-next";
import { toast } from "sonner";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const navs = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard />,
      href: "/admin/dashboard",
    },
    {
      name: "Add Pet",
      icon: <PlusSquare />,
      href: "/admin/addpet",
    },
    {
      name: "View Pet Request",
      icon: <View />,
      href: "/admin/petrequest",
    },
  ];

  const handleLogout = () => {
    toast.success("Successfully logged out");
    router.push("/admin/login");
  };

  return (
    <>
      {pathname !== "/admin/login" && (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
              Pet Adoptation Dashboard
            </h5>
          </div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            {navs.map((item, index) => (
              <Link
                href={item.href}
                role="button"
                className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                key={index}
              >
                <div className="grid place-items-center mr-4">{item.icon}</div>
                {item.name}
              </Link>
            ))}
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
              onClick={() => handleLogout()}
            >
              <div className="grid place-items-center mr-4">
                <LogOut />
              </div>
              Logout
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Sidebar;
