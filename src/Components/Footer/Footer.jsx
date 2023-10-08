import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="relative mt-16  ">
        {/* svg div  */}
        <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" >
          <svg
            className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-neutral "
            preserveAspectRatio="none"
            viewBox="0 0 1440 54"
          >
            <path
              fill="currentColor"
              d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
            ></path>
          </svg>
        </div>

        <div className="w-full bg-white p-8 ">
          <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between my-10">
            <img
              src="https://sport.7uptheme.net/wp-content/uploads/2017/07/logo.png"
              alt="logo-ct"
            />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
              <li>
                <NavLink
                  to={"/"}
                  className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/blog"}
                  className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                >
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-8 border-blue-gray-50" />
          <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            © 2023 Sports Event
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
