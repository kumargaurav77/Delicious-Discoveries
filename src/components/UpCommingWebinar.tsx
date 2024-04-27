'use client'
import Link from 'next/link'
import React from 'react'
Link
import { HoverEffect } from "./ui/card-hover-effect";






const webinar = [
    {
        title: "Healthy Cooking 101: Essentials for Nutritious Meals",
        link: "https://example.com/webinar/healthy-cooking-101",
        description: "Join us for a beginner's guide to healthy cooking. Learn simple techniques and recipes for creating delicious and nutritious meals that nourish the body and delight the taste buds.",
        isFeatured: true
    },
    {
        title: "Baking Basics: From Cookies to Cakes",
        link: "https://example.com/webinar/baking-basics",
        description: "Explore the fundamentals of baking in this comprehensive webinar. Discover the science behind baking, essential techniques, and recipes for classic treats like cookies, cakes, and more.",
        isFeatured: true
    },
    {
        title: "Plant-Based Pantry: Stocking Your Kitchen for Success",
        link: "https://example.com/webinar/plant-based-pantry",
        description: "Transitioning to a plant-based diet? Join us to learn how to stock your pantry with essential ingredients for plant-based cooking. Discover versatile ingredients, pantry staples, and recipe ideas.",
        isFeatured: false
    },
    {
        title: "Global Flavors: A Culinary Tour Around the World",
        link: "https://example.com/webinar/global-flavors-tour",
        description: "Embark on a culinary adventure without leaving your kitchen! Join us as we explore the diverse flavors and cuisines of different countries. From Asian stir-fries to Latin American tacos, broaden your culinary horizons.",
        isFeatured: true
    },
    {
        title: "Homemade Pasta Workshop: From Dough to Dish",
        link: "https://example.com/webinar/homemade-pasta-workshop",
        description: "Experience the art of pasta-making in this hands-on workshop. Learn to make fresh pasta dough from scratch and craft a variety of pasta shapes. Impress your family and friends with homemade pasta dishes!",
        isFeatured: true
    },
    {
        title: "The Art of French Pastry: Mastering Croissants and Éclairs",
        link: "https://example.com/webinar/french-pastry-masterclass",
        description: "Indulge in a virtual masterclass on French pastry-making. Learn the secrets behind crafting buttery croissants and delicate éclairs from scratch, guided by our expert pastry chefs.",
        isFeatured: false
    },
    {
        title: "Spice Up Your Kitchen: Exploring Indian Cuisine",
        link: "https://example.com/webinar/indian-cuisine-exploration",
        description: "Join us for an exciting exploration of Indian cuisine. From fragrant curries to crispy pakoras, discover the vibrant spices and flavors that define Indian cooking.",
        isFeatured: true
    },
    {
        title: "The Art of Food Photography: Capturing Culinary Creations",
        link: "https://example.com/webinar/food-photography-masterclass",
        description: "Unleash your creativity with a food photography masterclass. Learn techniques for styling and capturing stunning images of your culinary creations, whether you're a food blogger, chef, or enthusiast.",
        isFeatured: false
    }
]

function UpCommingWebinar() {

    const availableWebinar = webinar.filter((webinar) => (webinar.isFeatured))
    return (
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Unleash Your Inner Chef </p>
                </div>

                
                    <div key={Math.random()} className="mt-10">
                        <HoverEffect items={availableWebinar.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: webinar.link
                            }
                        ))} />

                    

                </div>

                <div className=" mt-10 text-center">
                    <Link href={"/courses"}
                        className="px-4 py-2 rounded-3xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                        View All courses
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default UpCommingWebinar