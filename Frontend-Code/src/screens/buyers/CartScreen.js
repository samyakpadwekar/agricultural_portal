import '../../styles/App.css'
const CartScreen = (props) => {
  const onUpdateCart = () => {
    props.history.push('/user/my-cart')
  }
  const testData = [{}]
  return (
    <>
      <div className="container">
        <div className="cart-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>Product</th>
                      <th>Price(INR)</th>
                      <th>Quantity</th>
                      <th>Discount</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {testData.map((cartItem) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <div className="img">
                                <a href="#">
                                  <img
                                    style={{ width: 100, height: 100 }}
                                    src="/images/product-1.jpg"
                                    alt="Image"
                                  />
                                </a>
                                <p>A-I Blower type Pulvalizer </p>
                              </div>
                            </td>
                            <td>99/-</td>
                            <td>
                              <div className="row justify-content-center">
                                <button
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
                                  defaultValue={1}
                                />
                                <button
                                  type="button"
                                  className="btn-plus col-md-2">
                                  <img
                                    src="/images/plus.svg"
                                    className="bi bi-plus"
                                  />
                                </button>
                              </div>
                            </td>
                            <td>10</td>
                            <td>$99</td>
                            <td>
                              <button
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
                          Sub Total<span>$99</span>
                        </p>
                        <p>
                          Shipping Cost<span>$1</span>
                        </p>
                        <h2>
                          Grand Total<span>$100</span>
                        </h2>
                      </div>
                      <div className="cart-btn">
                        <button className="btn btn-outline-warning">
                          Update Cart
                        </button>
                        <button className="btn btn-outline-success">
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
