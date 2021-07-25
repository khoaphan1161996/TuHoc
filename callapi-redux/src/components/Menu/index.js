import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản lí sản phẩm",
    to: "/products",
    exact: false,
  },
];

function Menu(props) {
  const showMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <li className="nav-item" key={index}>
            <NavLink
              className="link nav-link"
              activeClassName="active"
              exact={menu.exact}
              to={menu.to}
            >
              {menu.name}
            </NavLink>
          </li>
        );
      });
    }
    return result;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CALL API
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{showMenus(menus)}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
