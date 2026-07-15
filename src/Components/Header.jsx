import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 shadow-md">
      <div>
        <img src="src/assets/logo.png" alt="logo" className="w-32 sm:w-48" />
      </div>

      <div className="hidden md:flex font-jakarta text-lg">
        <ul className="flex gap-8">
          <li><a href="#" className="font-bold">Topic</a></li>
          <li><a href="#" className="font-bold">Roadmap</a></li>
          <li><a href="#" className="font-bold">Problem</a></li>
          <li><a href="#" className="font-bold">Cheatsheets</a></li>
          <li><a href="#" className="font-bold">About</a></li>
        </ul>
      </div>

      <div className="hidden md:flex items-center font-jakarta text-lg gap-3">
        <ul className="flex px-2 items-center">
          <li><a href="#" className="font-bold">Login</a></li>
        </ul>
        <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-jakarta text-lg font-bold">
          Get Started
        </a>
      </div>

      {/* Mobile menu button — shows only below md breakpoint */}
      <button className="md:hidden text-3xl">
        ☰
      </button>
    </div>
  );
};

export default Header;