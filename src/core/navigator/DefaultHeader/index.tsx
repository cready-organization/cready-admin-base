import { NavLink, useLocation } from "react-router-dom";

import _nav from "../_nav";

export default function DefaultHeader() {
  const { pathname } = useLocation();

  const renderNavLink = () => {
    return _nav.map((nav) => {
      return (
        <NavLink
          key={nav.key}
          to={nav.to}
          className={`nav-item ${pathname === nav.to && "active"} ${
            pathname === "/" || nav.to === "/dashboard" ? "active" : ""
          }`}
        >
          {nav.name}
        </NavLink>
      );
    });
  };

  return <div>{renderNavLink()}</div>;
}
