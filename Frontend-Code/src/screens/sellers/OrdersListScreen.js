import Header from "../../components/Header";
import '../../styles/App.css'

const OrdersListScreen = (props) => {
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

  const onMoreDetails = () => {
    props.history.push("/seller/more-details");
  };

  const orderList = [
    {
      orderId: 1,
      orderDate: "19-03-2021",
      orderDetails: "Order details Order details Order details Order details ",
      status: "RECEIVED",
      buyerId:3,
      address:"Pune, MH"
    },
    {
      orderId: 1,
      orderDate: "19-03-2021",
      orderDetails: "Order details ",
      status: "RECEIVED",
      buyerId:2,
    },
  ];
  return (
    <div className="mx-auto">
      <div>
        <Header title="Your Orders" />
      </div>
      <div className="col-md-10 mx-auto" >
        <div className="col-md-10" style={{margin:'20px'}}>  
          {/* <form className="d-flex col-md-8 mx-auto">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
          </form> */}
        </div>
        <table
          className="table table-bordered table-responsive"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Orders Id</th>
              <th>Order Date</th>
              <th>Order details</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((o) => {
              return (
                <tr>
                  <td>{o.orderId}</td>
                  <td>{o.orderDate}</td>
                  <td>
                    {o.orderDetails}
                    <div>
                      <span>Buyer Id :{o.buyerId}</span><br/>
                      <span>Buyer Address :{o.address}</span><br/>
                      <a href=""
                        className="float-end float-bottom"
                        onClick={onMoreDetails}
                      >
                        More details >>
                      </a>
                    </div>
                  </td>
                  <td>{o.status}</td>
                  <td>
                    <button
                      className="btn btn-outline-secondary order-status-btn"
                      onClick={onConfirmOrder}
                    >
                      Confirm
                    </button>
                    <br/>
                    <button
                      className="btn btn-outline-primary order-status-btn"
                      onClick={onDispatchOrder}
                    >
                      Dispatch
                    </button>
                    <br/>
                    <button
                      className="btn btn-outline-success order-status-btn"
                      onClick={onDeliveredOrder}
                    >
                      Delivered
                    </button>
                    <br/>
                    <button
                      className="btn btn-outline-danger order-status-btn"
                      onClick={onCancelOrder}
                    >
                      Cancel
                    </button>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersListScreen;
