import Header from "../../components/Header";

const ProductListScreen = (props) => {
  const onAddProduct = () => {
    props.history.push("/seller/product-catalogue");
  };

  const onEditProduct = () => {
    props.history.push("/seller/edit-product");
  };

  const onDeleteProduct = () => {
    props.history.push("/seller/product-list");
  };

  const productList = [
    {
      produtId: 1,
      productName: "product2",
      category: "cat1",
      unitPrice: 100.0,
      discount: 10,
    },
  ];
  return (
    <div>
      <div>
        <Header title="Your Products" />
      </div>
      <div className="col-md-10 mx-auto">
        <button onClick={onAddProduct} className="btn btn-primary float-end">
          Add new product
        </button>

        <table
          className="table table-striped table-responsive"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price per unit</th>
              <th>Discount offered(%)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => {
              return (
                <tr>
                  <td>{product.produtId}</td>
                  <td>{product.productName}</td>
                  <td>{product.category}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.discount}</td>
                  <td>
                    <button
                      className="btn btn-outline-warning"
                      onClick={onEditProduct}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={onDeleteProduct}
                    >
                      Delete
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

export default ProductListScreen;
