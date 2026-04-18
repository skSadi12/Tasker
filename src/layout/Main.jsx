import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Navbar from "../components/navbar";
// import Footer from "../components/Footer";
// import Navbar from "../Components/Navbar";

const Main = () => {
  return (
    <div className="font-sans antialiased  tetx-black bg-[#151C21] text-white  ">
      {/* <Navbar /> */}
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>

      {/* <Footer/> */}
    </div>
  );
};

export default Main;
