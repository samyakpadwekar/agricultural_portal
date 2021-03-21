import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../constants/userConstants'
import axios from 'axios'

export const signin = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      username,
      password,
    }
    const url = 'http://localhost:8080/user/authenticate'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}

export const signup = (
  userName,
  firstName,
  lastName,
  mobileNo,
  email,
  password,
  role
) => {
  return (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      userName,
      firstName,
      lastName,
      mobileNo,
      email,
      password,
      role,
    }
    const url = 'http://localhost:8080/user/register'
    axios
      .post(url, body, header)
      .then((response) => {
        console.log(response.headers)
        dispatch({
          type: USER_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}

export const getCartItems = (buyerId) => {
  return (dispatch) => {
    dispatch({
      type: USER_CART_FETCHING_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080//user/cart/' + buyerId
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: USER_CART_FETCHING_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_CART_FETCHING_FAIL,
          payload: error,
        })
      })
  }
}
