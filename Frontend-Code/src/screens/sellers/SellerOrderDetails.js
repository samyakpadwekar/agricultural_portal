import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const SellerOrderDetails = (props) => {
  const onConfirmOrder = () => {
    props.history.push("/seller/your-orders");
  };

  const onDispatchOrder = () => {
    props.history.push("/seller/your-orders");
  };

  const onDeliveredOrder = () => {
    props.history.push("/seller/your-orders");
  };

  const onCancelOrder = () => {
    props.history.push("/seller/your-orders");
  };

  // console.log(props.location.state.productId)
  const [orderDetails, setOrderDetails] = useState();

  let sum = 0;

  useEffect(() => {
    getAllOrders();
  }, []);

  const imageUrl = "http://localhost:8080/seller/download/";

  const url =
    "http://localhost:8080/customer/order-details/" +
    props.location.state.orderId;

  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getAllOrders = () => {
    axios
      .get(url, header)
      .then((response) => {
        const temp = response.data;
        setOrderDetails(temp);
        console.log(temp);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      <Header title="Order Details" />

      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <table className="table table-condensed ableforimage">
              <thead>
                <tr>
                  <th>Product name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Total</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails &&
                  orderDetails.orderlist.map((o) => (
                    <tr total={(sum += o.total)}>
                      <td>{o.product.productCatalogue.productName}</td>
                      <td>{o.quantity}</td>
                      <td>{o.product.price}</td>
                      <td>{o.product.discount}%</td>
                      <td>{o.total}₹</td>
                      <td>
                        <img
                          width={150}
                          height={150}
                          src={imageUrl + o.product.productId}
                        ></img>
                      </td>
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
                      value={sum + "₹"}
                      readOnly="true"
                    />
                  </div>
                </td>
              </tr>
              
            </table>
            <table>
              <tbody>
              <tr>
                <td>
                  <button
                    className="btn btn-outline-secondary order-status-btn"
                    onClick={onConfirmOrder}
                  >
                    Confirm
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-primary order-status-btn"
                    onClick={onDispatchOrder}
                  >
                    Dispatch
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-success order-status-btn"
                    onClick={onDeliveredOrder}
                  >
                    Delivered
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger order-status-btn"
                    onClick={onCancelOrder}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <Link to="/seller/your-orders">
                      <button className="btn btn-outline-success order-status-btn">
                        Back
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerOrderDetails;
