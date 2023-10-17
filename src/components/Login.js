import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex">
      <div>
        <img src="/assets/welcome-design.svg" />
      </div>
      <div className="w-1/2 flex flex-col p-250px">
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#4563AA] text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              placeholder="Enter Your E-mail"
              type="email"
              id="email"
              name="email"
              //   onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-[#4563AA] text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              placeholder="Enter a Secure Password"
              type="password"
              id="password"
              name="password"
              //   onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <Link
            className="w-full flex text-center justify-center"
            to="/homepage"
          >
            <button className="text-white rounded-full font-bold text-1xl p-2 px-10 bg-[#4563AA]">
              LOGIN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
