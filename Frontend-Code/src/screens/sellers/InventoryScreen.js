import Header from "../../components/Header";

const InventoryScreen = (props) => {
  const onRestockProduct = () => {
    props.history.push("/seller/inventory");
  };

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
              <th>Action</th>
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

                  <td>
                    {/* <table style={{}}>
                      <tr >
                        <td ><input type="number" style={{width:'80px'}} /></td>
                        <td>
                          <button
                            onClick={onRestockProduct}
                            className="btn btn-outline-primary"
                          >
                            Restock
                          </button>
                        </td>
                      </tr>
                    </table> */}
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      Restock Product
                    </button>
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              New message
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="mb-3">
                                <label
                                  for="recipient-name"
                                  class="col-form-label"
                                >
                                  Enter units:
                                </label>
                                <input
                                  type="number"
                                  class="form-control mx-auto"
                                  id="quantity"
                                  style={{width:'100px'}}
                                />
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" onClick={onRestockProduct} data-bs-dismiss="modal" class="btn btn-primary">
                              Restock
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default InventoryScreen;
