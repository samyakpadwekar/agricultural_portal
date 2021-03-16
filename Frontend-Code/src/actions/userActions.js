import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
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
