import{
  COMPLAINT_FETCH_REQUEST,
  COMPLAINT_FETCH_SUCCESS,
  COMPLAINT_FETCH_FAIL,
  COMPLAINT_FETCH_RESET,
  FEEDBACK_FETCH_REQUEST,
  FEEDBACK_FETCH_SUCCESS,
  FEEDBACK_FETCH_FAIL,
  FEEDBACK_FETCH_RESET,
  BUYER_FETCH_REQUEST,
  BUYER_FETCH_SUCCESS,
  BUYER_FETCH_FAIL,
  BUYER_FETCH_RESET,
  SELLER_FETCH_REQUEST,
  SELLER_FETCH_SUCCESS,
  SELLER_FETCH_FAIL,
  SELLER_FETCH_RESET,
  PRODREP_FETCH_REQUEST,
  PRODREP_FETCH_SUCCESS,
  PRODREP_FETCH_FAIL,
  PRODREP_FETCH_RESET,
} from '../constants/adminConstants'

// Reducer for display complaints list
export const fetchComplaintReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPLAINT_FETCH_REQUEST:
      return { loading: true }
    case  COMPLAINT_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case COMPLAINT_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case COMPLAINT_FETCH_RESET:
      return {}
    default:
      return state
  }
}

// Reducer for display feedback list
export const fetchFeedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK_FETCH_REQUEST:
      return { loading: true }
    case  FEEDBACK_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case FEEDBACK_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case FEEDBACK_FETCH_RESET:
      return {}
    default:
      return state
  }
}


// Reducer for display buyer list
export const fetchBuyerReducer = (state = {}, action) => {
  switch (action.type) {
    case BUYER_FETCH_REQUEST:
      return { loading: true }
    case  BUYER_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case BUYER_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case BUYER_FETCH_RESET:
      return {}
    default:
      return state
  }
}

// Reducer for display seller list
export const fetchSellerReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_FETCH_REQUEST:
      return { loading: true }
    case  SELLER_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case SELLER_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case SELLER_FETCH_RESET:
      return {}
    default:
      return state
  }
}

//Reducer to fetch product report
export const fetchProdRepReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODREP_FETCH_REQUEST:
      return { loading: true }
    case  PRODREP_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case PRODREP_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case PRODREP_FETCH_RESET:
      return {}
    default:
      return state
  }
}