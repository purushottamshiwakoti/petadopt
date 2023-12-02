import Sidebar from "@/components/admin/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <div className="flex">
        <Sidebar />
        <div className="ml-10">{children}</div>
      </div>
    </div>
  );
};

export default layout;
