import Header from "../../components/Header";

const InventoryReportScreen = (props) => {
  

  const productList = [
    {
      produtId: 1,
      productName: "product2",
      category: "category",
      unitsStock: 1200,
    },
    {
      produtId: 1,
      productName: "product2",
      category: "category",
      unitsStock: 1200,
    },
  ];
  return (
    <div className="col-md-9 mx-auto">
      <div>
        <Header title="Your Inventory" />
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
          className="table table-stripped table-hover"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>ProductId</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Units in stock</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => {
              return (
                <tr>
                  <td>{product.produtId}</td>
                  <td>{product.productName}</td>
                  <td>{product.category}</td>
                  <td>{product.unitsStock}</td>                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryReportScreen;
