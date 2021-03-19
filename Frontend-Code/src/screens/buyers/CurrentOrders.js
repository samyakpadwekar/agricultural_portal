import Header from '../../components/Header'

const CurrentOrders = () => {
  const orders = [
    {
      id: '1',
      estm_delv_date: '2021-01-12',
      order_date: '2021-01-01',
      order_status: 'DISPATCHED',
      paid_amount: '5000',
      payment_date: '2021-01-01',
      payment_type: 'Cash On Delivery',
      ship_date: '2021-01-02',
      ship_date: '2021-01-03',
      total_amount: '5000',
      transaction_status: 'PAID',
    },
    {
      id: '2',
      estm_delv_date: '2021-01-12',
      order_date: '2021-01-01',
      order_status: 'OUT FOR DELIVERY',
      paid_amount: '5000',
      payment_date: '2021-01-01',
      payment_type: 'Cash On Delivery',
      ship_date: '2021-01-02',
      ship_date: '2021-01-03',
      total_amount: '5000',
      transaction_status: 'PAID',
    },
    {
      id: '3',
      estm_delv_date: '2021-01-12',
      order_date: '2021-01-01',
      order_status: 'CONFIRM',
      paid_amount: '5000',
      payment_date: '2021-01-01',
      payment_type: 'Cash On Delivery',
      ship_date: '2021-01-02',
      ship_date: '2021-01-03',
      total_amount: '5000',
      transaction_status: 'PAID',
    },

    {
      id: '4',
      estm_delv_date: '2021-01-12',
      order_date: '2021-01-01',
      order_status: 'DISPATCHED',
      paid_amount: '5000',
      payment_date: '2021-01-01',
      payment_type: 'Cash On Delivery',
      ship_date: '2021-01-02',
      ship_date: '2021-01-03',
      total_amount: '5000',
      transaction_status: 'PAID',
    },
  ]

  return (
    <div>
      <Header title="Your Orders" />

      <table>
        <tr>
          <td style={{ width: 1000 }}>
            <a className="padding" href="/user/your-orders">
              Order History
            </a>
            <a className="padding" href="/user/current-orders">
              Current Orders
            </a>
          </td>
          <td style={{ width: 1600 }}>
            {' '}
            <form className="d-flex col-md-6">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </td>
        </tr>
      </table>

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
            {orders.map((p) => {
              return (
                <tr>
                  <td>{p.order_status}</td>
                  <td>{p.order_date}</td>
                  <td>{p.ship_date}</td>
                  <td>{p.transaction_status}</td>
                  <td>{p.payment_date}</td>

                  <td>{p.total_amount}</td>
                  <th>
                    <button className="btn btn-outline-success" type="submit">
                      Order Details
                    </button>
                  </th>
                </tr>
                // <div className="block">
                //   <div className="row">
                //     <div className="col-md-6">Order Status: </div>{' '}
                //     <div className="col-md-6">Order Date:{p.order_date}</div>
                //   </div>
                //   <div className="row">
                //     <div className="col-md-6">Payment Date:{p.payment_date}</div>{' '}
                //     <div className="col-md-6">Payment Type: {p.payment_type}</div>
                //   </div>

                //   <div className="row">
                //     <div className="col-md-6">Paid amount: {p.paid_amount}</div>
                //     <div className="col-md-6">
                //       Shipping date: {p.ship_date}
                //     </div>{' '}
                //   </div>

                //   <div className="row">
                //     <div className="col-md-6">
                //       Transaction Status: {p.transaction_status}
                //     </div>
                //     <div className="col-md-6">Total Amount: {p.total_amount}</div>
                //   </div>
                //</div>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default CurrentOrders
