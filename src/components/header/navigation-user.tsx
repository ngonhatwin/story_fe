"use client";
import * as React from "react";
import Cookies from "js-cookie";
import { NavigationStructureUser } from "./navigation-user-structure";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { LogInIcon, BellIcon } from "lucide-react"; // Đảm bảo bạn đã import LogInIcon

export default function NavigationUser() {
  const token = Cookies.get("token");

  return (
    <div>
      <NavigationMenu className="h-20">
        <NavigationMenuList className="space-x-10">
          {NavigationStructureUser.map((item, idx) => (
            <NavigationMenuItem key={idx}>
              {item.items ? (
                <>
                  <NavigationMenuTrigger className="flex items-center p-2 bg-gray-100 rounded-full active:bg-gray-200 focus:outline-none">
                    {/* Kiểm tra token để hiển thị UserIcon hoặc LogInIcon */}
                    {idx === 1 ? ( // Icon thứ 2 là UserIcon
                      token ? (
                        <>
                          <item.icon size={24} />
                          <NavigationMenuContent>
                            <ul className="grid w-[50px] gap-3 p-4 md:w-[150px] lg:w-[200px]">
                              {item.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={subItem.href}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        // Nếu không có token, hiển thị LogInIcon và không có subitems
                        <Link href="/auth/login">
                          <LogInIcon size={24} className="h-6 w-6" />
                        </Link>
                      )
                    ) : (
                      <item.icon size={24} />
                    )}
                  </NavigationMenuTrigger>
                </>
              ) : (
                <div className="flex items-center p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <item.icon size={24} />
                </div>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
