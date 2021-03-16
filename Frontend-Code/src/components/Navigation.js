//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/home">
            <a className="navbar-brand" id="brand">
              AgriShop
            </a>
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
                  <a className="nav-link">
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/address--v1.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    Delivery Address{" "}
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <form
                  className="form-inline float-start mb-1 my-lg-0"
                  id="navBarSearchForm"
                >
                  <div className="input-group">
                    <div className="input-group-prepend nav-item dropdown">
                      <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Categories
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Category One
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Category Two
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Category Three
                          </a>
                        </li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Search input with dropdown button"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-success" type="button">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </li>
              <li className="nav-item">
                <div class="btn-group mb-1 mb-lg-0">
                  <button
                    class="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Language
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Hindi
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Marathi
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gujarati
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/customer-service">
                  <a className="nav-link">
                    <img
                      src="https://img.icons8.com/cotton/64/000000/customer-support.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    Customer support
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/your-order">
                  <a className="nav-link">
                    <img
                      src="https://img.icons8.com/carbon-copy/100/000000/purchase-order.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    Your Orders
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/your-cart">
                  <a className="nav-link">
                    <img
                      src="https://img.icons8.com/plasticine/100/000000/shopping-cart.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    Cart
                  </a>
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
