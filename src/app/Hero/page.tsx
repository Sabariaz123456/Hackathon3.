import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="flex justify-between items-center bg-yellow-200 py-4 px-6 sm:px-12 md:px-16">

            {/* Left Section (Text) */}
            <div className="flex flex-col justify-center items-start sm:w-1/2 md:w-1/3 mr-6 h-{276} w-{440} ml-36 mt-28"> 
                <h1 className="text-5xl font-bold text-gray-800 mb-2 ">Rocket Single</h1>
                <h1 className="text-5xl font-bold text-gray-800">Seater</h1>
                <div>
                <h1 className="text-xl mt-8 text-black ">Shop Now</h1>

                <div className="w-24 mx-auto border-t-2 border-gray-800 mt-2"></div>
               
              </div>
                
            </div>

            {/* Right Section (Image) */}
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2">
                <Image
                    src="/sofa.png"
                    alt="Sofa"
                    width={1440}
                    height={800}
                    objectFit="cover"
                    className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[600px]"
                />
            </div>

        </div>
    );
}