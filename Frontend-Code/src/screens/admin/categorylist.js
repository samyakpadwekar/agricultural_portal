import { Link } from "react-router-dom";
import Header from "../../components/Header";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack';

const CategoryList = (props) => {
    
  // ];
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [allCategories, setAllCategories] = useState()
  
  useEffect(() => {
    result()
  }, [])

  const categoryDetails = (category) => {
    props.history.push('/admin/edit-category', category)
  }

  const url = 'http://localhost:8080/admin/get-categories'

  const header ={
    headers: {
      'Content-Type': 'application/json', 
    },
  }

  const result = () => {
    axios
      .get(url, header)
      .then((response) => {
        const categories = response.data
        setAllCategories(categories)
        console.log(categories)
      })
      .catch((error) => console.error(`Error: ${error}`))
  }

  const deleteNotif = () => {
    enqueueSnackbar('Category Deleted',{variant:'success'});
};

  const deleteCategory = (category) => {
    console.log(category.categoryId)
    const id = category.categoryId

    const url1 = 'http://localhost:8080/admin/delete-category/' + id

    const header1 ={
      headers: {
        'Content-Type': 'application/json', 
      },
    }
  
      axios
        .delete(url1, header1)
        .then((response) => {
          deleteNotif();
          result() 
        })
        .catch((error) => console.error(`Error: ${error}`))
    }

  console.log(allCategories)
  return (
    <>
      <Header title="Categories" />
      <div className="col-md-10 mx-auto">
      <Link to="/admin/add-category">
        <button className="btn btn-primary float-end">Add Category</button>
      </Link>
      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr >
            <th className="col-1" scope="col">Category Id</th>
            <th className="col-2" scope="col">Name</th>
            <th className="col-2" scope="col">Description</th>
            <th className="col-2" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allCategories &&
           allCategories.map((category) => {
            return (
              <>
                <tr>
                  <th className="col-1" scope="row">{category.categoryId}</th>
                  <td className="col-2">{category.catName}</td>
                  <td className="col-2">{category.description}</td>
                  <td className="col-2">
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      data-mdb-ripple-color="dark"
                      style={buttonStyle}
                      onClick={(e) => categoryDetails(category)}>
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      data-mdb-ripple-color="dark"
                      style={buttonStyle}
                      onClick={(e) => deleteCategory(category)}
                    >
                      Delete
                    </button>
                  </td>
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

const buttonStyle = {
  margin: "10px",
};

export default CategoryList;
