import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AddProductScreen = (props) => {
  const initValue = [{}]
  const [cats, getCats] = useState(initValue)
  const [categoryId, setCategoryId] = useState()
  const [productId, setProductId] = useState(0)
  const [brandName, setBrandName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [unitsStock, setUnitsStock] = useState(0)
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [picture, setPicture] = useState(props.location.state.picture)

  useEffect(() => {
    console.log('in use effect')
    getAllCats()
    setProductId(props.location.state.productId)
    setCategoryId(props.location.state.category.categoryId)
    setBrandName(props.location.state.brandName)
    setProductDescription(props.location.state.productDescription)
    setPrice(props.location.state.price)
    setUnitsStock(props.location.state.unitsStock)
    setDiscount(props.location.state.discount)
    console.log('pic :' + picture)
  }, [])

  const url = 'http://localhost:8080/admin/get-categories'
  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getAllCats = () => {
    axios
      .get(url, header)
      .then((response) => {
        const allCats = response.data
        getCats(allCats)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  // {
  //   "productId": 3,
  //   "brandName": "Khet",
  //   "productDescription": "gahu",
  // "category": {
  //     "categoryId": 3
  // },
  //   "price": 200.0,
  //   "unitsStock": 140,
  //   "discount": 10.0
  // }
  const onSaveProduct = () => {
    console.log('id :' + productId)
    const productDto = {
      productId,
      brandName,
      productDescription,
      category: {
        categoryId,
      },
      price,
      unitsStock,
      discount,
    }
    console.log(productDto)
    console.log(picture)

    const formData = new FormData()
    formData.append('productdto', JSON.stringify(productDto))
    formData.append('imageFile', picture)

    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1])
    }
    // const header2 = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }
    // sessionStorage.setItem('sellerId',4); //change this after sign in
    const url2 = 'http://localhost:8080/seller/edit-product'
    axios
      .put(url2, formData)
      .then((response) => {
        console.log(response.data)
        // alert("New product saved successfully!");
      })
      .catch((error) => {
        console.error(`Error: ${error}`)
        alert('Failed to save changes!')
      })
    document.location.href = '/seller/product-list'
  }

  return (
    <div>
      <div>
        <Header title="" subtitle="" />
      </div>

      <div className="container">
        <div
          className="form col-md-8 mx-auto form-div"
          style={{
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#c2c0ba',
            padding: '40px',
          }}>
          <div className="mb-3">
            <label className="form-label">Product UID</label>
            <input
              className="form-control"
              type="number"
              value={props.location.state.productCatalogue.productUid}
              readOnly></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              className="form-control"
              type="text"
              value={props.location.state.productCatalogue.productName}
              readOnly></input>
          </div>
          <label className="form-label">Product Category</label>
          <select
            className="form-select mb-3"
            aria-label="Disabled select example"
            required
            value={categoryId}
            onChange={(e) => {
              setCategoryId(e.target.value)
            }}>
            <option defaultValue>Select category</option>
            {cats &&
              cats.map((cat) => {
                return <option value={cat.categoryId}>{cat.catName}</option>
              })}
          </select>
          <div className="mb-3">
            <label className="form-label">Brand Name</label>
            <input
              className="form-control"
              value={brandName}
              onChange={(e) => {
                setBrandName(e.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" type="textarea">
              Product Description
            </label>
            <textarea
              className="form-control"
              rows="3"
              value={productDescription}
              onChange={(e) => {
                setProductDescription(e.target.value)
              }}
            />
          </div>
          <table style={{ width: '100%' }}>
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px' }}>
                  <div className="mb-3">
                    <label className="form-label">Price per unit (Rs)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value)
                      }}
                    />
                  </div>
                </td>
                <td style={{ padding: '10px' }}>
                  <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      value={unitsStock}
                      onChange={(e) => {
                        setUnitsStock(e.target.value)
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>
                  <div className="mb-3">
                    <label className="form-label">Discount</label>
                    <input
                      type="number"
                      className="form-control"
                      value={discount}
                      onChange={(e) => {
                        setDiscount(e.target.value)
                      }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <label className="form-label" for="customFile">
            Change Picture
          </label>
          <input
            type="file"
            className="form-control"
            id="productPicture"
            required
            onChange={(e) => {
              setPicture(e.target.files[0])
            }}
          />
          <table
            className="mx-auto"
            style={{ width: '50%', textAlign: 'center' }}>
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px' }}>
                  <div className="mb-3">
                    <button className="btn btn-success" onClick={onSaveProduct}>
                      Save changes
                    </button>
                  </div>
                </td>
                <td style={{ padding: '10px' }}>
                  <div className="mb-3">
                    <Link to="/seller/product-list">
                      <button className="btn btn-danger">Cancel</button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AddProductScreen
