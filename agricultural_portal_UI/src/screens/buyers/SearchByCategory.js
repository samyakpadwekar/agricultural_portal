import Footer from '../../components/Footer'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import AddToCartScreen from './AddToCartScreen'

const SearchByCategory = (props) => {
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

  const category = localStorage.getItem('category')
  const addToCart = (product) => {
    {
      product && props.history.push('/customer/addToCart', product)
    }
  }

  const [allProducts, setAllProducts] = useState()
  useEffect(() => {
    result()
  }, [])

  const resultCategory = (name) => {
    const url = 'http://localhost:8080/customer/search/'
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios
      .get(url, header)
      .then((response) => {
        const temp = response.data
        setAllProducts(temp)
        console.log(temp)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  const result = () => {
    const url = 'http://localhost:8080/customer/product-list'
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
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
        {/* <div className="cart">
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
            </a>
          </div>
        </div> */}

        <div className="container">
          <div className="col-md-12 mx-auto">
            <div className="tomer">
              <div className="container col-md-10">
                <div className="row">
                  {allProducts &&
                    allProducts.map((p) => {
                      return (
                        p.category.catName ===
                          localStorage.getItem('category') && (
                          <div className="col-md-3">
                            <div className="card">
                              <img
                                src={imageUrl + p.productId}
                                className="card-img-top"
                                alt="..."
                                height="150px"
                                width="100px"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  {p.productCatalogue.productName}
                                </h5>
                                <h5 className="card-title">
                                  {p.seller.businessName}
                                </h5>
                                {p.avgRating > 0 ? (
                                  <h5 className="card-title">
                                    Rating : {p.avgRating}/5
                                  </h5>
                                ) : (
                                  <h5>Rating : N/A </h5>
                                )}
                                <button
                                  onClick={(e) => addToCart(p)}
                                  type="button"
                                  className="btn btn-outline-success">
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchByCategory
