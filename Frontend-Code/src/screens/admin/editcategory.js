import Header from "../../components/Header";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";

const EditCategory = (props) => {
  console.log(props.location.state.catName)

  const [categoryId, setCategoryId] = useState()
  const [catName, setCategoryName] = useState()
  const [description, setCategoryDesc] = useState()

  const dispatch = useDispatch();

  useEffect(() =>{
    onLoad()
  },[])
  
  const onLoad=() =>{
    setCategoryId(props.location.state.categoryId)
    setCategoryName(props.location.state.catName)
    setCategoryDesc(props.location.state.description)   
  }

  const onUpdate = () => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      categoryId,
      catName,
      description,
    }
    const url = 'http://localhost:8080/admin/edit-category'
    console.log(categoryId)
    console.log(catName)
    console.log(description)
    axios
      .put(url, body, header)
      .then((response) => {
        document.location.href= '/admin/category-list'
      })
      .catch((error) => {
        alert('Something went wrong')
      })
  }

   

  const onCancel = () => {
    props.history.push('/admin/category-list')
  }
  
  return (
    <div>
      <Header title="Edit Category" />
      {/* <div className="form"> */}
      <div className="col-md-6 mx-auto">
        <div className="mb-3">
          <label className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="category name here"
            value={catName}
            onChange={(e) => {
              setCategoryName(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Category Description
          </label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => {
              setCategoryDesc(e.target.value)
            }}
          ></textarea>
        </div>
        <div className="mb-3">
        <button onClick={onUpdate} className="btn btn-success">
            Update
          </button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
