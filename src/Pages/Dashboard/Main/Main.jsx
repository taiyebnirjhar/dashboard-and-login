import { default as React, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import Sidebar from "../Sidebar/Sidebar";

function Main() {
  /**********************/

  /**********************/
  useEffect(() => {
    // document.title = "";
  }, []);
  /**********************/
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 ">
        <AdminNavbar />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Main;
