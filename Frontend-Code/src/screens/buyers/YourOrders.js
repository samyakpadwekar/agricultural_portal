import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiFillPropertySafety } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { orderFetch } from '../../actions/userActions'
import Header from '../../components/Header'

const YourOrders = (props) => {
  // const dispatch = useDispatch()
  // const Orders = useSelector((store) => store.orders)
  // const { loading, response, error } = Orders

  // useEffect(() => {
  //   dispatch(orderFetch(1))
  // }, [])

  const orderDetails = (o) => {
    props.history.push('/user/order-details', o)
  }

  const [allOrders, setAllOrders] = useState()
  useEffect(() => {
    result()
  }, [])

  const dispatch = useDispatch()

  const buyerId = 1
  const url = 'http://localhost:8080/customer/your-order/' + buyerId

  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const result = () => {
    axios
      .get(url, header)
      .then((response) => {
        const orders = response.data
        setAllOrders(orders)
        console.log(orders)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  return (
    <div className="container">
      <Header title="Your Orders" />

      <div className="container">
        <div className="col-md-12 ">
          <table className="table table-condensed bordered title">
            <thead>
              <tr>
                <th>Order Status</th>
                <th>Order Date</th>
                <th>Shipping date</th>
                <th>Transaction Status</th>
                <th>Delivered date</th>
                <th>Total Amount</th>
                <th></th>
              </tr>
            </thead>
            {allOrders &&
              // response.orderList &&
              allOrders.map((o) => {
                return (
                  <tr>
                    <td>{o.orderStatus}</td>
                    <td>{o.orderDate}</td>
                    <td>{o.shipDate}</td>
                    <td>{o.transactionStatus}</td>
                    <td>{o.estmDevlDate}</td>
                    <td>{o.totalAmount}</td>
                    <td>
                      <button
                        className="btn btn-outline-success mt-1 mb-1"
                        onClick={(e) => orderDetails(o)}
                        type="submit">
                        Order Details
                      </button>
                    </td>
                  </tr>
                )
              })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default YourOrders
