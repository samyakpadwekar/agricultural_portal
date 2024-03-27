import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import { getProducts } from "../../actions/AdminActions"

const ProductList = (props) => {
  const[q,setQ]= useState("") 
  const dispatch =useDispatch()
  const productslist = useSelector((store)=>store.productslist)
  const { error, response, loading } = productslist

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getProducts())
    console.log(response)
  }, [])

  

  useEffect(() => {
    console.log(response)
  }, [error, response, loading])

  return (
    <>
      <Header title="Products List" />
      <div className="col-md-10 mx-auto">
      <div class="col-md-9 mx-auto">
          <form
            className="col-md-8 mx-auto"
          >
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                aria-label="Search input with dropdown button"
                value={q} onChange={(e) => setQ(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-success " type="button">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr >
            <th className="col-1" scope="col">Product Id</th>
            <th className="col-2" scope="col">Product Name</th>
            <th className="col-2" scope="col">Brand Name</th>
            <th className="col-2" scope="col">Category Name</th>
            <th className="col-2" scope="col">Price</th>
            <th className="col-2" scope="col">Units Sold</th>
          </tr>
        </thead>
        <tbody>
        {response &&
            response.length > 0 &&
            response
            .filter((product) => 
            product.productCatalogue.productName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            product.brandName.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
            product.category.catName.toLowerCase().indexOf(q.toLowerCase()) > -1
            )
            .map((product) => {
            return (
              <>
                <tr>
                  <td className="col-1">{product.productId}</td>
                  <td className="col-2">{product.productCatalogue.productName}</td>
                  <td className="col-2">{product.brandName}</td>
                  <td className="col-2">{product.category.catName}</td>
                  <td className="col-2">{product.price}</td>
                  <td className="col-2">{product.unitsSold}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};


export default ProductList;
