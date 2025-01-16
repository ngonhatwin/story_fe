"use client";
//lib
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
//component
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";

const LogoutPage = () => {
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  useEffect(() => {
    // Xóa cookies
    Cookies.remove("id");
    Cookies.remove("token");
    Cookies.remove("username");
    setTimeout(() => {
      setLoading(false);
      route.push("/");
    }, 1000); 
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? <LoadingSpinner /> : <p>Đã đăng xuất!</p>}
    </div>
  );
};

export default LogoutPage;
