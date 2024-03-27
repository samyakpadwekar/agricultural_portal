import Header from "../../components/Header";
import axios from 'axios';
import { useState, useEffect } from "react";

const PerformanceScreen = (props) => {

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
    .catch((error) => 
      console.error(`Error: ${error}`)
    )
  }


  const onGetFeedback = (product) => {
    props.history.push("/seller/product-feedback/", product);
  };
  
  return (
    <div>
      <div>
        <Header title="Product Performance" />
      </div>
      <div className="col-md-8 mx-auto">
        <table
          className="table table-stripped table-hover"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Average Rating</th>
              <th>Feedbacks</th>
            </tr>
          </thead>
          <tbody>
            {products && products.map((product) => {
              return (
                <tr>
                  <td>{product.productId}</td>
                  <td>{product.productCatalogue.productName}</td>
                  <td>{product.avgRating}</td>
                  <td>
                  <button
                      className="btn btn-outline-secondary"
                      onClick={(e) =>
                        onGetFeedback(product)
                      }
                    >
                      View Feedbacks
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

export default PerformanceScreen;
