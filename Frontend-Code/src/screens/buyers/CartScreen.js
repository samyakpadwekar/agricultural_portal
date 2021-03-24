import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  checkoutCart,
  removeCartItem,
  addCartItems,
  deleteCartItems,
  getCartItems,
} from '../../actions/userActions'
import store from '../../store'
import '../../styles/App.css'
const CartScreen = (props) => {
  const [subTotal, setSubTotal] = useState(0)
  const userId = sessionStorage.getItem('userId')
  const dispatch = useDispatch()
  // const cartItemList = useSelector((store) => store.userCartItemsList)
  const cartItemList = useSelector((store) => store.userCartItemsList)
  const { error, response, loading } = cartItemList

  useEffect(() => {
    dispatch(getCartItems(userId))
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onDeleteItem = (cartId) => {
    dispatch(deleteCartItems(cartId))
    document.location.href = '/user/my-cart'
  }

  const onAddItem = (cartId, productId) => {
    dispatch(addCartItems(cartId, 1, productId, userId))
    document.location.href = '/user/my-cart'
  }

  const onRemoveItem = (cartId, quantity, productId) => {
    console.log(`product Id : ${productId}`)
    dispatch(removeCartItem(cartId, `${quantity - 1}`, productId, userId))
    document.location.href = '/user/my-cart'
  }

  const onCheckout = (userId) => {
    dispatch(checkoutCart(userId))
    document.location.href = '/customer/home'
  }

  const imageUrl = 'http://localhost:8080/seller/download/'
  return (
    <>
      <div className="container">
        <div className="cart-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <table
                  onLoad={() => {
                    setSubTotal(response.totalCost)
                  }}
                  className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>Product</th>
                      <th>Price(INR)</th>
                      <th>Quantity</th>
                      <th>Discount</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {response &&
                      response.cartItems &&
                      response.cartItems.length > 0 &&
                      response.cartItems.map((item) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <div className="img">
                                  <a href="#">
                                    <img
                                      style={{ width: 100, height: 100 }}
                                      src={imageUrl + item.product.productId}
                                      alt="Image"
                                      className="prod-image"
                                    />
                                  </a>
                                  <p>
                                    {item.product.productCatalogue.productName}
                                  </p>
                                </div>
                              </td>
                              <td>{item.product.price}</td>
                              <td>
                                <div className="row justify-content-center">
                                  <button
                                    onClick={() => {
                                      onRemoveItem(
                                        item.id,
                                        item.quantity,
                                        item.product.productId
                                      )
                                    }}
                                    type="button"
                                    className="btn-minus col-md-2">
                                    <img
                                      src="/images/dash.svg"
                                      className="bi bi-plus"
                                    />
                                  </button>
                                  <input
                                    className="col-md-4"
                                    type="text"
                                    defaultValue={item.quantity}
                                  />
                                  <button
                                    onClick={() => {
                                      onAddItem(item.id, item.product.productId)
                                    }}
                                    type="button"
                                    className="btn-plus col-md-2">
                                    <img
                                      src="/images/plus.svg"
                                      className="bi bi-plus"
                                    />
                                  </button>
                                </div>
                              </td>
                              <td>{item.product.discount}</td>

                              <td>
                                <button
                                  onClick={() => {
                                    onDeleteItem(item.id)
                                  }}
                                  className="btn-trash btn-light"
                                  type="button">
                                  <img
                                    src="/images/trash.svg"
                                    className="bi bi-trash"
                                  />
                                </button>
                              </td>
                            </tr>
                          </>
                        )
                      })}
                  </tbody>
                </table>
              </div>
              <div className="col-lg-4">
                <div className="cart-page-inner">
                  <div className="col-md-12">
                    <div className="cart-summary">
                      <div className="cart-content">
                        <h1>Cart Summary</h1>
                        <p>
                          Sub Total<span>{subTotal}</span>
                        </p>
                        <p>
                          Shipping Cost<span>0.0 INR</span>
                        </p>
                        <h2>
                          Grand Total<span>{subTotal}</span>
                        </h2>
                      </div>
                      <div className="cart-btn">
                        <button
                          onClick={() => {
                            document.location.href = '/user/wishlist'
                          }}
                          className="btn btn-outline-warning">
                          Wishlist
                        </button>
                        <button
                          onClick={onCheckout}
                          className="btn btn-outline-success">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartScreen
