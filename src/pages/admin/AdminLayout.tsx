import React from "react";
import { NavLink } from "react-router-dom";

function AdminLayout() {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };
  return (
    <main>
      <div className="w-60 h-full shadow-md bg-white px-1 absolute">
        <ul className="relative">
          <li className="relative">
            <NavLink
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              to={"/admin/dashboard"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default AdminLayout;
