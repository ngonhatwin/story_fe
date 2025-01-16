"use client";
//lib
import React, { useState } from "react";
import Cookies from "js-cookie";
//component
import { HandleLogin } from "@/api/login/HandleLogin";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import LoginComponent from "@/components/auth/login/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await HandleLogin(email, password);
      if (response) {
        const accessToken = response.data.token;
        const userName = response.data.username;
        Cookies.set("token", accessToken, { expires: 30 });
        Cookies.set("username", userName, { expires: 30 });
        Cookies.set("id", response.data.id, { expires: 30 });
        setSuccess(true);
        setError("");
        window.location.href = "/";
      }
    } catch (err) {
      setError("Email or password incorrect!");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <LoginComponent
      email={email}
      password={password}
      error={error}
      success={success}
      loading={loading}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginPage;
