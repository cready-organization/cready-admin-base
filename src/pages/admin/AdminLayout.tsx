import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  const activeStyle = {
    textDecoration: "underline",
    color: "red",
  };
  return (
    <>
      <aside className="shadow-md bg-white w-60 h-full relative">
        <div className="px-1 absolute">
          <ul>
            <li>
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
      </aside>
      <main className="absolute left-60 right-0">
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
