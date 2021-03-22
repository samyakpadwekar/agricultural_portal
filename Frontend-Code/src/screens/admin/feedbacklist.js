import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { getFeedbacks } from "../../actions/AdminActions";
const FeedbackList = (props) => {

  // const testData = [
  //   { id: 1,productId:"1", buyerId: "1", rating: "3", feedback: "rice quality is good",},
  //   { id: 2,productId:"2", buyerId: "2", rating: "4", feedback: "pesticide quality is good",},
  //   { id: 3,productId:"3", buyerId: "3", rating: "2", feedback: "cotton quality is good",},
  //   { id: 4,productId:"4", buyerId: "4", rating: "2", feedback: "insecticide quality not good",},
  //   { id: 5,productId:"5", buyerId: "5", rating: "4", feedback: "crop sprayer quality is good",},
  //   { id: 6,productId:"6", buyerId: "6", rating: "4", feedback: "tractor needs more servicing than expected",},
  // ];

  const dispatch =useDispatch()
  const feedbacklist = useSelector((store)=>store.adminfeedbacklist)
  const { error, response, loading } = feedbacklist

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getFeedbacks())
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <>
      <Header title="Product Feedback list" />
      <div class="col-md-9 mx-auto table-responsive pt-5">
      <table className="table table-striped table-responsive table-bordered ">
        <thead>
          <tr >
            <th className="col-1" scope="col">FeedbackId</th>
            <th className="col-1" scope="col">ProductId</th>
            <th className="col-1" scope="col">BuyerId</th>
            <th className="col-1" scope="col">Rating</th>
            <th className="col-1" scope="col">Feedback</th>
          </tr>
        </thead>
        <tbody>
        {response &&
            response.feedbackList &&
            response.feedbackList.length > 0 &&
            response.feedbackList.map((feedback) => {
                return (
              <>
                <tr>
                  <th className="col-1" scope="row">{feedback.fid}</th>
                  <td className="col-1">{feedback.productId}</td>
                  <td className="col-1">{feedback.userId}</td>
                  <td className="col-1">{feedback.rating}</td>
                  <td className="col-1">{feedback.feedback}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      </div>
      {/* </div> */}
    </>
  )
}

export default FeedbackList;
