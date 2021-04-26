import {
  USER_CART_FETCHING_FAIL,
  USER_CART_FETCHING_REQUEST,
  USER_CART_FETCHING_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  SELLER_SIGNIN_FAIL,
  SELLER_SIGNIN_REQUEST,
  SELLER_SIGNIN_SUCCESS,
  SELLER_SIGNOUT,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_ORDERS_FETCH_REQUEST,
  USER_ORDERS_FETCH_REQUEST_SUCCESS,
  USER_ORDERS_FETCH_REQUEST_FAILURE,
} from '../constants/userConstants'

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      return { loading: true, response: action.payload }
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}

export const sellerSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_SIGNIN_REQUEST:
      return { loading: true }
    case SELLER_SIGNIN_SUCCESS:
      return { loading: true, response: action.payload }
    case SELLER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case SELLER_SIGNOUT:
      return {}
    default:
      return state
  }
}

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userCartReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CART_FETCHING_REQUEST:
      return { loading: true }
    case USER_CART_FETCHING_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_CART_FETCHING_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ORDERS_FETCH_REQUEST:
      return state
    case USER_ORDERS_FETCH_REQUEST_SUCCESS:
      return { response: action.payload }
    case USER_ORDERS_FETCH_REQUEST_FAILURE:
      return { error: action.payload }
    default:
      return state
  }
}
