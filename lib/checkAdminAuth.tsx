import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const checkAdminAuth = () => {
  const cookieStore = cookies();
  const pet = cookieStore.get("pet");
  if (!pet) {
    // redirect("/admin/login");
    return (
      <>
        <Link href="/login">
          <Button className="bg-white text-black hover:bg-white/90">
            Login
          </Button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <p>Welcome</p>
      </>
    );
  }
};

export default checkAdminAuth;
