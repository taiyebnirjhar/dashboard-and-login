import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import "./Login.css";

function LoginPage() {
  /****************************/
  useEffect(() => {
    document.title = "Funded Trading Plus: Login";
  }, []);
  /*****************************/

  return (
    <div className="h-screen lg:flex flex-wrap">
      {/*************************************/}
      <div className="backgroundPrimary lg:w-6/12 px-4 md:px-0 flex items-center  ">
        <div className="mx-auto max-w-xl">
          {/* logo && title */}
          <div className="flex flex-col justify-center items-center gap-4 pb-4 select-none">
            <div>
              <img
                className="max-w-[51px] max-h-[55px]"
                src={logo}
                alt="logo"
              />
            </div>
            <div>
              <p className="text-white font-[600] leading-[24.59px] text-[18px]">
                Funded Trading Plus
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 items-center ">
            <hr className="border-[#434A5A]  opacity-30" />
            <p className="text-center text-slate-400 opacity-30 text-[14px] font-semibold leading-[19px]  px-4">
              Sign In With Email
            </p>
            <hr className="border-[#434A5A] opacity-30" />
          </div>
          <div className="pt-4">
            <form>
              {/*******************/}
              {/* email */}
              <div class="relative  my-6 select-none">
                <input
                  type="email"
                  id="floating_outlined"
                  class="block px-2.5 py-[20px] w-full text-[16px] font-[400px] leading-[21.86px] text-white bg-transparent focus:bg-[#070b13] border-[0.5px] border-gray-800 rounded focus:border-[#0AB062] focus:rounded-lg  appearance-none   focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-[16px] text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-4 peer-focus:px-4 peer-focus:text-[#7B879E] peer-focus:bg-[#10111a] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[50%] peer-focus:top-1 bg-[#10111a] peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              {/*******************/}

              {/*******************/}
              {/* password */}
              <div class="relative border-[0.5px] border-gray-800 rounded focus:border-[#0AB062] focus:rounded-lg my-6 select-none">
                <input
                  type="password"
                  id="floating_outlined"
                  class="block px-2.5 py-[20px] w-full text-[16px] font-[400px] leading-[21.86px] text-white bg-transparent focus:bg-[#070b13] border-[0.5px] border-gray-800 rounded focus:border-[#0AB062] focus:rounded-lg  appearance-none   focus:outline-none focus:ring-0  peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  class="absolute text-[16px] text-white dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-4 peer-focus:px-4 peer-focus:text-[#7B879E] peer-focus:bg-[#10111a] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[50%] peer-focus:top-1 bg-[#10111a] peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Password
                </label>
              </div>
              {/*******************/}

              {/*******************/}
              {/* Button */}
              <div className="w-full text-white font-semibold bg-[#0AB062] px-2.5 py-[20px] text-center rounded my-4 select-none  duration-300 hover:rounded-lg">
                LOGIN
              </div>
              {/*******************/}
            </form>
          </div>
          <div className="text-center text-slate-400 select-none py-6 opacity-80 text-[14px] font-[400] leading-[19px]">
            © Copyright 2023 Funded Trading Plus
          </div>
        </div>
      </div>
      <div className=" lg:w-6/12 flex items-center  backgroundSecondary">
        <div class="">
          <div class="text-white px-4 py-6 md:p-12 md:mx-6">
            <h4 class="text-xl font-semibold mb-6">
              We are more than just a company
            </h4>
            <p class="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/*************************************/}
    </div>
  );
}

export default LoginPage;
