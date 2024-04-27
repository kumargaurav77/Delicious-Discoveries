'use client'
function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
            At Delicious Discoveries, we are passionate about all things culinary. Whether you are a novice cook or an experienced chef, our institute is here to help you sharpen your skills, explore new flavors, and unleash your culinary creativity.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 ">Follow Us</h2>
            <div className="flex flex-col space-x-0">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>New Delhi, India</p>
            <p>Delhi 10001</p>
            <p>Email:help@deliciousdiscoveries.com</p>
            <p>Phone:(123) 456-7890</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Delicious Discoveries. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer