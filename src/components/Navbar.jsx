import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-pink-400 lg:border-none">
          <div className="flex items-center cursor-pointer">
            <div className="flex items-center" onClick={() => navigate('/')}>
              <span className="sr-only">Project Manager</span>
              <img className="h-10 w-auto" src={logo} alt="" />
              <p className="text-white font-bold ml-4 text-xl">
                Project Manager
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
