import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userSigninReducer, userSignupReducer } from './reducers/userReducers'
import { fetchNotesReducer } from './reducers/adminReducers'
import { fetchProductCatalogueReducer } from './reducers/productReducer'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// combined reducers
const reducers = combineReducers({
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  admincomplaintlist: fetchNotesReducer,
  productCatalogue: fetchProductCatalogueReducer,
  userCartItemsList: userCartReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
