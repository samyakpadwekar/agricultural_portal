import{
  COMPLAINT_FETCH_REQUEST,
  COMPLAINT_FETCH_SUCCESS,
  COMPLAINT_FETCH_FAIL,
  COMPLAINT_FETCH_RESET,
} from '../constants/adminConstants'

// Reducer for display complaints list
export const fetchNotesReducer = (state = {}, action) => {
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