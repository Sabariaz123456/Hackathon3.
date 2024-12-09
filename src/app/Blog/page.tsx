import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import banner from "../../../Gallery/Rectangle 1.png"
import image3 from "../../../Gallery/WhatsApp Image 2024-12-08 at 11.26.21 AM.jpeg"
import image4 from "../../../Gallery/WhatsApp Image 2024-12-08 at 11.26.22 AM (1).jpeg"
import image5 from "../../../Gallery/WhatsApp Image 2024-12-08 at 11.26.22 AM.jpeg"
import image6 from "../../../Gallery/WhatsApp Image 2024-12-08 at 11.26.23 AM (1).jpeg"
import image7 from "../../../Gallery/WhatsApp Image 2024-12-08 at 11.26.23 AM.jpeg"

export default function Checkout() {
  return (
    <div className="bg-white overflow-hidden cursor-pointer relative">
      <div className="relative">
        <Image
          src={banner}
          width={1400}
          height={600}
          alt="banner image"
          className="w-full h-auto"
        />
        {/* Main heading */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4">
          CheckOut
        </div>
        {/* Breadcrumb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-black text-xs sm:text-sm md:text-base lg:text-lg font-light text-center px-4">
          Home {">"} CheckOut
        </div>
      </div>


      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* First Column (65% width) */}
            <div className="md:col-span-2 lg:col-span-3 space-y-6">
              {/* First Post */}
              <div>
                <Image
                  src={image5}
                  alt="Going On"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-2xl sm:text-3xl font-bold mt-4">Going all-in with millenial design</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Second Post */}
              <div className="mt-12">
                <Image
                  src={image4}
                  alt="Going On Again"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-2xl sm:text-3xl font-bold mt-4">Exploring New ways of decorating</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>

              {/* Third Post */}
              <div className="mt-12">
                <Image
                  src={image3}
                  alt="Third Post"
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
                <h1 className="text-2xl sm:text-3xl font-bold mt-4">Hand made pieces that took time to make</h1>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur enim vel urna aliquam, id euismod eros
                  pellentesque. Cras volutpat turpis ac nisl iaculis, non faucibus erat volutpat. Aliquam erat volutpat.
                </p>
                <Link href="/" className="text-red-500 hover:underline mt-4 block">
                  Read More
                </Link>
              </div>
            </div>

            {/* Second Column (35% width) for Recent Posts */}
            <div className="md:col-span-1 lg:col-span-2 space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">Recent Posts</h1>

              {/* Recent Post 1 */}
              <div className="flex items-center space-x-4">
                <Image
                  src={image4}
                  alt="Recent Post 1"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Going all-in one with millenial design</h2>
                  <p className="text-gray-600 text-sm">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 2 */}
              <div className="flex items-center space-x-4">
                <Image
                  src={image5}
                  alt="Recent Post 2"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Exploring new ways of decorating</h2>
                  <p className="text-gray-600 text-sm">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 3 */}
              <div className="flex items-center space-x-4">
                <Image
                  src={image6}
                  alt="Recent Post 3"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Hand made pieces that took time to make</h2>
                  <p className="text-gray-600 text-sm">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 4 */}
              <div className="flex items-center space-x-4">
                <Image
                  src={image7}
                  alt="Recent Post 4"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Modern home in Milan</h2>
                  <p className="text-gray-600 text-sm">
                    03 Aug 2022
                  </p>
                </div>
              </div>

              {/* Recent Post 5 */}
              <div className="flex items-center space-x-4">
                <Image
                  src={image5}
                  alt="Recent Post 5"
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div>
                  <h2 className="text-black font-bold">Colorful office redesign 5</h2>
                  <p className="text-gray-600 text-sm">
                    03 Aug 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section: CONCEPT Posts */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div className="text-center">
              <h2 className="text-black font-bold text-2xl sm:text-3xl">Free Delivery</h2>
              <p className="text-lg text-gray-700">For all orders over $50, consectetur adipim scing elit.</p>
            </div>

            {/* Second Column */}
            <div className="text-center">
              <h2 className="text-black font-bold text-2xl sm:text-3xl">90 Days Return</h2>
              <p className="text-lg text-gray-700">If the product has an issue, consectetur adipim scing elit.</p>
            </div>

            {/* Third Column */}
            <div className="text-center">
              <h2 className="text-black font-bold text-2xl sm:text-3xl">Secure Payments</h2>
              <p className="text-lg text-gray-700">100% secure payments, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
