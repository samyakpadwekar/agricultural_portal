import axios from 'axios'
import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import Header from '../../components/Header'
import '../../styles/App.css'

const AddToCartScreen = (props) => {
  const userId = sessionStorage.getItem('userId')
  console.log('userId' + userId)
  const [quantity, setQuantity] = useState()
  const product = JSON.parse(localStorage.getItem('product'))
  console.log('watch this product ' + product)
  console.log('productId ' + product.productId)
  const productId = product.productId

  const imageUrl = 'http://localhost:8080/seller/download/'

  const addToCart = () => {
    // setUserId(1)
    console.log('product id' + product.productId)
    console.log('userId' + userId)
    console.log('product quantity' + quantity)
    const body = {
      userId,
      productId,
      quantity,
    }
    const url = 'http://localhost:8080/user/cart/add'
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    axios
      .post(url, body, header)
      .then((response) => {
        const temp = response.data
        console.log(temp)
        props.history.push('/user/my-cart')
      })
      .catch((error) => console.error(`Error: ${error}`))
    // result()
    props.history.push('/customer/home')
  }

  return (
    <div>
      <Header title="Add To Cart" />
      <img
        src={imageUrl + product.productId + ''}
        className="rounded mx-auto d-block product-img"
        alt="..."></img>

      <div className="container">
        <div className="row col-md-5 mx-auto ">
          <div className="col">
            <label>Product Name</label>
          </div>
          <div className="col">
            <label> {product.productCatalogue.productName}</label>
          </div>
        </div>
        <div className="row col-md-5 mx-auto ">
          <div className="col">
            <label>Price</label>
          </div>
          <div className="col">
            <label> {product.price}</label>
          </div>
        </div>

        <div className="row col-md-5 mx-auto ">
          <div className="col">
            <label>Seller Business Name</label>
          </div>
          <div className="col">
            <label>{product.seller.businessName}</label>
          </div>
        </div>

        <div className="row col-md-5 mx-auto ">
          <div className="col">
            <label>Available Quantity</label>
          </div>
          <div className="col">
            <label>{product.unitsStock}</label>
          </div>
        </div>

        <div className="row col-md-5 mx-auto ">
          <div className="col">
            <label>Enter Quantity</label>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="quantity"
              aria-label="Last name"
              onChange={(e) => {
                setQuantity(e.target.value)
                console.log('q=' + quantity)
              }}
            />
          </div>
        </div>

        <div className="row col-md-5 mx-auto ">
          <div className="col"></div>
          <div className="col">
            <button
              type="button"
              onClick={addToCart}
              className="btn btn-outline-success ml-4 mt-3">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCartScreen
