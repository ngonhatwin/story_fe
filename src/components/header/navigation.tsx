"use client"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { NavigationStructure } from "./navigation-structure"
import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"


export default function HeaderNav() {
  return (
    <NavigationMenu className="h-20">
      <NavigationMenuList className="space-x-10">
        {NavigationStructure.map((item, idx) => {
          return <NavigationMenuItem key={idx}>
            {item.items ? <NavigationMenuTrigger className="bg-gray-100 text-md font-normal">
              <item.icon /> {item.title}
            </NavigationMenuTrigger> :
              <Link href={item.href} className="flex">
                <item.icon /> {item.title}
              </Link>
            }
            {item.items ? <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {item.items.map((subitem, idx) =>  <ListItem
                  key={subitem.name}
                  title={subitem.name}
                  href={subitem.href}
                >
                  {subitem.description}
                </ListItem>)}
              </ul>
            </NavigationMenuContent> : ''}
          </NavigationMenuItem>

        })}

      </NavigationMenuList>
    </NavigationMenu>
  )
}

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
  )
})
ListItem.displayName = "ListItem"