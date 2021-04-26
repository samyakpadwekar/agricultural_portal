import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { getSellers } from '../../actions/AdminActions'

const NearbySellers = (props) => {
  // const testData = [
  //   {
  //     id: 1,
  //     businessName: "Vikas Pesticides",
  //     GSTIN: "1111-4554-9889",
  //     mobile: "9874561238",
  //     addressproof: "Aadhar-Card",
  //   },
  //   {
  //     id: 2,
  //     businessName: "Samyak Dairy",
  //     GSTIN: "1111-4554-9889",
  //     mobile: "9874561238",
  //     addressproof: "Driving License",
  //   },
  //   {
  //     id: 3,
  //     businessName: "Chinmay Khadya",
  //     GSTIN: "1111-4554-9889",
  //     mobile: "9874561238",
  //     addressproof: "Electricity-bill",
  //   },
  //   {
  //     id: 4,
  //     businessName: "Pankaj Kirana",
  //     GSTIN: "1111-4554-9889",
  //     mobile: "9874561238",
  //     addressproof: "Pan-Card",
  //   },
  // ];
  const [filter, setFilter] = useState('All')

  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  setFilter(userDetails.addresses.pinCode)
  const dispatch = useDispatch()
  const sellerlist = useSelector((store) => store.sellerlist)
  const { error, response, loading } = sellerlist

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getSellers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <>
      <Header title="Manage Seller" />
      <div className="container buyerlist-wrapper">
        <div class="col-md-8 mx-auto pt-1">
          <form
            className="form-inline float-start mb-1 my-lg-0"
            id="admin-manage-buyer">
            <div className="input-group">
              <div className="input-group-prepend nav-item dropdown">
                <button
                  className="btn btn-light dropdown-toggle nav-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Categories
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item" href="#">
                      BusinessName
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" href="#">
                      ProductName
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
              <tr>
                <th className="col-1" scope="col">
                  Id
                </th>
                <th className="col-2" scope="col">
                  Business Name
                </th>
                <th className="col-2" scope="col">
                  GSTIN
                </th>
                <th className="col-2" scope="col">
                  Mobile
                </th>
                <th className="col-2" scope="col">
                  AddressProof
                </th>
                <th className="col-2" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {response &&
                response.list &&
                response.list.length > 0 &&
                response.list.map((seller) => {
                  return (
                    <>
                      <tr>
                        <th className="col-1" scope="row">
                          {seller.sellerId}
                        </th>
                        <td className="col-2">{seller.businessName}</td>
                        <td className="col-2">{seller.gstin}</td>
                        <td className="col-2">{seller.mobileNo}</td>
                        <td className="col-2">{seller.aadharNo}</td>
                        <td className="col-2">
                          <button
                            type="button"
                            className="btn btn-success"
                            data-mdb-ripple-color="dark"
                            style={buttonStyle}>
                            Approve
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-mdb-ripple-color="dark"
                            style={buttonStyle}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    </>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

const buttonStyle = {
  margin: '10px',
}

export default NearbySellers
