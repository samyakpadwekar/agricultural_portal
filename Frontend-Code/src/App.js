import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import SellerNavigation from './components/SellerNavigation'
import { React } from 'react'
import './styles/App.css'

import LoginScreen from './screens/users/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import UserEditProfileScreen from './screens/users/UserEditProfileScreen'

import SellerHomeScreen from './screens/sellers/SellerHomeScreen'
import SellerEditProfileScreen from './screens/sellers/SellerEditProfileScreen'
import SellerSignupScreen from './screens/sellers/SellerSignup'
import ProductListScreen from './screens/sellers/ProductListScreen'

import SignupScreen from './screens/users/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <SellerNavigation /> {/* should be visible only for seller */}
        <div className="container">
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/edit-profile" component={UserEditProfileScreen} />
            <Route
              path="/seller-edit-profile"
              component={SellerEditProfileScreen}
            />
            <Route path="/seller/home" component={SellerHomeScreen} />
            <Route path="/seller/product-catalogue" component={ProductListScreen} />
            <Route path="/seller-signup" component={SellerSignupScreen} />
            <Route path="/signup" component={SignupScreen} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
