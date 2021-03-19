import Navigation from './components/Navigation'
import SellerNavigation from './components/SellerNavigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupScreen from './screens/buyers/Signup'
import Buyerlist from './screens/admin/buyerslist'
import CategoryList from './screens/admin/categorylist'
import AddCategory from './screens/admin/addcategory'
import SellerList from './screens/admin/sellerlist'
import LoginScreen from './screens/users/LoginScreen'
import HomeScreen from './screens/users/HomeScreen'
import UserEditProfileScreen from './screens/users/UserEditProfileScreen'
import SellerHomeScreen from './screens/sellers/SellerHomeScreen'
import SellerEditProfileScreen from './screens/sellers/SellerEditProfileScreen'
import SellerSignupScreen from './screens/sellers/SellerSignup'
import ProductListScreen from './screens/sellers/ProductListScreen'
import AddProductScreen from './screens/sellers/AddProductScreen'
import YourAccount from './screens/buyers/YourAccount'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <SellerNavigation />
        <div className="container">
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/signup" exact component={SignupScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/admin/buyer-list" component={Buyerlist} />
            <Route path="/admin/category-list" component={CategoryList} />
            <Route path="/admin/add-category" component={AddCategory} />
            <Route path="/admin/seller-list" component={SellerList} />
            <Route
              path="/user/edit-profile"
              component={UserEditProfileScreen}
            />
            <Route
              path="/seller/edit-profile"
              component={SellerEditProfileScreen}
            />
            <Route path="/seller/home" component={SellerHomeScreen} />
            <Route
              path="/seller/product-catalogue"
              component={ProductListScreen}
            />
            <Route path="/seller-signup" component={SellerSignupScreen} />
            <Route path="/seller/add-product" component={AddProductScreen} />
            <Route path="/user/your-account" component={YourAccount} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
