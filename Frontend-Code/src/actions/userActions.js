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
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_ORDERS_FETCH_REQUEST,
  USER_ORDERS_FETCH_REQUEST_FAILURE,
  USER_ORDERS_FETCH_REQUEST_SUCCESS,
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

export const sellerSignin = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: SELLER_SIGNIN_REQUEST,
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
    const url = 'http://localhost:8080/seller/authenticate'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: SELLER_SIGNIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: SELLER_SIGNIN_FAIL,
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

export const getUserOrders = () => {
  return (dispatch) => {
    dispatch({
      type: USER_ORDERS_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const buyerId = sessionStorage.getItem('userId')
    const url = 'http://localhost:8080/customer/your-order/' + buyerId
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: USER_ORDERS_FETCH_REQUEST_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_ORDERS_FETCH_REQUEST_FAILURE,
          payload: error,
        })
      })
  }
}

export const addCartItems = (cartId, quantity, productId, userId) => {
  return (dispatch) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      cartId,
      quantity,
      productId,
      userId,
    }

    const url = 'http://localhost:8080/user/cart/add'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: 'ADD_TO_CART',
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log('Error in adding item')
        dispatch({
          type: error,
        })
      })
  }
}

export const removeCartItem = (id, quantity, productId, userId) => {
  return (dispatch) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      id,
      quantity,
      productId,
      userId,
    }

    const url = 'http://localhost:8080/user/cart/update'
    axios
      .put(url, body, header)
      .then((response) => {
        dispatch({
          type: 'REMOVE_FROM_CART',
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log('Error in adding item')
        dispatch({
          type: error,
        })
      })
  }
}

export const checkoutCart = (userId) => {
  return (dispatch) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    // const body = {
    //   userId,
    // }

    const url = 'http://localhost:8080/order/place-order/' + userId
    axios
      .post(url, header)
      .then((response) => {
        dispatch({
          type: '',
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log('Error while placing order')
      })
  }
}

export const deleteCartItems = (cartId) => {
  return (dispatch) => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const url = 'http://localhost:8080/user/cart/delete/' + cartId
    axios
      .delete(url, header)
      .then((response) => {
        dispatch({
          type: '',
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log('Error in deleting item')
      })
  }
}
