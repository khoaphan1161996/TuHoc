import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import routes from './routes'

import "./App.css";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true
  },
  {
    name: "Giới thiệu",
    to: "/about",
    exact: false
  },
  {
    name: "Liên hệ",
    to: "/contact",
    exact: false
  },
  {
    name: "Sản phẩm",
    to: "/products",
    exact: false
  }
]

function App() {
  const showMenus = (menus) => {
    let result = null

    if(menus.length > 0) {
      result = menus.map((menu,index) => {
        return <li className="nav-item" key={index}>
          <NavLink className="link" activeClassName="selected" 
            exact={menu.exact} to={menu.to}>
              {menu.name}
          </NavLink>
        </li>
      })
    }

    return result
  }

  const showRoute = (routes) => {
    let result = null

    if(routes.length > 0) {
      result = routes.map((route,index) => {
        return <Route key={index} path={route.path} 
        exact={route.exact} component={route.component}
        />
      })
    }

    return result
  }

  return (
    <Router>
      <div className="app">
        {/* Header */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {showMenus(menus)}
              </ul>
            </div>
          </div>
        </nav>

        {/* Content */}
        <Switch>
          {showRoute(routes)}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
