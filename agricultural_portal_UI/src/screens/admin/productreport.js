// import { Link } from "react-router-dom";
import Header from "../../components/Header";
const ProductReport = (props) => {

  const testData = [
    {Name:"Rice", SellerName: "Vikas", InStock: "300", UnitsSold: "100", Price: "100" },
    {Name:"Soil Ammendment", SellerName: "Chinmay", InStock: "400", UnitsSold: "200", Price: "50" },
    {Name:"Cotton", SellerName: "Pankaj", InStock: "200", UnitsSold: "300", Price: "100" },
    {Name:"Crop Sprayer", SellerName: "Ameya", InStock: "150", UnitsSold: "400", Price: "50" },
    {Name:"Tractor", SellerName: "Sandesh", InStock: "220", UnitsSold: "500", Price: "100" },
    {Name:"Soyabean Seeds", SellerName: "Atharva", InStock: "100", UnitsSold: "600", Price: "50" },
  ];

  return (
    <>
      <Header title="Product Report" />
      <div className="container buyerlist-wrapper col-md-6 mx-auto pt-1">
      {/* <div class="col-md-8 mx-auto pt-1"> */}
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
                  ProductName
                </th>
                <th className="col-1" scope="col">
                  SellerName
                </th>
                <th className="col-1" scope="col">
                  Units In Stock
                </th>
                <th className="col-1" scope="col">
                  Units Sold
                </th>
                <th className="col-1" scope="col">
                 Price
                </th>
              </tr>
            </thead>
            <tbody>
              {testData.map((product) => {
                return (
                  <>
                    <tr>
                      <th className="col-1">
                        {product.Name}
                      </th>
                      <td className="col-1">{product.SellerName}</td>
                      <td className="col-1">{product.InStock}</td>
                      <td className="col-1">{product.UnitsSold}</td>
                      <td className="col-1">{product.Price}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
    </>
  );
}

export default ProductReport;
