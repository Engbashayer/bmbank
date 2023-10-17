import { useMutation } from "@tanstack/react-query";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import UserContext from "../context/UserContext";
const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate: register_mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/login");
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    register_mutate();
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
              htmlFor="name"
              className="block text-[#4563AA] text-sm font-medium mb-2"
            >
              UserName
            </label>
            <input
              placeholder="Enter Your Usename"
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
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-[#4563AA] text-sm font-medium mb-2"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
              required
            />
          </div>
          <div className="w-full flex justify-center pt-4">
            <button className="text-white rounded-full font-bold text-1xl p-2 px-10 bg-[#4563AA]">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
