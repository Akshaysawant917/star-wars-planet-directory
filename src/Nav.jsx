import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to={"/"}>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl text-center font-bold">
          Star Wars Planets Directory
        </h1>
      </header>
    </Link>
  );
};

export default NavBar;
