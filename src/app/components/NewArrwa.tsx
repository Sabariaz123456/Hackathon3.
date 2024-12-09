import Image from "next/image";
import React from "react";
import sohaAsgard from "../../../Gallery/Asgaard sofa 3.png"

export default function NewArrwa(){
    return(
        <section className="bg-[#FBF5DC] py-12">
            <div className="container mx-auto px-4 md:px-16 grid grid-cols md:grid-cols-2 items-center gap-8">
                <div className="flex justify-center">
                    <Image
                    src={sohaAsgard}
                    width={1600}
                    height={1600}
                    alt="Asgard sofa"/>
                    </div>
                    <div className="text-center md:text-left space-y-4">
                        <p className="text-lg font-medium text-gray-600">New Arriwal</p>
                        <h2 className="text-4xl font-bold text-gray-800">Asgaard Sofa</h2>
                        <a
                        href="Asgardsofa"
                        className="inline-block bg-white border border-black text-black font-black font-medium px-6 py-3 mt-4 hover:bg-black hover:text-white transition"
 >Order Now</a>
                </div>
            </div>
        </section>
    )
}