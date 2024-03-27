import Footer from '../../components/Footer'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import AddToCartScreen from './AddToCartScreen'

const Customerhome = (props) => {
  const addToCart = (product) => {
    {
      localStorage.setItem('product', JSON.stringify(product))
      product && props.history.push('/customer/addToCart', product)
    }
  }

  const [allProducts, setAllProducts] = useState()
  const [topProducts, setTopProducts] = useState()
  const [allCats, setAllCats] = useState()

  useEffect(() => {
    // getTopProducts()
    result()
    getAllCats()
  }, [])

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
        //const allCats = JSON.parse(response.data)

        const temp = response.data
        console.log(temp)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }
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
        setTopProducts(temp)
        console.log(temp)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  const getTopProducts = () => {
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
        <div className="container">
          {/* <div className="col-md-10 mx-auto"> */}
          <div className="col-md-12 mx-auto">
            <div className="tomer">
              <div className="container col-md-10">
                <div className="row border px-3 py-3">
                  <table className="customerHomeTable  ">
                    <tr>
                      <td>
                        <div className="row ">
                          {allProducts &&
                            allProducts.map((p) => {
                              return (
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
                                      <p className="card-title">
                                        {p.productCatalogue.productName}
                                      </p>
                                      <p className="card-title">
                                        Vendor : {p.seller.businessName}
                                      </p>
                                      {p.avgRating > 0 ? (
                                        <p className="card-title">
                                          Rating : {p.avgRating}/5
                                        </p>
                                      ) : (
                                        <p>Rating : N/A </p>
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
                            })}
                        </div>
                      </td>
                    </tr>
                  </table>{' '}
                </div>
              </div>
            </div>
          </div>
          {/* </div>

         

        <div className="container"> */}
          {/* <div className="col-md-12 mx-auto">
            <div className="tomer">
              <div className="container col-md-10">
                <div className="row">
                  {allProducts &&
                    allProducts.map((p) => {
                      return (
                        <div className="col-md-3">
                          <div className="card">
                            <img
                              src={imageUrl + p.productId}
                              className="card-img-top"
                              alt="..."
                              height="150px"
                              width="150px"
                            />
                            <div className="card-body">
                              <p className="card-title">
                                {p.productCatalogue.productName}
                              </p>
                              <p className="card-title">
                                Vendor : {p.seller.businessName}
                              </p>
                              {p.avgRating > 0 ? (
                                <p className="card-title">
                                  Rating : {p.avgRating}/5
                                </p>
                              ) : (
                                <p>Rating : N/A </p>
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
                    })}
                </div>
              </div>
            </div>
          </div>
         */}
          {/* <div>
            <table>

              <tr>                
                <td>
                  <img
                    src={imageUrl + p.productId}
                    className="card-img-top"
                    alt="..."
                    height="150px"
                    width="100px"
                  />
                </td>
              </tr>
            </table>
          </div> */}
        </div>

        <div className="container">
          {/* <div className="col-md-10 mx-auto"> */}

          {/* {response &&
            response.map((o) => {
              ;<div className="col-md-12 mx-auto">
                <div className="tomer">
                  <div className="container col-md-10">
                    <div className="row border px-3 py-3">
                      <table className="customerHomeTable  ">
                        <tr>
                          <td>
                            <h3>{o.catName}</h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="row ">
                              {allProducts &&
                                allProducts
                                  .filter(
                                    (p) => p.category.catName == o.catName
                                  )
                                  .map((p) => {
                                    return (
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
                                            <p className="card-title">
                                              {p.productCatalogue.productName}
                                            </p>
                                            <p className="card-title">
                                              Vendor : {p.seller.businessName}
                                            </p>
                                            {p.avgRating > 0 ? (
                                              <p className="card-title">
                                                Rating : {p.avgRating}/5
                                              </p>
                                            ) : (
                                              <p>Rating : N/A </p>
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
                                  })}
                            </div>
                          </td>
                        </tr>
                      </table>{' '}
                    </div>
                  </div>
                </div>
              </div>
            })} */}
        </div>
      </div>
    </div>
  )
}

export default Customerhome
