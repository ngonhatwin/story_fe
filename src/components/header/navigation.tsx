"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationStructure } from "./navigation-structure";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { GetAllGenre } from "@/api/story/GetAllGenre";
import { Genre } from "@/types/genre";
const HeaderNav = () => {
  const [genreList, setGenreList] = useState<Genre[]>([]); // State để lưu genre
  //GetAllGenre
  useEffect(() => {
    const fetchAllGenre = async () => {
      try {
        const response: Genre[] = await GetAllGenre();
        const filteredResponse = response.filter(
          (item: any) => item.name && item.name.trim() !== ""
        );
        const uniqueGenres = Array.from(
          new Map(
            filteredResponse.map((item: any) => [item.name, item])
          ).values()
        );
        setGenreList(uniqueGenres);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Something went wrong";
        console.error("Failed to fetch chapters:", errorMessage);
      }
    };
    fetchAllGenre();
  }, []);
  return (
    <NavigationMenu className="h-20">
      <NavigationMenuList className="space-x-10">
        {NavigationStructure.map((item, idx) => (
          <NavigationMenuItem key={idx}>
            {item.title === "Thể loại" && genreList.length > 0 ? (
              <>
                <NavigationMenuTrigger className="bg-gray-100 text-md font-normal active:bg-gray-200 focus:outline-none">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {/* space-y-4: khoảng cách giữa các phần tử li */}
                    {genreList.map((genre, idx) => (
                      <ListItem
                        key={idx}
                        title={genre.name}
                        href={`/story/genre/${genre.id}`}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href}>{item.title}</Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default HeaderNav;
