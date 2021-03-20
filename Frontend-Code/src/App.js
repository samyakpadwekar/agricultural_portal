import Navigation from './components/Navigation'
import Footer from './components/Footer'
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
import ProductCatalogueScreen from "./screens/sellers/ProductCatalogueScreen";
import EditProductScreen from './screens/sellers/EditProductScreen'
import InventoryScreen from './screens/sellers/InventoryScreen'
import InventoryReportScreen from './screens/sellers/InventoryReportScreen'
import OrdersListScreen from './screens/sellers/OrdersListScreen'
import PerformanceScreen from './screens/sellers/PerformanceScreen'

import YourAccount from './screens/buyers/YourAccount'
import CartScreen from './screens/buyers/CartScreen'

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
            <Route path="/admin/add-admin" component={AddAdmin} />
            <Route path="/admin/buyer-list" component={Buyerlist} />
            <Route path="/admin/category-list" component={CategoryList} />
            <Route path="/admin/add-category" component={AddCategory} />
            <Route path="/admin/feedback-list" component={FeedbackList} />
            <Route path="/admin/complaint-list" component={ComplaintList} />
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
            <Route path="/seller/product-list" component={ProductListScreen} />
            <Route
              path="/seller/product-catalogue"
              component={ProductCatalogueScreen}
            />
            <Route path="/seller-signup" component={SellerSignupScreen} />
            <Route path="/seller/add-product" component={AddProductScreen} />
            <Route path="/seller/edit-product" component={EditProductScreen} />
            <Route path="/seller/inventory" component={InventoryScreen} />
            <Route path="/seller/inventory-report" component={InventoryReportScreen} />
            <Route path="/seller/your-orders" component={OrdersListScreen} />
            <Route path="/seller/performance" component={PerformanceScreen} />

            <Route path="/user/your-account" component={YourAccount} />
            <Route path="/user/my-cart" component={CartScreen} />
            <Route path="/user/your-orders" component={YourOrders} />
            <Route path="/user/current-orders" component={CurrentOrders} />
            <Route
              path="/user/customer-edit-profile"
              component={CustomerEditProfileScreen}
            />
            <Route
              path="/user/customer-edit-address-bank"
              component={CustomerEditAddBank}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
