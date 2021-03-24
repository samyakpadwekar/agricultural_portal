import Header from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";

const PaymentsScreen = (props) => {
  const initValue = [
    {
      orderId: 4,
      buyer: {
        userId: 1,
        userName: "customer6",
        firstName: "customer",
        lastName: "one",
        email: "cust1@gmail.com",
        mobileNo: "+9166666666666",
        regDate: "2021-03-16",
        role: "CUSTOMER",
        bankDetails: {
          ifscCode: "ICIC05523",
          accNo: "12345678922",
        },
        addresses: {
          pinCode: "393002",
          line1: "line1",
          line2: "line2",
          landMark: "landmark1",
          city: "Ahmedabad",
          state: "Gujarat",
          country: "India",
        },
      },
      paymentType: "CASH",
      orderDate: "2021-03-18T22:42:39.728",
      shipDate: null,
      transactionStatus: "UNPAID",
      estmDelvDate: null,
      paymentDate: null,
      orderStatus: "RECEIVED",
      totalAmount: 1200.0,
      paidAmount: null,
    },
  ];
  const [orders, setOrders] = useState(initValue);
  useEffect(() => {
    getAllOrders();
  }, []);
  // sessionStorage.setItem('sellerId',1);
  const url =
    "http://localhost:8080/order/orders-list/" +
    sessionStorage.getItem("sellerId");
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const getAllOrders = () => {
    axios
      .get(url, header)
      .then((response) => {
        if (response.status == 204) {
          // setMsg("No products");
        }
        const allOrders = response.data.orderList;
        setOrders(allOrders);
      })
      .catch((error) => {
        alert("Servers down");
        console.error(`Error: ${error}`);
      });
  };

  let total = 0.0;
  return (
    <div className="col-md-9 mx-auto">
      <div style={{margin:'40px'}}>
        <Header title="Payments Summary" />
      </div>
      <div>
        {/* <form className="d-flex col-md-4 mx-auto">
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
      <div className="col-md-10 mx-auto">
        <table
          className="table table-bordered table-hover"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Payment Date</th>
              <th>OrderId</th>
              <th>Payer</th>
              <th>Payment Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((o) => { 
                if(o.transactionStatus === 'PAID')
                {
                  return (
                    <tr ontotal={total += o.paidAmount}>
                      <td>{o.paymentDate}</td>
                      <td>{o.orderId}</td>
                      <td>
                        {o.buyer.firstName} {o.buyer.lastName}
                      </td>
                      <td>{o.paymentType}</td>
                      <td>{o.paidAmount} &#8377;</td>
                    </tr>
                  );
                }
               
              })}
              <tr>
                <td colSpan='3'></td>
                <th>Total </th>
                <th>{total} &#8377;</th>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsScreen;
