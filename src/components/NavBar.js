import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-20 bg-[#4563AA] flex items-center px-12">
      <div className="w-full gap-4 flex min-w-max">
        <div>
          <img className="h-8" src="/assets/logo-white.svg" alt="SVG" />
        </div>
        <div className="text-2xl font-bold text-white">BM BANK</div>
      </div>

      <div className="w-full flex justify-end gap-6">
        <NavLink
          to="/"
          className="text-1xl min-w-max font-regular text-white border border-[#4563AA] pt-3px pb-3px"
        >
          HOME
        </NavLink>
        <NavLink
          to="/myProfile"
          className="text-1xl min-w-max font-regular text-white border border-[#4563AA] pt-3px pb-3px"
        >
          MY PROFILE
        </NavLink>
        <NavLink
          to="/myTransactions"
          className="text-1xl min-w-max font-regular text-white border border-[#4563AA] pt-3px pb-3px"
        >
          MY TRANSACTIONS
        </NavLink>
        <NavLink
          to="/users"
          className="text-1xl min-w-max font-regular text-white border border-[#4563AA] pt-3px pb-3px"
        >
          USERS
        </NavLink>
        <div className="text-white font-bold">|</div>
        <Link className="text-1xl min-w-max font-regular text-white border border-[#4563AA] pt-3px pb-3px">
          LOGOUT
        </Link>
        <NavLink
          to="/register"
          className="text-1xl min-w-max font-regular text-white border border-[#4563AA] pt-3px pb-3px"
        >
          REGISTER
        </NavLink>
        <NavLink
          to="/login"
          className="text-1xl min-w-max font-regular text-white border border-[#4563AA] pt-3px pb-3px"
        >
          LOGIN
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
