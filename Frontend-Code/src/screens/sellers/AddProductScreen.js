import Header from "../../components/Header";
import { Link } from "react-router-dom";

const AddProductScreen = (props) => {
  return (
    <div>
      <div>
        <Header title="Add new product" subtitle="" />
      </div>

      <div className="container">
        <div
          className="form col-md-8 mx-auto"
          style={{
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#c2c0ba",
            padding: "40px",
          }}
        >
          <div className="mb-3">
            <label className="form-label">
              Product UID &nbsp;
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="Check AGRISHOP Product Catalogue to find out ProductUID"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </span>
            </label>
            <input className="form-control" type="number"></input>
          </div>
          <label className="form-label">Product Category</label>
          <select class="form-select mb-3" aria-label="Disabled select example">
            <option selected>Select Category</option>
            <option value="1">CategoryOne</option>
            <option value="2">CategoryTwo</option>
            <option value="3">CategoryThree</option>
          </select>
          <div className="mb-3">
            <label className="form-label">Brand Name</label>
            <input className="form-control"></input>
          </div>
          <div className="mb-3">
            <label className="form-label" type="textarea">
              Product Description
            </label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <table style={{width:'100%'}}>
            <tr>
              <td style={{padding:'10px'}}>
                <div className="mb-3">
                  <label className="form-label">Price per unit (Rs)</label>
                  <input type="number" className="form-control" />
                </div>
              </td>
              <td style={{padding:'10px'}}>
                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input type="number" className="form-control" />
                </div>
              </td>
            </tr>
          </table>
          <table className="mx-auto" style={{width:'50%',textAlign:"center"}}>
            <tr>
              <td style={{padding:'10px'}}>
                <div className="mb-3">
                <button className="btn btn-success" type="submit">Save</button>
                </div>
              </td>
              <td style={{padding:'10px'}}>
                <div className="mb-3">
                <Link to="/seller/product-catalogue">
                <button className="btn btn-danger">Cancel</button>
                </Link>
                </div>
              </td>
            </tr>
          </table>
          
        </div>
      </div>
    </div>
  );
};

export default AddProductScreen;
