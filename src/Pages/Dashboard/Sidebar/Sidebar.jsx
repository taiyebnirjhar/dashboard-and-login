import React, { useState } from "react";
import Billing from "../../../assets/Icons/Billing.svg";
import dashboard from "../../../assets/Icons/Dashboard.svg";
import dollar from "../../../assets/Icons/Dollar.svg";
import Question from "../../../assets/Icons/Question.svg";
import news from "../../../assets/Icons/news.svg";
import overview from "../../../assets/Icons/overview.svg";
import reset from "../../../assets/Icons/reset.svg";
import topup from "../../../assets/Icons/topup.svg";
import utilities from "../../../assets/Icons/utilities.svg";

import logo from "../../../assets/logo.svg";

function Sidebar() {
  /******** STATE ************/
  const [collapseShow, setCollapseShow] = useState("hidden");
  /*************************/

  /********  DRY  **********/
  const [menus, setMenues] = useState([
    {
      name: "Dashboard",
      icon: dashboard,
    },
    {
      name: "Trading Overview",
      icon: overview,
    },
    {
      name: "Utilities",
      icon: utilities,
    },
    {
      name: "Withdraw",
      icon: dollar,
    },
    {
      name: "Top-Up & Reset",
      icon: topup,
    },

    {
      name: "Billing",
      icon: Billing,
    },
    {
      name: "News Calendar",
      icon: news,
    },
    {
      name: "Help",
      icon: Question,
    },
  ]);
  /************************/

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-4  backgroundForth">
        <div className="md:flex-col md:items-stretch md:min-h-[100%] md:flex-nowrap px-6 flex flex-wrap items-center justify-between w-full mx-auto backgroundThird rounded-md text-white ">
          {/***********************/}
          {/* Menu Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/***********************/}

          <div className="md:block text-left md:pb-2  mr-0 inline-block whitespace-nowrap text-sm  font-bold p-4 px-0">
            <div className="flex flex-col flex-nowrap items-center gap-1">
              <div className="max-w-[32px] max-h-[35px] mt-3">
                <img src={logo} />
              </div>
              <div className="text-[14px] leading-[19px] text-[#7B879E] font-[500]">
                Friday, Jan. 24
              </div>
              <div className="text-[26px] font-[600] leading-[31px] tracking-[0.1rem] text-[#0AB062] tommorow">
                16:23:06
              </div>
              <div className="text-[#7B879E] font-[400] text-[12px] leading-[19px] ">
                Drawdown Reset: 02:40:00
              </div>
            </div>
          </div>
          {/********/}
          {/* Divider */}
          <hr className=" md:min-w-full  border-[#7B879E] opacity-20" />
          {/***********************/}

          {/***********************/}
          <div
            className={
              "md:flex md:flex-col justify-between md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/********/}
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200 text-white">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <div className="md:block text-left md:pb-2  mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                    Dashboard
                  </div>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/********/}
            {/* Divider */}

            {/********/}

            {/********/}
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none ">
              {menus.map((items, index) => {
                return (
                  <li className="items-center " key={index}>
                    <div
                      className={
                        "text-[16px] font-[600] py-3 leading-[22px] flex gap-2.5 items-center "
                        // +
                        // (window.location.href.indexOf("/dashboard") !== -1
                        //   ? "text-lightBlue-500 hover:text-lightBlue-600"
                        //   : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      // to=""
                    >
                      {/* <i
                    className={
                      "fas fa-tv mr-2 text-sm "
                      +
                      (window.location.href.indexOf("/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>*/}
                      <div className="flex self-center">
                        <img src={items.icon} alt="" srcset="" />
                      </div>
                      <div className="text-[#7B879E]">{items.name}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/********/}
            <div className="flex flec-col justify-center gap-3 my-4 background_green w-full py-4 rounded-[6px]">
              <div className="flex self-center">
                <img src={reset} alt="" />
              </div>
              <div className="text-center">Reset Account</div>
            </div>
            {/***********************/}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
