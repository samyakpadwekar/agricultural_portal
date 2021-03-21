import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SideBarData'
import '../styles/CustomerNavbar.css'
import { IconContext } from 'react-icons'

const BuyerNav =() => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className="upper-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="top-nav">
        <div className="container-fluid">
        <IconContext.Provider value={{ color: '#000000' }}>
        <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
        </IconContext.Provider>
          <div className="collapse navbar-collapse ms-5" >
            <ul className="navbar-nav mb-1 mb-lg-0">
            <li className="nav-item">
                <div className="btn-group mb-1 mb-lg-0">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop by Categories
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
             
              <li className="nav-item">
                <Link to="/near-by-seller">
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
              </li>
              <li className="nav-item">
                <Link to="/seller-signup">
                  <span className="nav-link">
                    <img
                     src="https://img.icons8.com/wired/64/000000/sell.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt=""
                    />
                    Sell with AgriShop
                  </span>
                </Link>
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
                <div  className="sidebar-link">
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
  )
}

export default  BuyerNav