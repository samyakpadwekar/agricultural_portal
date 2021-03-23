import Header from "../../components/Header";
import axios from 'axios';
import { useState, useEffect } from "react";
import '../../styles/App.css'

const ProductListScreen = (props) => {
  // const [msg, setMsg] = useState('');
  const initValue = [
    {
      "productId": 0,
      "productCatalogue": {
          "productUid": 0,
          "productName": ""
      },
      "brandName": "",
      "productDescription": "",
      "category": {
          "categoryId": 0,
          "catName": "",
          "description": ""
      },
      "price": 0.0,
      "unitsStock": 0,
      "unitsSold": 0,
      "discount": 0.0,
      "avgRating": 0.0,
      "picture": null
  }
  ]
  const [products, setProducts] = useState(initValue);
  useEffect(() => {
    getAllProducts();
  },[]);
  // sessionStorage.setItem('sellerId',1);
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
      if(response.status == 204){
        // setMsg("No products");
      }
      const allProducts = response.data.productList;
      setProducts(allProducts);
    })
    .catch((error) => {
      alert("Servers down")
      console.error(`Error: ${error}`)
    }
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

  const imgurl = "http://localhost:8080/seller/download/"

  return (
    <div>
      <div>
        <Header title="Your Products" />
      </div>
      <div className="col-md-8 mx-auto">
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
              <th>Picture</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price per unit</th>
              <th>Discount offered(%)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {console.log(products)}
            {products && products.map((product) => {
              return (
                <tr key={product.productId}>
                  <td>{product.productId}</td>
                  <td><img className="prod-image" src = {imgurl+product.productId}/></td>
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
