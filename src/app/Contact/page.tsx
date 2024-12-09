import Image from "next/image"
import banner from"../../../Gallery/Rectangle 1.png"




export default function Contact() {
  return (
    <div className="bg-white overflow-hidden cursor-pointer relative">
      <div className="relative">
        <Image
          src={banner}
          width={1400}
          height={600}
          alt="pic"
        />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-black text-4xl font-bold">
          Cart
        </div>
        <div></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-black text-1xl font-small">
          Home &gt; Cart
        </div>
      </div>

      <div className="grid md:grid-cols-3 items-start gap-4 max-md:gap-12 max-w-6xl mx-auto py-6 bg-white font-[sans-serif]">
        <div className="px-4">
          <h2 className="text-gray-800 text-2xl font-semibold">Contact Information</h2>

          <div className="space-y-8 mt-8">
            <div className="flex">
              <div className="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 32 32">
                  <path d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z" data-original="#000000" />
                  <path d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" data-original="#000000" />
                </svg>
              </div>

              <div className="ml-4">
                <h4 className="text-gray-800 text-base font-semibold">Chat to us</h4>
                <p className="text-xs mt-1">Chat with our team to help.</p>
                <p className="text-sm mt-4">exmple@gmail.com</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 512 512">
                  <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z" data-original="#000000" />
                  <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" data-original="#000000" />
                </svg>
              </div>

              <div className="ml-4">
                <h4 className="text-gray-800 text-base font-semibold">Visit us</h4>
                <p className="text-xs mt-1">Visit our office HQ.</p>
                <p className="text-sm mt-4">123 Street 256 House</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 473.806 473.806">
                  <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.2-61.7-122.2-2.1-18.7-.7-41.6 14.5-63.5 5.8-8.2 12.3-14.8 19.6-21.1 13.5-13.5 28.5-19.2 43.5-21.3 3.5-3.4 7-6.6 10.3-10 10.2-10.2 20.5-20.3 30.6-30.5 14.7-14.7 14.7-38.7 0-53.3l-31.1-31.1c-6.5-6.5-16.7-6.5-23.2 0l-12.3 12.3-54 54c-7.2 7.2-15.1 14.7-23 21.8l-29.6 29.7c-18 18-20.8 47.2-7.4 78.7 4.4 9.9 9.3 18.8 16.5 27.5 21 32.8 51.5 67.5 89.9 103.5 42.8 40.3 94.2 73.9 151.8 95.8 7.3 3.5 15.6 5.3 23.9 6.4 15.8 1.8 33.2 2.7 47.5 5.2 11.3 5.7 23 11.8 34.4 17.8z" data-original="#000000" />
                </svg>
              </div>

              <div className="ml-4">
                <h4 className="text-gray-800 text-base font-semibold">Call us</h4>
                <p className="text-xs mt-1">Our lines are open 24/7.</p>
                <p className="text-sm mt-4">1-800-221-779</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <h2 className="text-gray-800 text-2xl font-semibold">Contact Information</h2>
          <div className="space-y-8 mt-8">
            <form action="" className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-base text-gray-800 font-semibold">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className="w-full border text-gray-700 px-4 py-3 text-sm rounded-md"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-base text-gray-800 font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full border text-gray-700 px-4 py-3 text-sm rounded-md"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-base text-gray-800 font-semibold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="w-full border text-gray-700 px-4 py-3 text-sm rounded-md"
                  ></textarea>
                </div>
              </div>

              <button className="px-8 py-3 bg-gray-800 text-white rounded-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
