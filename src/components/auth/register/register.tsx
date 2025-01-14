"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { HandleRegister } from '@/api/register/HandleRegister';
// import { HandleCheckEmail } from '../../api/User/checkEmailExist';

const RegisterComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading toàn màn hình

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true); // Bắt đầu loading toàn màn hình
    try {
      const response = await HandleRegister(userName, email, password);
      if (response) {
        console.log('Message:', response.data.message);
        alert('Success!!');
      }
    } catch (error) {
      console.error('Error');
    }
    setIsLoading(false); // Kết thúc loading toàn màn hình
  };

  // const handleCheckEmailMain = async (email) => {
  //   setIsCheckingEmail(true); // Bắt đầu kiểm tra email
  //   try {
  //     const response = await HandleCheckEmail(email);
  //     if (response.status === 200) {
  //       setEmailError('Email existed, please choose another email!');
  //     } else {
  //       setEmailError('');
  //     }
  //   } catch (error) {
  //     console.error('Error');
  //   }
  //   setIsCheckingEmail(false); // Kết thúc kiểm tra email
  //   setIsEmailChecked(true);
  // };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Loading toàn màn hình */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="h-16 w-16 border-4 border-t-transparent border-white animate-spin rounded-full"></div>
        </div>
      )}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailChecked(false);
                setEmailError('');
              }}
              // onBlur={() => {
              //   if (!isEmailChecked && email) handleCheckEmailMain(email);
              // }}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {/* Loading kiểm tra email */}
            {isCheckingEmail && (
              <div className="h-4 w-4 border-2 border-t-transparent border-blue-500 animate-spin rounded-full"></div>
            )}
            {/* Hiển thị lỗi email */}
            {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/auth/login">
            <p className="text-blue-600 hover:underline">Already have an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
