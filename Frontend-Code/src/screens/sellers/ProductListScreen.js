import Header from "../../components/Header";
import axios from 'axios';
import { useState, useEffect } from "react";

const ProductListScreen = (props) => {
  
  const initValue = [
    {
      "productId": 3,
      "productCatalogue": {
          "productUid": 3,
          "productName": "Wheat"
      },
      "brandName": "Khet",
      "productDescription": "Genhu",
      "category": {
          "categoryId": 3,
          "catName": "Crops",
          "description": "Wheat,rice,sugarcane etc"
      },
      "price": 200.0,
      "unitsStock": 80,
      "unitsSold": 40,
      "discount": 10.0,
      "avgRating": 0.0,
      "picture": null
  }
  ]
  const [products, setProducts] = useState(initValue);
  useEffect(() => {
    getAllProducts();
  },[]);
  sessionStorage.setItem('sellerId',1);
  const url = 'http://localhost:8080/seller/list-sellers-products/'+sessionStorage.getItem('sellerId');
  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getAllProducts = () => {
    axios
    .get(url, header)
    .then((response) => {
      const allProducts = response.data.productList;
      setProducts(allProducts);
    })
    .catch((error) => 
      console.error(`Error: ${error}`)
    )
  }
  
  

  const onAddProduct = () => {
    props.history.push("/seller/product-catalogue");
  };

  const onEditProduct = () => {
    props.history.push("/seller/edit-product");
  };

  const onDeleteProduct = () => {
    props.history.push("/seller/product-list");
  };

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
            {console.log(products)}
            {products.map((product) => {
              return (
                <tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td>{product.productCatalogue.productName}</td>
                  <td>{product.category.catName}</td>
                  <td>{product.price}</td>
                  <td>{product.discount}</td>
                  {/* {setSelectedProductId(product.productId)} */}
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
