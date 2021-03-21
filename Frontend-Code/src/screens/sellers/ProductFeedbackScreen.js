import Header from "../../components/Header";
import axios from 'axios';
import { useState, useEffect } from "react";

const ProductFeedbackScreen = (props) => {
  
  const initValue = [
    {
      "fid": 2,
      "userId": 2,
      "productId": 11,
      "feedback": "Bad quality",
      "rating": 3.0,
      "user": null,
      "product": null
    }
  ]
  const [feedbacks, setFeedbacks] = useState(initValue);
  useEffect(() => {
    getAllFeedbacks();
  },[]);
  // sessionStorage.setItem('sellerId',1);
  console.log("productId = "+props.location.state.productId)
  const url = 'http://localhost:8080/admin/customer-feedbacks/'+props.location.state.productId;
  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const getAllFeedbacks = () => {
    axios
    .get(url, header)
    .then((response) => {
      console.log(response)
      if(response.status == 204){
        // alert("No products found!")
        // props.history.push("/seller/home");
      }

      const allFeedbacks = response.data.feedbackList;
      setFeedbacks(allFeedbacks);
    })
    .catch((error) => 
      console.error(`Error: ${error}`)
    )
  }

  return (
    <div className="col-md-6 mx-auto">
      <div>
        <Header title="Feedbacks" />
      </div>
      <div>
      {/* <form className="d-flex col-md-4 mx-auto">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}

      </div>
      <div className="col-md-10 mx-auto">
        <table
          className="table table-stripped table-hover"
          style={{ textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Feedback</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks && feedbacks.map((f) => {
              return (
                <tr>
                  <td>{f.feedback}</td>
                  <td>{f.rating}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductFeedbackScreen;
