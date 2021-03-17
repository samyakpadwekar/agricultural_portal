//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/App.css";

const SellerNavigation = () => {
  return (
    <div style={{position:"sticky"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-1 mb-lg-0 mx-auto">
              <li className="nav-item mx-3 ">
                <Link to="/seller/home">
                  <span className="nav-link">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/seller/product-catalogue">
                  <span className="nav-link">
                    Catalogue
                  </span>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/seller/inventory">
                  <span className="nav-link">
                    Inventory
                  </span>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/seller/orders">
                  <span className="nav-link">
                    Orders
                  </span>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/seller/performance">
                  <span className="nav-link">
                    Performance
                  </span>
                </Link>
              </li>
              <li className="nav-item mx-3">
              <div className="input-group-prepend nav-item dropdown ">
                <button
                  className="btn btn-light dropdown-toggle nav-link"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Reports
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/seller/inventory-report">
                      <span className="dropdown-item" href="#">
                        Inventory Report
                      </span>
                    </Link>
                  </li>
                  <li>
                  <Link to="/seller/performance-report">
                      <span className="dropdown-item" href="#">
                        Performance Report
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              </li>
        
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SellerNavigation;
