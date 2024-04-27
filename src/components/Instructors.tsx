"use client";
 
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Instructor=[
    {
        "id": 1,
        "title": "Chef Instructor",
        "name": "Anna White",
        "designation": "Head Chef",
        "image": "https://media.istockphoto.com/id/877309720/photo/confident-chef-standing-arms-crossed-in-kitchen.jpg?s=1024x1024&w=is&k=20&c=hFWpMW5Lr3bDrbn2Zwj-Ql0Nq2p2lFA8KpM1WamrPtU="
      },
      {
        "id": 2,
        "title": "Pastry Chef",
        "name": "Michael Johnson",
        "designation": "Master Pastry Chef",
        "image": "https://media.istockphoto.com/id/1510005637/photo/portrait-of-a-male-chef-with-arms-crossed.jpg?s=1024x1024&w=is&k=20&c=eZ3QSvRoPghT9QJTypojfGLmMJg5iXqod1TZxlhJfhU="
      },
      {
        "id": 3,
        "title": "Culinary Educator",
        "name": "Maria Garcia",
        "designation": "Senior Chef",
        "image": "https://media.istockphoto.com/id/1458480349/photo/portrait-of-an-international-chefs-in-the-kitchen.jpg?s=1024x1024&w=is&k=20&c=XioL1fymESRg1ihpRmk8e0v9LTMDJK-q2V8p5VOBaiY="
      },
      {
        "id": 4,
        "title": "Executive Chef",
        "name": "John Davis",
        "designation": "Head Chef",
        "image": "https://media.istockphoto.com/id/1395410777/photo/portrait-of-a-professional-restaurant-chef.jpg?s=1024x1024&w=is&k=20&c=3H3QTdGpWbhySr6FYr9mkeWn6y-thJgkHYbgzIouzb0="
      },
      {
        "id": 5,
        "title": "Sous Chef",
        "name": "Emily Lee",
        "designation": "Senior Sous Chef",
        "image": "https://media.istockphoto.com/id/1453176679/photo/head-of-portrait.jpg?s=1024x1024&w=is&k=20&c=GCmEybgl66w6rIUu-9brEfkDNld3jmbG6j6eKYHxGHc="
      },
      {
        "id": 6,
        "title": "Bakery Chef",
        "name": "David Smith",
        "designation": "Master Baker",
        "image": "https://media.istockphoto.com/id/1277526036/photo/cooking.jpg?s=1024x1024&w=is&k=20&c=Ct15R-F-ErMWJ6g3Sm4pRehJQI1BU5IucJjBeaqknsM="
      }
]

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
    <WavyBackground speed="fast" className="max-w-4xl mx-auto pb-40">
    <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your cooking journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={Instructor} />
            </div>
    </WavyBackground>
    </div>
  )
}

export default Instructors