import { Link } from "react-router-dom";
import Header from "../../components/Header";

const SellerList = (props) => {
  const testData = [
    {
      id: 1,
      businessName: "Vikas Pesticides",
      GSTIN: "1111-4554-9889",
      mobile: "9874561238",
      addressproof: "Aadhar-Card",
    },
    {
      id: 2,
      businessName: "Samyak Dairy",
      GSTIN: "1111-4554-9889",
      mobile: "9874561238",
      addressproof: "Driving License",
    },
    {
      id: 3,
      businessName: "Chinmay Khadya",
      GSTIN: "1111-4554-9889",
      mobile: "9874561238",
      addressproof: "Electricity-bill",
    },
    {
      id: 4,
      businessName: "Pankaj Kirana",
      GSTIN: "1111-4554-9889",
      mobile: "9874561238",
      addressproof: "Pan-Card",
    },
  ];

  return (
    <>
      <Header title="Manage Buyers" />
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
              {testData.map((seller) => {
                return (
                  <>
                    <tr>
                      <th className="col-1" scope="row">
                        {seller.id}
                      </th>
                      <td className="col-2">{seller.businessName}</td>
                      <td className="col-2">{seller.GSTIN}</td>
                      <td className="col-2">{seller.mobile}</td>
                      <td className="col-2">{seller.addressproof}</td>
                      <td className="col-2">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-mdb-ripple-color="dark"
                          style={buttonStyle}
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-mdb-ripple-color="dark"
                          style={buttonStyle}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const buttonStyle = {
  margin: "10px",
};

export default SellerList;