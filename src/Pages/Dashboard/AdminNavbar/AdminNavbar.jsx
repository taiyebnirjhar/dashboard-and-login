import React from "react";

import arrowBottom from "../../../assets/Icons/ArrowBottom.svg";
import presentation from "../../../assets/Icons/Presentation.svg";
import profile from "../../../assets/Icons/User.svg";
import bellIcon from "../../../assets/Icons/notification.svg";

function AdminNavbar() {
  return (
    <>
      {/* Navbar */}
      {/* <nav className="absolute top-0 left-0 w-full z-10  md:flex-row md:flex-nowrap md:justify-start flex items-center p-4  ">
        <div className="w-full mx-aut0 items-center flex justify-around md:flex-nowrap flex-wrap md:px-10 px-4">
          <div className=" text-[18px] font-[700]  hidden lg:inline-block leading-[25px]">
            Dashboard
          </div>
          <div className="flex justify-center items-center">
            
            <div className="border rounded-full border-slate-50">
              <div>
                <img src={bellIcon} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      {/* End Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a className=" text-[18px] font-[700]  hidden lg:inline-block leading-[25px]">
            Dashboard
          </a>

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex gap-x-4">
            <div className=" bg-[#0AB062] rounded-[6px] flex gap-3  px-6 py-3 ">
              <div className="flex self-center">
                <img src={presentation} alt="" srcset="" />
              </div>
              <div className="text-white  font-[600] leading-[19px] text-[14px] text-center">
                Start Trading
              </div>
            </div>
            <div className="border-[1px] border-gray-400 rounded-full bg-gray-900 p-1.5">
              <div>
                <img src={bellIcon} alt="" srcset="" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="border-[1px] border-gray-700 rounded-full bg-gray-900 p-2">
                <div>
                  <img src={profile} alt="" srcset="" />
                </div>
              </div>
              <div className="flex self-center text-[14px] leading-[19px]">
                Arafat M.
              </div>
            </div>
            <div className=" p-1.5">
              <div>
                <img src={arrowBottom} alt="" srcset="" />
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
