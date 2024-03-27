/* eslint-disable jsx-a11y/anchor-is-valid */
//import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../styles/App.css'

const AdminNavigation = () => {
  const userSignin = useSelector((store) => store.userSignin)
  const { role } = userSignin
  const ROLE = sessionStorage.getItem('userRole')

  console.log(userSignin.role)

  const Signout = (props) => {
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('userRole')
    sessionStorage.removeItem('userDetails')
    document.location.href = '/'
  }

  return (
    <div>
      {(role === 'ADMIN' || ROLE === 'ADMIN') && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <Link to="/admin-page">
              <span className="navbar-brand" id="brand" href="">
                AgriShop
              </span>
            </Link>
            <div className="collapse navbar-collapse" id="admin-nav">
              <ul className="navbar-nav mb-1 mb-lg-0">
                <li className="nav-item px-3">
                  <Link to="/user/edit-profile">
                    <span className="nav-link">
                      <img
                        src="https://img.icons8.com/cotton/64/000000/person-male--v2.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                      />
                      Profile
                    </span>
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link to="/admin/add-admin">
                    <span className="nav-link">
                      <img
                        src="https://img.icons8.com/ios/50/000000/add-user-male.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                      />
                      Add Admin
                    </span>
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <div className="btn-group mb-1 mb-lg-0">
                    <button
                      className="btn btn-light dropdown-toggle nav-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Manage Users
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/admin/seller-list">
                          <span className="dropdown-item" href="#">
                            Sellerlist
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/buyer-list">
                          <span className="dropdown-item" href="#">
                            Buyer List
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item px-3">
                  <div className="btn-group mb-1 mb-lg-0">
                    <button
                      className="btn btn-light dropdown-toggle nav-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Manage Products
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/admin/product-list">
                          <span className="dropdown-item" href="#">
                            Products List
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/category-list">
                          <span className="dropdown-item" href="#">
                            Category List
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item px-3">
                  <div className="btn-group mb-1 mb-lg-0">
                    <button
                      className="btn btn-light dropdown-toggle nav-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      Review Report
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/admin/feedback-list">
                          <span className="dropdown-item" href="#">
                            Feedbacks
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/complaint-list">
                          <span className="dropdown-item" href="#">
                            Complaints
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="admin-signout">
                    <button
                      className="btn btn-danger"
                      type="submit"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={Signout}>
                      Signout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}

export default AdminNavigation
