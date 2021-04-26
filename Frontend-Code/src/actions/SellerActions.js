export const signUp = (SellerSignup = {}) => {
  return {
    type: 'seller_signup',
    payload: SellerSignup,
  }
}

export const signUp = () => {
  return {
    type: 'seller_signout',
  }
}
export const signIn = (jwtRequest = {}) => {
  return {
    type: 'seller_signin',
    payload: jwtRequest,
  }
}
