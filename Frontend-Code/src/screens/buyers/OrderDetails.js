import Header from '../../components/Header'

const OrderDetails = () => {
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
                <tr>
                  <td>name</td>
                  <td>quantity</td>
                  <td>price</td>
                  <td>discount</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>quantity</td>
                  <td>price</td>
                  <td>discount</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>quantity</td>
                  <td>price</td>
                  <td>discount</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>quantity</td>
                  <td>price</td>
                  <td>discount</td>
                  <td>total</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>quantity</td>
                  <td>price</td>
                  <td>discount</td>
                  <td>total</td>
                </tr>
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
                      value="5000"
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
