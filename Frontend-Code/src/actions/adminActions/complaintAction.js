import{
  COMPLAINT_FETCH_REQUEST,
  COMPLAINT_FETCH_SUCCESS,
  COMPLAINT_FETCH_FAIL,
  COMPLAINT_FETCH_RESET,
} from '../../constants/adminConstants'
import axios from 'axios'

export const getComplaints = () => {
  return (dispatch) => {
    dispatch({
      type: COMPLAINT_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/admin/list-all-complaints'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: COMPLAINT_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: COMPLAINT_FETCH_FAIL,
          payload: error,
        })
      })
  }
}