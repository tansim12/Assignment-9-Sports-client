import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";

import Rating from "react-rating";
import { Helmet } from "react-helmet-async";


const ServiceSingleDetailsCard = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [findData, setFindData] = useState({});
  useEffect(() => {
    const findD = data?.find((item) => item?.id === id);
    setFindData(findD);
  }, [data, id]);
  const { category_name, img, price, reviews, description, rating, title } =
    findData;

  const [dataMoment, setDataMoment] = useState([findData?.moment]);
  useEffect(() => {
    setDataMoment(findData?.moment);
  }, [findData]);

  return (
    <div className="">
      <Helmet><title>Services</title></Helmet>
      <section className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 my-10">
        <div className="grid md:grid-cols-4 gap-5 ">
          <div className="col-span-3">
            <div>
              <img className="rounded-lg" src={img} alt="" />
            </div>
            <div className="bg-gradient-to-b from-pink-500 via-purple-400 to-blue-300 p-5 ">
              <div className="text-white">
                <p className="text-xl sm:text-4xl font-black my-3">
                  {category_name}
                </p>
                <p className="text-2xl font-bold my-3">{title}</p>
                <p className="text-sm font-extralight ">{description}</p>
              </div>
              <div className="sm:flex justify-between gap-5">
                <p className="flex  items-center text-2xl my-3 font-semibold">
                  Price: <MdAttachMoney></MdAttachMoney> {price}
                </p>
                <div className="flex flex-wrap items-center pt-3 pb-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1">
                      <img
                        alt=""
                        className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                        src="https://source.unsplash.com/40x40/?portrait?1"
                      />
                      <img
                        alt=""
                        className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                        src="https://source.unsplash.com/40x40/?portrait?2"
                      />
                      <img
                        alt=""
                        className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                        src="https://source.unsplash.com/40x40/?portrait?3"
                      />
                    </div>
                    <span className="text-xl">
                      Liked by
                      <span className="font-semibold">Sports event</span>and
                      <span className="font-semibold"> {reviews} others</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="items-center flex gap-2 my-3 bg-gray-700 max-w-fit px-3 py-2 text-white rounded-md">
                {" "}
                <p className="text-xl bg-clip-text  text-transparent bg-gradient-to-r from-blue-200 to-cyan-200 font-extrabold">
                  Rating :{" "}
                </p>
                <div>
                  <Rating
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    initialRating={rating}
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
          {/* moment  */}
          <div className="col-span-3 my-10 md:my-0 md:col-span-1">
            <div>
              <p className="text-2xl font-extrabold  text-center shadow-black shadow-2xl">
                {category_name}
              </p>
              {dataMoment?.map((item, index) => (
                <div key={index} className="my-5 " data-aos="flip-down">
                  <img src={item?.img} className="rounded-lg w-full" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSingleDetailsCard;
