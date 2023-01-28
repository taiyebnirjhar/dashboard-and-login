import React from "react";
import presentation from "../../../assets/Icons/Presentation.svg";
function AdminNavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10  md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 ">
        <div className="w-full mx-aut0 items-center flex justify-around md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <div className=" text-[18px] font-[700]  hidden lg:inline-block leading-[25px]">
            Dashboard
          </div>
          <div>
            {/* Button --- start trading */}
            <div className=" bg-[#0AB062] rounded-[6px] flex gap-3  px-6 py-3 ">
              <div className="flex self-center">
                <img src={presentation} alt="" srcset="" />
              </div>
              <div className="text-white  font-[600] leading-[19px] text-[14px] text-center">
                Start Trading
              </div>
            </div>
          </div>

          {/* Form */}
          {/* <div className="md:flex hidden flex-row flex-wrap items-center mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center  rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300  relative   rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </div> */}
          {/* User */}
          {/* <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            
          </ul> */}
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

export default AdminNavbar;
