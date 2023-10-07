import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[80vh]">
        <Outlet></Outlet>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
