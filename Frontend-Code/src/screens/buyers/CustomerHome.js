import Footer from '../../components/Footer'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Customerhome = (props) => {
  // const onProducts = () => {
  //   props.history.push('/custprodlist')
  // }
  // const Signout = () => {
  //   sessionStorage.clear()
  //   props.history.push('/home')
  // }
  // const user = 'Pankaj'
  // const [anchorEl, setAnchorEl] = React.useState(null)
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  const orderDetails = (o) => {
    props.history.push('/user/order-details', o)
  }

  const [allProducts, setAllProducts] = useState()
  useEffect(() => {
    result()
  }, [])

  const url = 'http://localhost:8080/customer/product-list'
  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const result = () => {
    axios
      .get(url, header)
      .then((response) => {
        const temp = response.data
        setAllProducts(temp)
        console.log(temp)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  const imageUrl = 'http://localhost:8080/seller/download/'

  return (
    <div>
      <div className="custhome">
        <div className="cart">
          <div className="YUhWwv">
            <a className="_3SkBxJ" href="/cartpage">
              <svg
                className="V3C5bO"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  className="_1bS9ic"
                  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                  fill="#fff"></path>
              </svg>
              {/* // <span>Cart</span> */}
            </a>
          </div>
        </div>

        <div>
          {/* <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}>
            {user.firstName}
          </Button> */}
          {/* <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem>
              <a style={{ textDecoration: 'none' }} href="/userprofile">
                My Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a style={{ textDecoration: 'none' }} href="/home">
                sign out
              </a>
            </MenuItem>
          </Menu> */}
        </div>

        {/* <div>
          <button onClick={onProducts} type="button" className="btn btn-info">
            Products
          </button>
        </div> */}

        <div className="tomer">
          <div className="container">
            <div className="row">
              {allProducts &&
                allProducts.map((p) => {
                  return (
                    <div className="col-sm">
                      <div className="card">
                        <img
                          src={imageUrl + p.productId}
                          className="card-img-top"
                          alt="..."
                          height="300px"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            {p.productCatalogue.productName}
                          </h5>
                          <h5 className="card-title">
                            {p.seller.businessName}
                          </h5>
                          {p.avgRating > 0 ? (
                            <h5 className="card-title">{p.avgRating}/5</h5>
                          ) : (
                            <h5> No ratings available </h5>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}

              {/* <div className="col-sm">
                <div className="card">
                  <img
                    src={imageUrl + '4'}
                    className="card-img-top"
                    alt="..."
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Title2</h5>
                    <h5 className="card-title">subtitle</h5>
                    <h5 className="card-title">rating : 2/5</h5>
                  </div>
                </div>
              </div> */}

              {/* 
              <div className="col-sm">
                <div className="card">
                  <img
                    src={imageUrl + '20'}
                    className="card-img-top"
                    alt="..."
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Title3</h5>
                    <h5 className="card-title">subtitle</h5>
                    <h5 className="card-title">rating : 4/5</h5>
                  </div>
                </div>
              </div>
             

              <div className="col-sm">
                <div className="card">
                  <img
                    src={imageUrl + '5'}
                    className="card-img-top"
                    alt="..."
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Title4</h5>
                    <h5 className="card-title">subtitle</h5>
                    <h5 className="card-title">rating : 4/5</h5>
                  </div>
                </div>
              </div>
              
              <div className="col-sm">
                <div className="card">
                  <img
                    src={imageUrl + '4'}
                    className="card-img-top"
                    alt="..."
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Title5</h5>
                    <h5 className="card-title">subtitle</h5>
                    <h5 className="card-title">rating : 3.5/5</h5>
                  </div>
                </div>
              </div>
             
              <div className="col-sm">
                <div className="card">
                  <img
                    src={imageUrl + '1'}
                    className="card-img-top"
                    alt="..."
                    height="300px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Title6</h5>
                    <h5 className="card-title">subtitle</h5>
                    <h5 className="card-title">rating : 4/5</h5>
                  </div>
                </div>
              </div>
            */}
            </div>
            {/* <div>
              <Footer />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customerhome
