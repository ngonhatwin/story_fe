"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { HandleLogin } from "@/api/login/HandleLogin";
import GoogleLoginButton from "@/components/ui/GoogleLoginButton";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

const LoginComponent = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true); // Bắt đầu loading
    console.log("Đang gửi yêu cầu đăng nhập...");
    try {
      const response = await HandleLogin(email, password);
      console.log("Đã nhận được phản hồi từ API:", response);
      if (response) {
        const accessToken = response.data.token;
        const roleResponse = response.data.role;
        const userName = response.data.username;
        Cookies.set("token", accessToken, { expires: 7 });
        Cookies.set("username", userName, { expires: 7 });
        setSuccess(true);
        setError("");
      }
    } catch (err) {
      const errorMessage = "Email or password incorrect!";
      console.error(`Lỗi đăng nhập: ${errorMessage}`, err);
      setError(errorMessage);
      setSuccess(false);
    } finally {
      setLoading(false); // Kết thúc loading, sẽ luôn chạy sau khi try-catch hoàn thành
      console.log("Kết thúc quá trình đăng nhập, loading:", loading);
    }
  };

  if (loading) {
    console.log("Hiện spinner vì loading đang ở true");
    return <LoadingSpinner />;
  }

  console.log("Hiện form đăng nhập, loading đã là false");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
              className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
          {success && (
            <p className="text-green-500 text-xs mb-4">Đăng nhập thành công!</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 bg-blue-500 text-white rounded-md ${
              loading ? "opacity-50" : "hover:bg-blue-600"
            } focus:outline-none`}
          >
            {loading ? "Đang đăng nhập..." : "Log in"}
          </button>
          <GoogleLoginButton />
          {/* <FacebookLoginButton /> */}
          <div className="mt-4 text-center">
            <div>
              <Link
                href="/register"
                className="text-sm text-blue-500 hover:underline"
              >
                Don't have an account?
              </Link>
            </div>
            <div>
              <Link
                href="/reset-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Reset password
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
