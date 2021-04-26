// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from 'react'
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { getbuyers } from "../../actions/AdminActions";
const Buyerlist = (props) => {
  const dispatch =useDispatch()
  const buyerlist = useSelector((store)=>store.buyerlist)
  const { error, response, loading } = buyerlist
  const[q,setQ]= useState("") 
  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getbuyers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <>
    <Header title="Manage Buyer" />
    <div className="container buyerlist-wrapper">
    <div class="col-md-9 mx-auto">
          <form
            className="col-md-8 mx-auto"
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                aria-label="Search input with dropdown button"
                value={q} onChange={(e) => setQ(e.target.value)}
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
            response.customerList.filter((buyer) => 
            buyer.firstName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            buyer.lastName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            buyer.addresses.pinCode.toLowerCase().indexOf(q.toLowerCase()) > -1)
            .map((buyer) => {
            return (
              <>
                <tr>
                  <th className="col-1" scope="row">{buyer.userId}</th>
                  <td className="col-1">{buyer.firstName}</td>
                  <td className="col-1">{buyer.lastName}</td>
                  <td className="col-1">{buyer.email}</td>
                  <td className="col-1">{buyer.regDate}</td>
                  <td className="col-1">{buyer.addresses && buyer.addresses.pinCode}</td>
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
