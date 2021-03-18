import Header from '../../components/Header'

const ProductListScreen = (props) => {

  const onAddProduct = () => {
    props.history.push('/seller/add-product')
  }

  return (
    <div>
      <div>
        <Header title="Product Catalogue"/>
      </div>
      <div className="col-md-10 mx-auto">
        <button onClick={onAddProduct} className="btn btn-primary float-end">
          Add new product
        </button>

        <table className="table table-stripped">
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
        </table>
      </div>  


    </div>
  )
}

export default ProductListScreen