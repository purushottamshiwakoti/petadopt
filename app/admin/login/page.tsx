import LoginForm from "@/components/admin/LoginForm";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AdminLogin = () => {
  const cookieStore = cookies();
  const pet = cookieStore.get("pet");
  if (pet) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="flex justify-center items-center h-[40vh] mt-[10rem] rounded-md ml-[35vw] bg-white">
      <div className="w-[30rem]  shadow-lg p-4">
        <h2 className="font-bold text-blue-600 text-center">
          Login To Admin Dashboard
        </h2>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
