"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
//component
import UserComponent from "@/components/user/user";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
//api
import { GetInfoUser } from "@/api/user/GetInfoUser";
//types
import { User } from "@/types/user";
const UserPage = () => {
  const [infoUser, setInfoUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const UserId = Cookies.get("id");
  useEffect(() => {
    const fetchInfoUser = async () => {
      if (!UserId) {
        console.error("User ID không tồn tại");
        setLoading(false);
        return;
      }
      try {
        const response = await GetInfoUser(UserId);
        setInfoUser(response.data);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong";
        console.error("Failed to fetch stories:", errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchInfoUser();
  }, [UserId]);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <UserComponent infoUser={infoUser} />
    </div>
  );
};

export default UserPage;
