import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 shadow-md">
      <div>
        <img src="src/assets/logo.png" alt="logo" className="w-48" />
      </div>
      <div className="flex font-jakarta text-lg text-bold ">
        <ul className="flex gap-8">
          <li>
            <a href="#">Topic</a>
          </li>
          <li>
            <a href="#">Roadmap</a>
          </li>
          <li>
            <a href="#">Problem</a>
          </li>
          <li>
            <a href="#">Cheatsheets</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div className="flex font-jakarta text-lg gap-3">
        <ul className="flex px-2 items-center">
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-jakarta text-lg">
          <a href="#">Get Started</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
