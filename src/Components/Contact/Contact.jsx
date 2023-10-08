import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  // handleContact
  const handleContact = (e) => {
    e.preventDefault();
    toast.success("Thanks for your feedback");
  };
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img
              src="https://i.ibb.co/2smg1nN/football-stadium-night-generative-ai-260559-480.jpg"
              alt="logo"
              className="w-full h-full absolute inset-0"
            />
           
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md ">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-neutral hover:cursor-pointer leading-relaxed">
                  web@programming-hero.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 px-5 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Your Sports Event Feedback Matters! Share Your Thoughts and Help
              Us Enhance Future Experiences for Everyone.
            </p>
            <form onSubmit={handleContact}>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white w-full btn btn-neutral border-0 py-2 px-6 focus:outline-none  rounded text-lg"
              >
                Button
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3">
              Sports Event Ends in Triumph, Leaving Fans Cheering for More. An
              Epic Conclusion to Athletic Excellence and Entertainment.
            </p>
          </div>
        </div>
      </section>
      <Toaster></Toaster>
    </div>
  );
};

export default Contact;
