import Image from "next/image"
import chair from "../../../Gallery/WhatsApp Image 2024-12-07 at 10.49.27 PM.jpeg"
import sofa2 from "../../../Gallery/WhatsApp Image 2024-12-07 at 10.49.45 PM.jpeg"

export default function Hero2() {
  return (
    <section className="text-gray-600 bg-purple-50 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center sm:justify-between bg-purple-50 -mx-4 -mb-10 text-center">
          {/* Left-side Image and Content */}
          <div className="w-full sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 bg-purple-50 overflow-hidden">
              <Image
                src={chair}
                width={400}
                height={200}
                alt="sofa"
                layout="responsive" // Ensures image scales properly
              />
            </div>
            <h2 className="title-font text-xl sm:text-2xl font-medium text-gray-900 mt-6 mb-3">Side table</h2>
            <button className="flex mx-auto mt-6 text-black border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded hover:underline">
              View more
            </button>
          </div>
          
          {/* Right-side Image and Content */}
          <div className="w-full sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                src={sofa2}
                width={600}
                height={400}
                alt="Pic"
                layout="responsive" // Ensures image scales properly
              />
            </div>
            <h2 className="title-font text-xl sm:text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
            <button className="flex mx-auto mt-6 text-black border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded hover:underline">
              View more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
