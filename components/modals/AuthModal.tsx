"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "../admin/LoginForm";
import UserLoginForm from "../forms/UserLoginForm";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-white text-black hover:bg-white/90 p-2 rounded-md">
        Login
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login To Your Account</DialogTitle>
          <DialogDescription>
            <UserLoginForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
