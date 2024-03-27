import {
  PRODUCTCATALOGUE_FETCH_REQUEST,
  PRODUCTCATALOGUE_FETCH_SUCCESS,
  PRODUCTCATALOGUE_FETCH_FAIL
} from '../constants/productConstants'
import axios from 'axios'

export const getProductCatalogue = () => {
  return (dispatch) => {
    dispatch({
      type: PRODUCTCATALOGUE_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/admin/get-product-catalogue'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: PRODUCTCATALOGUE_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: PRODUCTCATALOGUE_FETCH_FAIL,
          payload: error,
        })
      })
  }
}
