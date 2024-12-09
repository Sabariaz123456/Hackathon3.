import Image from "next/image"
import banner from "../../../Gallery/Rectangle 1.png"
import banner4 from "../../../Gallery/Group 76.png"

export default function Myaccount() {
  return (
    <div className="bg-white overflow-hidden cursor-pointer relative">
      {/* Banner Image */}
      <div className="relative">
        <Image
          src={banner}
          width={1400}
          height={600}
          alt="pic"
          className="w-full h-auto" // Ensuring image is responsive
        />
        <br />
        <br />
        <br />
        {/* Text on Banner */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-black font-bold text-center sm:text-3xl md:text-4xl lg:text-5xl">
          My Account
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-black text-sm sm:text-base font-small text-center">
          Home {">"} My Account
        </div>
      </div>

      {/* Form Section */}
      <form>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 py-10">
          {/* First Name */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">First Name</label>
            <input 
              name="name" 
              type="text" 
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Enter name" 
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Last Name</label>
            <input 
              name="lname" 
              type="text" 
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Enter last name" 
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
            <input 
              name="email" 
              type="email" 
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Enter email" 
            />
          </div>

          {/* Mobile No */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Mobile No.</label>
            <input 
              name="number" 
              type="number" 
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Enter mobile number" 
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <input 
              name="password" 
              type="password" 
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Enter password" 
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
            <input 
              name="cpassword" 
              type="password" 
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Enter confirm password" 
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-12 text-center">
          <button 
            type="button" 
            className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
            Sign Up
          </button>
        </div>

        {/* Footer Banner Image */}
        <div className="mt-12">
          <Image
            src={banner4}
            width={1400}
            height={600}
            alt="pic"
            className="w-full h-auto" // Ensuring the footer image is responsive
          />
        </div>
      </form>
    </div>
  )
}
