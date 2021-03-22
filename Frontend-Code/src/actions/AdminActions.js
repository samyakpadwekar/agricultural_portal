import{
  COMPLAINT_FETCH_REQUEST,
  COMPLAINT_FETCH_SUCCESS,
  COMPLAINT_FETCH_FAIL,
  FEEDBACK_FETCH_REQUEST,
  FEEDBACK_FETCH_SUCCESS,
  FEEDBACK_FETCH_FAIL,
  BUYER_FETCH_REQUEST,
  BUYER_FETCH_SUCCESS,
  BUYER_FETCH_FAIL,
  SELLER_FETCH_REQUEST,
  SELLER_FETCH_SUCCESS,
  SELLER_FETCH_FAIL,
  PRODREP_FETCH_REQUEST,
  PRODREP_FETCH_SUCCESS,
  PRODREP_FETCH_FAIL,
} from '../constants/adminConstants'
import axios from 'axios'


export const getFeedbacks = () => {
  return (dispatch) => {
    dispatch({
      type: FEEDBACK_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/admin/customer-feedbacks'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: FEEDBACK_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: FEEDBACK_FETCH_FAIL,
          payload: error,
        })
      })
  }
}


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

export const getbuyers = () => {
  return (dispatch) => {
    dispatch({
      type: BUYER_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/admin/list-all-customer'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: BUYER_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: BUYER_FETCH_FAIL,
          payload: error,
        })
      })
  }
}


export const getSellers = () => {
  return (dispatch) => {
    dispatch({
      type: SELLER_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/admin/list-all-seller'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: SELLER_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: SELLER_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

export const getProductRep = () => {
  return (dispatch) => {
    dispatch({
      type: PRODREP_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/admin/product-report'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: PRODREP_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PRODREP_FETCH_FAIL,
          payload: error,
        })
      })
  }
}



export const showSellers = () => {
  return {
    type: 'show-seller',
    payload: '',
  }
}
