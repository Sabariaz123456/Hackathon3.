import Image from "next/image";
import React from "react";
import Sofa from "../../../Gallery/Rocket single seater 1.png"
export default function Hero(){
    return(
        <section className="bg-[#FBEBB5] min-h-screen flex items-center px-4 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="flec flex-col justify-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading=snug">
                        Roacket single <br/> seater
                    </h1>
                    <p className="text-lg text-gray-600">
                        Elegant and comfortable seating for you modern living room.
                    </p>
                    <a
                    href="#shop"
                    className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition">
                        Shop Now
                    </a>
                    </div>
<div className="flex justify-center items-center">
    <Image 
    src={Sofa}
    width={1200}
    height={1200}
    alt="rocket single sofa"
    className="w-full max-w-sm md-w-md object--contain:max/"></Image>
</div></div></section>
)}