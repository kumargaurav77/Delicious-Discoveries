"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
 
const testimonials = [
    {
        "quote": "The cooking classes at Culinary Creations exceeded my expectations. I not only learned new recipes but also gained insights into culinary techniques that have elevated my cooking skills.",
        "name": "Alexandra Nguyen",
        "title": "Food Enthusiast"
      },
      {
        "quote": "As a busy professional, I never thought I could find time for cooking. Thanks to the flexible scheduling options at Chef's Table, I was able to pursue my passion for cooking without compromising my work commitments.",
        "name": "Michael Johnson",
        "title": "Business Consultant"
      },
      {
        "quote": "The sushi-making workshop at Sushi Masterclass was an eye-opener. I never imagined I could create such beautiful and delicious sushi rolls until I attended this class.",
        "name": "David Martinez",
        "title": "Sushi Lover"
      },
      {
        "quote": "I've always been intimidated by baking, but the beginner's baking course at Sweet Success made it so approachable. I now feel confident whipping up cakes and pastries for my family and friends.",
        "name": "Sophie Williams",
        "title": "Home Baker"
      }
]
function QuotesSection() {
  return (

    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center m-auto mr-1 ml-1 mb-20 z-10">
          Kitchen Chronicles: Sizzling Success Stories in Flavor</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default QuotesSection