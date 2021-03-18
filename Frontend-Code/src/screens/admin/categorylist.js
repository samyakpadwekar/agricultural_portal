import { Link } from "react-router-dom";
import Header from "../../components/Header";

const CategoryList = (props) => {
  const testData = [
    { id: 1, name: "Category 1", description: "fruits and vegetables" },
    { id: 2, name: "Category 2", description: "insecticides and persticides" },
    { id: 3, name: "Category 3", description: "faming machineries" },
    { id: 4, name: "Category 4", description: "seeds and pulses" },
    { id: 5, name: "Category 5", description: "grains.oils and masalas" },
    { id: 6, name: "Category 6", description: "milk and meat" },
  ];

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
          {testData.map((category) => {
            return (
              <>
                <tr>
                  <th className="col-1" scope="row">{category.id}</th>
                  <td className="col-2">{category.name}</td>
                  <td className="col-2">{category.description}</td>
                  <td className="col-2">
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      data-mdb-ripple-color="dark"
                      style={buttonStyle}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      data-mdb-ripple-color="dark"
                      style={buttonStyle}
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
