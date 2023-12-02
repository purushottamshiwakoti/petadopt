"use client";

import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div
      role="button"
      className="flex space-x-1 items-center bg-blue-500 p-2 text-white rounded-lg"
      onClick={() => router.back()}
    >
      <h2>Go Back</h2>
    </div>
  );
};

export default BackButton;
