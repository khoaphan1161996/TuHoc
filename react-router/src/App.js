import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";
function App() {
  return (
    <Router>
      <div className="app">
        {/* Menu */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">Trang chủ</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">Giới thiệu</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact">Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Nội dung */}
        <Route path="/" exact component={HomePage}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
