import * as React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/auth/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/auth/reset-password"}>Reset password</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}

export default Layout;
