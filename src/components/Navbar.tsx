"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
 

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50  ", className)}> 
   <Menu setActive={setActive}>
    <Link   href="/"> 
    <MenuItem setActive={setActive} active={active} item="Home">
        
    </MenuItem>
    </Link>
    <MenuItem setActive={setActive} active={active} item="Courses">
        <div className="flex flex-col space-y-5 text-sm">
    <HoveredLink href="/courses">All Courses</HoveredLink>
    <HoveredLink href="/courses">Essential Cooking Techniques</HoveredLink>
    <HoveredLink href="/courses">Artisan Bread Making</HoveredLink>
    <HoveredLink href="/courses">International Cuisine</HoveredLink>
    <HoveredLink href="/courses">Pastry and Dessert Making</HoveredLink>
    <HoveredLink href="/courses">Vegetarian and Vegan Cooking</HoveredLink>
    </div>
        </MenuItem>
       
        <Link  href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
        </Link>
   </Menu>
    
    </div>
  )
}

export default Navbar