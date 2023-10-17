import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex-col gap-20 text-center flex items-center justify-center p-28">
      <div className="flex-col gap-10 text-center flex items-center justify-center">
        <div className="text-5xl font-bold text-[#4563AA]">OOPS!</div>
        <div className="text-3xl font-bold text-[#939597]">
          Lost in Transactions! Rest Assured, Your Funds Are Secure!
        </div>
        <Link to="/">
          <button className="text-white rounded-full font-bold text-2xl p-4 px-12 bg-[#4563AA]">
            GO HOME
          </button>
        </Link>
      </div>

      <div className="w-full flex items-center justify-center">
        <img className="md:w-4/5" src="/assets/not-found.svg" />
      </div>
    </div>
  );
};

export default NotFound;
