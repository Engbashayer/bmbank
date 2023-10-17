import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full flex">
      <div className="w-full flex-col text-center flex items-center justify-center">
        <div className="flex-col gap-10 text-center flex items-center justify-center p-28">
          <div className="text-5xl font-bold text-[#4563AA]">BM BANK</div>
          <div className="text-3xl font-bold text-[#939597]">
            Your Bridge to Financial Prosperity
          </div>
          <Link to="/register">
            <button className="text-white rounded-full font-bold text-2xl p-4 px-12 bg-[#4563AA]">
              REGISTER NOW
            </button>
          </Link>
        </div>

        <img className="md:w-4/5" src="/assets/home.svg" />
      </div>
    </div>
  );
};

export default Home;
