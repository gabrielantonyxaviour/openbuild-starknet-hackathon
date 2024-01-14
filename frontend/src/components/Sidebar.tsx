import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="fixed top-1/2 left-1/2 transform  -translate-y-1/2 h-[200px] w-[100px]"></div>
  );
}
