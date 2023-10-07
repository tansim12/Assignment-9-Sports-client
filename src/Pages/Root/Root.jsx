import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  const location = useLocation()
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 ">
        
        {location?.pathname !== "/" && <Navbar></Navbar>}
        
      </div>
      <div className="min-h-[80vh]">
        <Outlet></Outlet>
      </div>
      <div >
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
