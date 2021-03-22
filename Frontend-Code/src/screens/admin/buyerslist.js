// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { getbuyers } from "../../actions/AdminActions";
const Buyerlist = (props) => {

  // const testData = [
  //   { id: 1,fName:"Name 1", lname: "Surname", email: "email1@gmail.com", regDate: "2020-02-01", pinCode: "442401" },
  //   { id: 2,fName:"Name 2", lname: "Surname", email: "email2@gmail.com", regDate: "2020-02-05", pinCode: "442404" },
  //   { id: 3,fName:"Name 3", lname: "Surname", email: "email3@gmail.com", regDate: "2020-02-10", pinCode: "442408" },
  //   { id: 4,fName:"Name 4", lname: "Surname", email: "email4@gmail.com", regDate: "2020-02-15", pinCode: "442416" },
  //   { id: 5,fName:"Name 5", lname: "Surname", email: "email5@gmail.com", regDate: "2020-02-20", pinCode: "442424" },
  //   { id: 6,fName:"Name 6", lname: "Surname", email: "email6@gmail.com", regDate: "2020-02-25", pinCode: "442432" },
  // ];

  const dispatch =useDispatch()
  const buyerlist = useSelector((store)=>store.buyerlist)
  const { error, response, loading } = buyerlist

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getbuyers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <>
    <Header title="Manage Buyer" />
    <div className="container buyerlist-wrapper">
      <div class="col-md-8 mx-auto pt-1">
        <form
          className="form-inline float-start mb-1 my-lg-0"
          id="admin-manage-buyer"
        >
          <div className="input-group">
            <div className="input-group-prepend nav-item dropdown">
              <button
                className="btn btn-light dropdown-toggle nav-btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu">
                <li>
                  <span className="dropdown-item" href="#">
                    BuyerId
                  </span>
                </li>
                <li>
                  <span className="dropdown-item" href="#">
                    Name
                  </span>
                </li>
                <li>
                  <span className="dropdown-item" href="#">
                    Pincode
                  </span>
                </li>
              </ul>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Search input with dropdown button"
            />
            <div className="input-group-append">
              <button className="btn btn-success " type="button">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="table-responsive pt-5">
      <table className="table table-striped table-responsive table-bordered ">
        <thead>
          <tr >
            <th className="col-1" scope="col">Id</th>
            <th className="col-1" scope="col">FName</th>
            <th className="col-1" scope="col">LName</th>
            <th className="col-1" scope="col">Email</th>
            <th className="col-1" scope="col">Reg.Date</th>
            <th className="col-1" scope="col">PinCode</th>
            <th className="col-1" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {response &&
            response.customerList &&
            response.customerList.length > 0 &&
            response.customerList.map((buyer) => {
            return (
              <>
                <tr>
                  <th className="col-1" scope="row">{buyer.userId}</th>
                  <td className="col-1">{buyer.firstName}</td>
                  <td className="col-1">{buyer.lastName}</td>
                  <td className="col-1">{buyer.email}</td>
                  <td className="col-1">{buyer.regDate}</td>
                  <td className="col-1">{buyer.addresses.pinCode}</td>
                  <td className="col-1">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      data-mdb-ripple-color="dark"
                      style={buttonStyle}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      </div>
      {/* </div> */}
    </div>
    </>
  )
}

const buttonStyle = {
  margin: "10px",
}

export default Buyerlist;
