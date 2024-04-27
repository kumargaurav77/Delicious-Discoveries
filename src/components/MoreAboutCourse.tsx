'use client'

import { StickyScroll } from "./ui/sticky-scroll-reveal";

 
const cookingContent = [
    {
        "title": "Professional Chef Training Program",
        "description": "Become a professional chef with our comprehensive training program. Learn advanced culinary techniques, menu planning, kitchen management, and more."
      },
      {
        "title": "Baking and Pastry Arts Diploma",
        "description": "Master the art of baking and pastry with our intensive diploma program. From bread baking to cake decorating, develop the skills to excel in the world of pastry arts."
      },
      {
        "title": "Culinary Nutrition Certification",
        "description": "Combine your passion for cooking with nutrition knowledge. Our certification program focuses on healthy cooking techniques, nutrition science, and recipe development."
      },
      {
        "title": "Plant-Based Cooking Course",
        "description": "Discover the world of plant-based cuisine with our specialized cooking course. Learn to create delicious and nutritious plant-based meals that are both satisfying and sustainable."
      },
      {
        "title": "Gastronomy and Food Culture Seminar",
        "description": "Explore the rich tapestry of global food culture with our gastronomy seminar. Dive deep into culinary traditions, food history, and gastronomic trends from around the world."
      }
]
    
   
function MoreAboutCourse() {
   
  return (
    <div className="">
      <StickyScroll content={cookingContent} />
    </div>
  )
}

export default MoreAboutCourse