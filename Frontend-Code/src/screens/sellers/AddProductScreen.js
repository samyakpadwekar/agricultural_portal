import Header from "../../components/Header";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";


const AddProductScreen = (props) => {
  const initValue = [{}]
  const [cats, getCats] = useState(initValue);
  const [selectedCategoryId, setSelectedCategoryId] = useState()
  const [brandName, setBrandName] = useState('')
  const [productCatalogue, setProductCatalogue] = useState()
  const [productDescription, setProductDescription] = useState('')
  const [unitsStock, setUnitsStock] = useState(0)
  const [unitsSold, setUnitsSold] = useState(0)
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [picture, setPicture] = useState()
  

  useEffect(() => {
    getAllCats();
  }, []);

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
      const allCats = response.data;
      getCats(allCats);
    })
    .catch((error) => 
      console.error(`Error: ${error}`)
    )
  }

  const onSaveProduct = () => {
    
    if(productCatalogue == null){
      console.log('catalogue null');
    }
    setUnitsSold(0)
    const productDto = {
      brandName,
      productCatalogue,
      productDescription,
      price,
      unitsStock,
      unitsSold,
      discount, 
    }
    console.log(productDto)
    console.log(picture)

    const formData = new FormData()
    formData.append('productDTO',JSON.stringify(productDto))
    formData.append('imageFile',picture)
    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    // const header2 = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }
    // sessionStorage.setItem('sellerId',4); //change this after sign in
    const url2 = 'http://localhost:8080/seller/add-product/'+sessionStorage.getItem('sellerId')+'/'+selectedCategoryId;
    axios
      .post(url2, formData)
      .then((response) => {
        console.log(response.data)
        alert("New product saved successfully!");
      })
      .catch((error) => {
        console.error(`Error: ${error}`)
        alert("Failed to save new product!")
      })
    props.history.push("/seller/home");
  }


  return (
    <div>
      <div>
        <Header title="Add new product" subtitle="" />
      </div>

      <div className="container">
        <div
          className="form col-md-8 mx-auto form-div"
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#c2c0ba",
            padding: "40px",
          }}
        >
          <div className="mb-3">
            <label className="form-label">
              Product UID
            </label>
            <input className="form-control" type="number" value={props.location.state.productUid} readOnly></input>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Product Name
            </label>
            <input className="form-control" type="text" value={props.location.state.productName} readOnly></input>
          </div>
          <label className="form-label">Product Category</label>
          <select className="form-select mb-3" aria-label="Disabled select example" required
          onChange={(e) => {
            setSelectedCategoryId(e.target.value);
            setProductCatalogue({
              productUid : props.location.state.productUid,
              productName : props.location.state.productName
            })
          }}>
            <option defaultValue >Select category</option>
            {cats &&
              cats.map((cat) => {
                return (
                  <option value={cat.categoryId} >{cat.catName}</option>
                )
              })
            }
            
          </select>
          <div className="mb-3">
            <label className="form-label">Brand Name</label>
            <input className="form-control" onChange={(e) => {
              setBrandName(e.target.value)
            }}/>
          </div>
          <div className="mb-3">
            <label className="form-label" type="textarea">
              Product Description
            </label>
            <textarea className="form-control" rows="3" onChange={(e) => {
              setProductDescription(e.target.value)
            }}/>
          </div>
          <table style={{width:'100%'}}>
          <thead></thead>
            <tbody>
            <tr>
              <td style={{padding:'10px'}}>
                <div className="mb-3">
                  <label className="form-label">Price per unit (Rs)</label>
                  <input type="number" className="form-control" onChange={(e) => {
              setPrice(e.target.value)
            }}/>
                </div>
              </td>
              <td style={{padding:'10px'}}>
                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input type="number" className="form-control" onChange={(e) => {
              setUnitsStock(e.target.value)
            }}/>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{padding:'10px'}}> 
              <div className="mb-3">
                  <label className="form-label">Discount</label>
                  <input type="number" className="form-control" onChange={(e) => {
              setDiscount(e.target.value)
            }}/>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
          
          <label className="form-label" for="customFile">
            Add Picture
          </label>
          <input type="file" className="form-control" id="productPicture" onChange={(e) => {
              setPicture(e.target.files[0])
            }}/>
          <table className="mx-auto" style={{width:'50%',textAlign:"center"}}>
            <thead></thead>
            <tbody>
            <tr>
              <td style={{padding:'10px'}}>
                <div className="mb-3">
                <button className="btn btn-success" type="submit" onClick={onSaveProduct}>Save</button>
                </div>
              </td>
              <td style={{padding:'10px'}}>
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
  );
};

export default AddProductScreen;
