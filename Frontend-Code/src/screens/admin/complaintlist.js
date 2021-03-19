import { Link } from "react-router-dom";
import Header from "../../components/Header";

const ComplaintList = (props) => {
  const testData = [
    { id: 1,productId:"1", buyerId: "1", status: "RAISED", complaint: "wrong product is sent",},
    { id: 2,productId:"2", buyerId: "2", status: "RAISED", complaint: "product is faulty",},
    { id: 3,productId:"3", buyerId: "3", status: "RESOLVED", complaint: "pestcides seal is broken",},
    { id: 4,productId:"4", buyerId: "4", status: "RAISED", complaint: "sprayer is faulty",},
    { id: 5,productId:"5", buyerId: "5", status: "RESOLVED", complaint: "vegetables are insects affected",},
    { id: 6,productId:"6", buyerId: "6", status: "RAISED", complaint: "tractor is faulty",},
  ];

  return (
    <>
      <Header title="Manage Complaints" />
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
                  Search by
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item" >
                      Status
                    </span>
                  </li>
                  <li>
                    <span className="dropdown-item" >
                      Product Id
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
        <div class="table-responsive col-md-10 mx-auto pt-5">
          <table className="table table-striped table-responsive table-bordered ">
            <thead>
              <tr>
                <th className="col-1" scope="col">
                  ComplaintId
                </th>
                <th className="col-1" scope="col">
                  ProductId
                </th>
                <th className="col-1" scope="col">
                  BuyerId
                </th>
                <th className="col-2" scope="col">
                  Complaint
                </th>
                <th className="col-2" scope="col">
                  Status
                </th>
                <th className="col-2" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {testData.map((complaint) => {
                return (
                  <>
                    <tr>
                      <th className="col-1" scope="row">
                        {complaint.id}
                      </th>
                      <td className="col-1">{complaint.productId}</td>
                      <td className="col-1">{complaint.buyerId}</td>
                      <td className="col-2">{complaint.complaint}</td>
                      <td className="col-2">{complaint.status}</td>
                      <td className="col-2">
                        <button
                          type="button"
                          className="btn btn-success"
                          data-mdb-ripple-color="dark"
                          style={buttonStyle}
                        >
                          Notify
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-mdb-ripple-color="dark"
                          style={buttonStyle}
                        >
                          Resolve
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

export default ComplaintList;
