import Header from "../../components/Header";
import axios from 'axios';
import { useState, useEffect } from "react";
import '../../styles/App.css'

const OrdersListScreen = (props) => {
  
  const initValue = [
    {
      "orderId": 4,
      "buyer": {
          "userId": 1,
          "userName": "customer6",
          "firstName": "customer",
          "lastName": "one",
          "email": "cust1@gmail.com",
          "mobileNo": "+9166666666666",
          "regDate": "2021-03-16",
          "role": "CUSTOMER",
          "bankDetails": {
              "ifscCode": "ICIC05523",
              "accNo": "12345678922"
          },
          "addresses": {
              "pinCode": "393002",
              "line1": "line1",
              "line2": "line2",
              "landMark": "landmark1",
              "city": "Ahmedabad",
              "state": "Gujarat",
              "country": "India"
          }
      },
      "paymentType": "CASH",
      "orderDate": "2021-03-18T22:42:39.728",
      "shipDate": null,
      "transactionStatus": "UNPAID",
      "estmDelvDate": null,
      "paymentDate": null,
      "orderStatus": "RECEIVED",
      "totalAmount": 1200.0,
      "paidAmount": null
  }
  ]
  const [orders, setOrders] = useState(initValue);
  useEffect(() => {
    getAllOrders();
  },[]);
  // sessionStorage.setItem('sellerId',1);
  const url = 'http://localhost:8080/order/orders-list/'+sessionStorage.getItem('sellerId');
  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getAllOrders = () => {
    axios
    .get(url, header)
    .then((response) => {
      if(response.status == 204){
        // setMsg("No products");
      }
      const allOrders = response.data.orderList;
      setOrders(allOrders);
    })
    .catch((error) => {
      alert("Servers down")
      console.error(`Error: ${error}`)
    }
    )
  }
  
  

  const onMoreDetails = (o) => {
    props.history.push("/seller/order-details", o);
  };

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
            {orders && orders.map((o) => {
              return (
                <tr>
                  <td>{o.orderId}</td>
                  <td>{o.orderDate}</td>
                  <td>
                    
                    <div>
                      <span>Buyer Id :{o.buyer.userId}</span><br/>
                      <span>Address :</span><br/>
                      <span>{o.buyer.addresses && o.buyer.addresses.line1},</span><br/>
                      <span>{o.buyer.addresses && o.buyer.addresses.line2},</span><br/>
                      <span>{o.buyer.addresses && o.buyer.addresses.landMark}</span><br/>
                      <span>{o.buyer.addresses && o.buyer.addresses.city},</span>
                      <span>{o.buyer.addresses && o.buyer.addresses.state}</span><br/>
                      {/* <a href=""
                        className="float-end float-bottom"
                        //onClick={onMoreDetails(o)}
                      >
                        More details >>
                      </a> */}
                      
                    </div>
                  </td>
                  <td>{o.orderStatus}</td>
                  <td>
                  <button
                      className="btn btn-outline-secondary order-status-btn"
                      onClick={(e) => {
                        onMoreDetails(o)
                      }}
                    >
                      More details
                    </button>
                  </td>
                  {/* <td>
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
                    
                  </td> */}
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
