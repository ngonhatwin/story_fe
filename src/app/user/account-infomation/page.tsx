"use client";
import UserCompo from "@/components/user-com/user-compo";
import React, { useState, useEffect } from "react";
import { GetInfoUser } from "@/api/user/GetInfoUser";
import { LoadingSpinner } from "@/components/LoadingSpinner/LoadingSpinner";
import Cookies from "js-cookie";
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
      <UserCompo infouser={infoUser} />
    </div>
  );
};

export default UserPage;
