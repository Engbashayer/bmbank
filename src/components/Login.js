import { login } from "../api/auth";
import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate: login_mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/homepage");
    },
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    login_mutate();
  };

  return (
    <div className="w-full flex">
      <div className="w-1/2 h-screen bg-[#A8B6D4]">
        <img src="/assets/welcome-design.svg" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <form className="w-1/2 flex flex-col" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#4563AA] text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              placeholder="Enter Your Username"
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
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
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full flex justify-center pt-4">
            <button
              type="submit"
              className="text-white w-[150px] text-center rounded-full font-bold text-1xl p-2 px-10 bg-[#4563AA]"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
