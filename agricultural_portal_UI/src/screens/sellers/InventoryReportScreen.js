import Header from "../../components/Header";
import axios from 'axios';
import { useState, useEffect } from "react";

const InventoryReportScreen = (props) => {
  
  const initValue = [
    {
      "productId": 11,
      "productCatalogue": {
          "productUid": 4,
          "productName": "Tractor"
      },
      "brandName": "JD",
      "productDescription": "Heavy duty",
      "category": {
          "categoryId": 1,
          "catName": "Machinery",
          "description": "",
          "picture": null
      },
      "price": 1100000.0,
      "seller": null,
      "unitsStock": 20,
      "unitsSold": 0,
      "discount": 10.0,
      "avgRating": 0.0,
      "picture": null
  }
  ]
  const [products, setProducts] = useState(initValue);
  useEffect(() => {
    getAllProducts();
  },[]);
  // sessionStorage.setItem('sellerId',1);
  const url = 'http://localhost:8080/seller/inventory-report/'+sessionStorage.getItem('sellerId');
  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getAllProducts = () => {
    axios
    .get(url, header)
    .then((response) => {
      console.log(response)
      if(response.status == 204){
        // alert("No products found!")
        // props.history.push("/seller/home");
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

  return (
    <div className="col-md-9 mx-auto">
      <div>
        <Header title="Inventory Report" />
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
            {products && products.map((product) => {
              return (
                <tr>
                  <td>{product.productId}</td>
                  <td>{product.productCatalogue.productName}</td>
                  <td>{product.category.catName}</td>
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
