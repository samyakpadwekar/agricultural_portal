import { Link } from "react-router-dom";
import Header from "../../components/Header";

const AddCategory = (props) => {

  const onAdd = () => {
    props.history.push('/admin/category-list')
  }

  const onCancel = () => {
    props.history.push('/admin/category-list')
  }
  return (
    <div>
      <Header title="Add Category" />
      {/* <div className="form"> */}
      <div className="col-md-8 mx-auto">
        <div className="mb-3">
          <label className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="category name here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Category Description
          </label>
          <textarea
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Category Image
          </label>
          <input className="form-control" type="file"  />
        </div>
        <div className="mb-3">
        <button onClick={onAdd} className="btn btn-success">
            Add
          </button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
