import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SideBarData'
import '../styles/CustomerNavbar.css'
import { IconContext } from 'react-icons'

function CustomerNavbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: '#000000' }}>
        <div className="navbar">
          <table className="table table-fit">
            <tr>
              <td className>
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-light dropdown-toggle nav-item dropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
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
              </td>
              <td>Add Item</td>
              <td>Add Item</td>
              <td>Add Item</td>
              <td>Add Item</td>
            </tr>
          </table>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default CustomerNavbar
