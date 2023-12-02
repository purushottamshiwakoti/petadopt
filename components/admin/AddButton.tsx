import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

const AddButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="flex space-x-1 items-center bg-blue-500 p-2 text-white rounded-lg"
    >
      <Plus className="h-5 w-5" />
      <h2>{title}</h2>
    </Link>
  );
};

export default AddButton;
