import {
  PRODUCTCATALOGUE_FETCH_REQUEST,
  PRODUCTCATALOGUE_FETCH_SUCCESS,
  PRODUCTCATALOGUE_FETCH_FAIL
} from '../constants/productConstants'

export const fetchProductCatalogueReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCTCATALOGUE_FETCH_REQUEST:
      return { loading: true }
    case PRODUCTCATALOGUE_FETCH_SUCCESS:
      return { loading: true, response: action.payload }
    case PRODUCTCATALOGUE_FETCH_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
