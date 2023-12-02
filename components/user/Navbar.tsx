"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { toast } from "sonner";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface User {
  id: string;
  firstName: any;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface NavbarProps {
  fetchUser: User | boolean;
}

const Navbar: React.FC<NavbarProps> = ({ fetchUser }) => {
  const router = useRouter();
  const path = usePathname();

  const navs = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Browse Pet", href: "/browse" },
    { name: "Get Involved", href: "/involve" },
  ];

  const isLoggedIn = typeof fetchUser === "object";

  const handleLogout = () => {
    deleteCookie("user");
    toast.success("Successfully logged out");
    router.push("/");
    router.refresh();
  };

  return (
    <>
      {!path.includes("admin") && (
        <div className="lg:p-10 p-5 flex justify-between items-center">
          <div>
            <h2 className="text-white font-semibold lg:text-2xl text-lg">
              Pet Adoption Website
            </h2>
          </div>
          <div className="lg:flex space-x-5 items-center hidden">
            <nav>
              <ul className="flex items-center space-x-10">
                {navs.map((item, index) => (
                  <Link href={item.href} className="text-white" key={index}>
                    {item.name}
                  </Link>
                ))}
              </ul>
            </nav>
            <div>
              {isLoggedIn ? (
                <div className="flex items-center space-x-5">
                  <p className="text-white">
                    Welcome {(fetchUser as User).firstName}
                  </p>
                  <Link href={"/status"} className="text-white">
                    Request Status
                  </Link>
                  <Button
                    className="bg-white text-black hover:bg-white/90"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Link href="/login">
                  <Button className="bg-white text-black hover:bg-white/90">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="lg:hidden ">
            <Sheet>
              <SheetTrigger>
                <Menu className="text-white" />
              </SheetTrigger>
              <SheetContent className="bg-black">
                <nav>
                  <ul className="flex flex-col items-start space-y-5 ">
                    {navs.map((item, index) => (
                      <Link href={item.href} className="text-white" key={index}>
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                </nav>
                <div>
                  {isLoggedIn ? (
                    <div className="flex flex-col items-start space-y-5 mt-3 ">
                      <p className="text-white">
                        Welcome {(fetchUser as User).firstName}
                      </p>
                      <Link href={"/status"} className="text-white">
                        Request Status
                      </Link>
                      <Button
                        className="bg-white text-black hover:bg-white/90"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <Link href="/login">
                      <Button className="bg-white text-black hover:bg-white/90">
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
