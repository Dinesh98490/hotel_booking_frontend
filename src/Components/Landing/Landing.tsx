import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = () => {
    if (email === "admin123@gmail.com" && password === "admin@123") {
      navigate("/dashboard/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="flex-1 flex flex-col justify-center items-start p-16 bg-cover bg-center">
        <div className="mb-38">
          <img src={Logo} alt="hotel-logo" className="h-48 w-48" />
          <h1 className="text-5xl font-bold">
            <span className="text-yellow-500">Vibrant </span>
            Hotel provides the best hotel service in town
          </h1>
          <p className="mt-4 text-lg">
            We have 200 rooms in the hotel, divided into three categories:
            Standard Rooms, Premium Rooms, and Deluxe Rooms.
          </p>
          <div className="mt-6">
            <p className="font-bold">Follow Us</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-yellow-500">
                <FaLinkedin size={26} />
              </a>
              <a href="#" className="text-yellow-500">
                <IoLogoInstagram size={26} />
              </a>
              <a href="#" className="text-yellow-500">
                <FaSquareFacebook size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center bg-black p-10">
        <div className="relative w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-2 absolute -top-8">
              <CgProfile className="text-zinc-400 size-20" />
            </div>
          </div>
          <div className="bg-f8f1f1 p-8 rounded-lg shadow-lg dark:bg-gray-800">
            <form className="bg-gray-100 dark:bg-gray-800">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Enter Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium">
                  Enter Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="h-4 w-4 text-yellow-500 border-zinc-600 rounded focus:ring-yellow-500"
                />
                <label htmlFor="remember" className="ml-2 block text-sm">
                  Remember Me
                </label>
              </div>
              <button
                type="button"
                onClick={login}
                className="w-full bg-yellow-500 text-zinc-900 py-2 rounded-md font-semibold hover:bg-yellow-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
