"use client"

import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
Spotlight
import { Button } from "./ui/moving-border";
import { AuroraBackground } from "./ui/aurora-background"; 
import { motion  } from "framer-motion";
function TopSection() {
  return (
   
         
  <div className="h-auto md:h-[40rem] flex flex-col w-full rounded-md items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0  bg-black"
    >    <Spotlight
    className="-top-40 left-0   md:left-60 md:-top-20"
    fill="white"
  />
   
        <div className="p-4 w-full z-10 relative text-center ">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Delicious Discoveries</h1>
            <p className="flex text-lg justify-end mr-[3rem] md:mr[5rem] sm:mr-[22rem]">-Where dishes discover</p>
            
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                Discover the art of culinary mastery at our institute. From novice chefs to seasoned professionals, we offer a diverse range of courses tailored to every skill level. Explore the world of flavors, techniques, and creativity under the guidance of our expert chefs. Join our community and let your culinary journey begin!</p>
            <div className="mt-4">
                <Link href="/courses" >
                    <Button borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore Courses
                    </Button>
                     
                </Link>
            </div>
        </div>
    
    </div>
    
  )
}

export default TopSection