/* eslint-disable jsx-a11y/anchor-is-valid */
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Navigation = () => {
  return (
    <div className="upper-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="top-nav">
        <div className="container-fluid">
          <Link to="/home">
            <span className="navbar-brand" id="brand" href="">
              AgriShop
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-1 mb-lg-0">
              <li className="nav-item">
                <Link to="/your-address">
                  <span className="nav-link">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/address--v1.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    Delivery Address{" "}
                  </span>
                </Link>
              </li>
              <li className="nav-item" id="search">
                <form
                  className="form-inline float-start mb-1 my-lg-0"
                  id="navBarSearchForm"
                >
                  <div className="input-group">
                    <div className="input-group-prepend nav-item dropdown">
                      <button
                        className="btn btn-light dropdown-toggle nav-btn"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Categories
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <span className="dropdown-item" href="#">
                            Category One
                          </span>
                        </li>
                        <li>
                          <span className="dropdown-item" href="#">
                            Category Two
                          </span>
                        </li>
                        <li>
                          <span className="dropdown-item" href="#">
                            Category Three
                          </span>
                        </li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Search input with dropdown button"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-success nav-btn" type="button">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </li>
              <li className="nav-item">
                <div className="btn-group mb-1 mb-lg-0">
                  <button
                    className="btn btn-light dropdown-toggle nav-btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Language
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <span className="dropdown-item" href="#">
                        Hindi
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item" href="#">
                        Marathi
                      </span>
                    </li>
                    <li>
                      <span className="dropdown-item" href="#">
                        Gujarati
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/signup">
                  <span className="nav-link">
                    <img
                      src="https://img.icons8.com/ios/50/000000/add-user-male.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    Signup
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/your-order">
                  <span className="nav-link">
                    <img
                      src="https://img.icons8.com/carbon-copy/100/000000/purchase-order.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    Your Orders
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/your-cart">
                  <span className="nav-link">
                    <img
                      src="https://img.icons8.com/plasticine/100/000000/shopping-cart.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    Cart
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
