import LoginForm from "@/components/admin/LoginForm";
import UserLoginForm from "@/components/forms/UserLoginForm";
import UserRegisterForm from "@/components/forms/UserRegisterForm";
import React from "react";

const Register = () => {
  return (
    <div className="bg-black flex w-[100vw] flex-col justify-center items-center  p-10">
      <div>
        <h2 className="text-xl font-bold text-white">Register new account!</h2>
        <div className="lg:w-[50rem]  bg-white p-10 rounded-md shadow-md mt-3">
          <UserRegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
