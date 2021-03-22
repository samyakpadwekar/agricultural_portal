import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'

const OrderDetails = (props) => {
  // console.log(props.location.state.productId)
  const [orderDetails, setOrderDetails] = useState()

  let sum = 0

  useEffect(() => {
    getAllOrders()
  }, [])

  const url =
    'http://localhost:8080/customer/order-details/' +
    props.location.state.orderId

  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const getAllOrders = () => {
    axios
      .get(url, header)
      .then((response) => {
        const temp = response.data
        setOrderDetails(temp)
        console.log(temp)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  return (
    <div>
      <Header title="Order Details" />

      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <table className="table table-striped title">
              <thead>
                <tr>
                  <th>Product name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails &&
                  orderDetails.orderlist.map((o) => (
                    <tr total={(sum += o.total)}>
                      <td>{o.product.productCatalogue.productName}</td>
                      <td>{o.quantity}</td>
                      <td>{o.product.price}</td>
                      <td>{o.product.discount}</td>
                      <td>{o.total}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <table className="Grandtotal">
              <tr>
                <td className="float-end">
                  <div className="col-md-12 float-end">
                    <b>Grand Total : </b>
                    <input
                      className="boldCenter"
                      btn-outline-warning
                      value={sum}
                      readOnly="true"
                    />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
