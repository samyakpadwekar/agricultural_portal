import Header from "../../components/Header";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductCatalogue } from '../../actions/productActions'

const ProductCatalogueScreen = (props) => {
  const dispatch = useDispatch()
  const productCatalogue = useSelector((store) => store.productCatalogue)
  const {error, response, loading} = productCatalogue
  useEffect(() => {
    dispatch( getProductCatalogue() )
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onAddProduct = (product) => {
    props.history.push("/seller/add-product/", product);
  };

  return (
    <div>
      <div>
        <Header title="Product Catalogue" />
      </div>
      <div className="col-md-6 mx-auto">
        <table
          className="table table-bordered table-hover"
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
            {
              response && response.length > 0 && 
              response.map((product) => {
                return (
                  <tr key={product.productUid}>
                    <td>{product.productUid}</td>
                    <td>{product.productName}</td>
                    <td>
                      <button
                        onClick={(e) =>
                          onAddProduct(product)
                        }
                        className="btn btn-outline-primary"
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductCatalogueScreen;
