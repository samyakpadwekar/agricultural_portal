import Header from "../../components/Header";

const ProductCatalogueScreen = (props) => {
  const onAddProduct = () => {
    props.history.push("/seller/add-product");
  };

  const productCatalogue = [
    {
      produtUId: 1,
      productName: "product2",
    },
  ];
  return (
    <div>
      <div>
        <Header title="Product Catalogue" />
      </div>
      <div className="col-md-10 mx-auto">
        <table
          className="table table-stripped table-hover"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Product UId</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productCatalogue.map((product) => {
              return (
                <tr>
                  <td>{product.produtUId}</td>
                  <td>{product.productName}</td>
                  <td>
                    <button
                      onClick={onAddProduct}
                      className="btn btn-outline-primary"
                    >
                      Add
                    </button>
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

export default ProductCatalogueScreen;
