"use client";
import UserCompo from "@/components/user-com/user-compo";
import React, { useState, useEffect } from "react";
import { GetInfoUser } from "@/api/GetInfoUser";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
const UserPage = () => {
  const [infoUser, setInfoUser] = useState("");
  const [loading, setLoading] = useState(true);

   useEffect(() => {
     const fetchInfoUser = async () => {
       try {
         const response = await GetInfoUser();
       } catch (error) {
         const errorMessage =
           error instanceof Error ? error.message : "Something went wrong";
         console.error("Failed to fetch stories:", errorMessage);
       } finally {
         setLoading(false);
       }
     };
 
     fetchInfoUser();
   }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <UserCompo></UserCompo>
    </div>
  );
};

export default UserPage;
