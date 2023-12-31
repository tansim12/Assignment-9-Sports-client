import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Featured from "../../Components/Featured/Featured";
import FAQs from "../../Components/FAQs/FAQs";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="mt-[70px] md:mt-0">
        <Banner data={data}></Banner>
      </div>
      {/* service section  */}
      <section>
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 my-10">
          <h1 className="text-center text-3xl sm:text-5xl mt-4 font-extrabold">
            Our Services{" "}
          </h1>
          <hr className="w-[200px] sm:w-[350px] mx-auto mb-7 border-2 border-black" />
          <Services></Services>
        </div>
      </section>

      {/* featured section  */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5 my-10">
        <Featured></Featured>
      </section>
      {/* FAQS  */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5 ">
        <FAQs></FAQs>
      </section>
    </>
  );
};

export default Home;
