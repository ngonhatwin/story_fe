"use client";
//lib
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
//component
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";

const LogoutPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Xóa cookies
    Cookies.remove("id");
    Cookies.remove("token");
    Cookies.remove("username");
    // Chuyển hướng sau khi xóa xong
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/";
    }, 1000); // Giả lập thời gian xử lý
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? <LoadingSpinner /> : <p>Đã đăng xuất!</p>}
    </div>
  );
};

export default LogoutPage;
