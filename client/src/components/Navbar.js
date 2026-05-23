import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Task Manager</h1>

      <div className="flex gap-6 items-center">
        <Link to="/dashboard" className="hover:text-yellow-300">
          Dashboard
        </Link>

        <Link to="/projects" className="hover:text-yellow-300">
          Projects
        </Link>

        <Link to="/tasks" className="hover:text-yellow-300">
          Tasks
        </Link>

        <button
          onClick={logoutHandler}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;