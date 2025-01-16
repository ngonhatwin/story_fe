"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchStory } from "@/api/story/SearchStory";
import { createSlug } from "@/types/slug";
import { LoadingSpinnerSearch } from "@/components/LoadingSpinner/LoadingSpinnerSearch";
const Searching = () => {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchString) {
        const fetchSearchStory = async () => {
          setLoading(true);
          try {
            const response = await SearchStory(searchString);
            setSearchResults(response || []); // Đảm bảo luôn là mảng
          } catch (error) {
            console.error("Error fetching stories:", error);
          } finally {
            setLoading(false);
          }
        };
        fetchSearchStory();
      } else {
        setSearchResults([]); // Reset khi không có từ khóa
      }
    }, 400); // Thời gian debouncing (500ms)

    // Hủy bỏ việc gọi API nếu người dùng nhập tiếp
    return () => clearTimeout(timeoutId);
  }, [searchString]); // Chạy lại khi searchString thay đổi

  return (
    <div className="flex flex-col justify-center items-center relative min-w-[360px]">
      <div className="flex items-center relative min-w-[360px]">
        <div className="relative w-full">
          <Input
            className="placeholder-gray-300 min-w-full pr-12 focus:outline-none focus:ring-0" // Thêm padding phải để tạo không gian cho Button
            id="searchBox"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Tìm kiếm"
          />
          <Button
            variant="ghost"
            className="absolute right-0 top-0 " // Vị trí Button
          >
            {loading && <LoadingSpinnerSearch />}
          </Button>
        </div>
        {searchResults.length > 0 && (
          <div className="  mt-16 left-0 top-0 w-full  md:absolute md:w-auto ">
            <ul className="">
              {searchResults.map((item, idx) => (
                <li
                  key={idx}
                  className="rounded-lg  border border-black-200 hover:bg-gray-100"
                >
                  <a
                    href={`/story/${createSlug(item.name)}`}
                    className="flex m-2 text-sm font-medium leading-none no-underline hover:text-accent-foreground focus:text-accent-foreground"
                  >
                    {item.urlImage && (
                      <img
                        src={item.urlImage}
                        alt={item.name}
                        className="w-20 h-auto"
                      />
                    )}
                    <div>
                      <div className="text-lg font-semibold">{item.name}</div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searching;
