import React, { useEffect, useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SideBarData'
import '../styles/CustomerNavbar.css'
import { IconContext } from 'react-icons'
import axios from 'axios'

const BuyerNav = (props) => {
  useEffect(() => {
    getAllCats()
  }, [])

  const role = sessionStorage.getItem('userRole')
  const Signout = () => {
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('userRole')
    sessionStorage.removeItem('userDetails')
    localStorage.removeItem('category')
    localStorage.removeItem('orderId')

    document.location.href = '/'
  }

  const [sidebar, setSidebar] = useState(false)
  const [cats, setCats] = useState()

  const getAllCats = () => {
    const url = 'http://localhost:8080/admin/get-categories'
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    axios
      .get(url, header)
      .then((response) => {
        const allCats = response.data
        console.log(allCats)
        setCats(allCats)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div>
      {role === 'CUSTOMER' && (
        <div className="upper-nav">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-light"
            id="top-nav">
            <div className="container-fluid">
              <IconContext.Provider value={{ color: '#000000' }}>
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
              </IconContext.Provider>
              <div className="collapse navbar-collapse ms-5">
                <ul className="navbar-nav mb-1 mb-lg-0">
                  <li className="nav-item px-3">
                    <Link to="/customer/home">
                      <span className="nav-link">
                        <img
                          src="https://img.icons8.com/ios/72/home--v1.png"
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                          alt=""
                        />
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <div className="btn-group mb-1 mb-lg-0">
                      <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Shop by Categories
                      </button>
                      <ul className="dropdown-menu">
                        {cats &&
                          cats.map((c) => {
                            return (
                              <li>
                                <Link to="/customer/categorywise">
                                  <button
                                    className="btn btn"
                                    onClick={() =>
                                      localStorage.setItem(
                                        'category',
                                        c.catName
                                      )
                                    }
                                    className="dropdown-item"
                                    href="/customer/categorywise">
                                    {c.catName}
                                  </button>
                                </Link>
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item px-3">
                    <Link to="/user/your-account">
                      <span className="nav-link">
                        <img
                          src="https://img.icons8.com/cotton/64/000000/person-male--v2.png"
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                          alt=""
                        />
                        Your Account
                      </span>
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link to="/customer/nearbyseller">
                      <span className="nav-link">
                        <img
                          src="https://img.icons8.com/ios/50/000000/teaser.png"
                          width="30"
                          height="30"
                          className="d-inline-block align-top"
                          alt=""
                        />
                        Near-by Seller
                      </span>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link to="/user/your-orders">
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
                    <Link to="/user/my-cart">
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
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <div className="nav-menu-items mx-auto" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <div className="sidebar-link">
                    <li key={index} className={item.cName} id="sidebar-items">
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  </div>
                )
              })}
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

export default BuyerNav
