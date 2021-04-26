import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  userCartReducer,
  userSigninReducer,
  sellerSigninReducer,
  userSignupReducer,
  userOrderReducer,
} from './reducers/userReducers'
import {
  fetchComplaintReducer,
  fetchFeedbackReducer,
  fetchBuyerReducer,
  fetchSellerReducer,
  fetchProdRepReducer,
} from './reducers/adminReducers'

import { fetchProductCatalogueReducer } from './reducers/productReducer'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// combined reducers
const reducers = combineReducers({
  userSignin: userSigninReducer,
  sellerSignin: sellerSigninReducer,
  userSignup: userSignupReducer,
  adminfeedbacklist: fetchFeedbackReducer,
  admincomplaintlist: fetchComplaintReducer,
  buyerlist: fetchBuyerReducer,
  sellerlist: fetchSellerReducer,
  prodRepGraph: fetchProdRepReducer,

  productCatalogue: fetchProductCatalogueReducer,
  userCartItemsList: userCartReducer,
  userOrderList: userOrderReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
