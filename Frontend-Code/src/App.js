import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SellerNavigation from './components/SellerNavigation'
import CustomerNavbar from './components/CustomerNavbar'
import BuyerNav from './components/BuyerNav'
import AdminNavigation from './components/AdminNavigation'

import LoginScreen from './screens/users/LoginScreen'
import HomeScreen from './screens/users/HomeScreen'
import UserEditProfileScreen from './screens/users/UserEditProfileScreen'

import Buyerlist from './screens/admin/buyerslist'
import CategoryList from './screens/admin/categorylist'
import AddCategory from './screens/admin/addcategory'
import SellerList from './screens/admin/sellerlist'
import AddAdmin from './screens/admin/addadmin'
import FeedbackList from './screens/admin/feedbacklist'
import ComplaintList from './screens/admin/complaintlist'
import ProductReport from './screens/admin/productreport'
import MonthlyRevenue from './screens/admin/MonthlyRevenue'
import ProdRepGraph from './screens/admin/prodRepGraph'
import AdminPage from './screens/admin/adminpage'

import SellerSigninScreen from './screens/users/sellerSignin'
import SellerHomeScreen from './screens/sellers/SellerHomeScreen'
import SellerEditProfileScreen from './screens/sellers/SellerEditProfileScreen'
import SellerSignupScreen from './screens/sellers/SellerSignup'
import ProductListScreen from './screens/sellers/ProductListScreen'
import AddProductScreen from './screens/sellers/AddProductScreen'
import ProductCatalogueScreen from './screens/sellers/ProductCatalogueScreen'
import EditProductScreen from './screens/sellers/EditProductScreen'
import InventoryScreen from './screens/sellers/InventoryScreen'
import InventoryReportScreen from './screens/sellers/InventoryReportScreen'
import OrdersListScreen from './screens/sellers/OrdersListScreen'
import PerformanceScreen from './screens/sellers/PerformanceScreen'
import ProductFeedbackScreen from './screens/sellers/ProductFeedbackScreen'
import SellerOrderDetailsScreen from './screens/sellers/SellerOrderDetails'
import PaymentsScreen from './screens/sellers/PaymentsScreen'

import YourAccount from './screens/buyers/YourAccount'
import CartScreen from './screens/buyers/CartScreen'
import OrderDetails from './screens/buyers/OrderDetails'
import YourOrders from './screens/buyers/YourOrders'
import SignupScreen from './screens/buyers/Signup'
import CurrentOrders from './screens/buyers/CurrentOrders'
import CustomerEditProfileScreen from './screens/buyers/CustomerEditProfile'
import CustomerEditAddBank from './screens/buyers/CustomerEditAddBank'
import Customerhome from './screens/buyers/CustomerHome'
import AddToCartScreen from './screens/buyers/AddToCartScreen'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <SellerNavigation />
        <AdminNavigation />
        <BuyerNav />
        <div>
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/signup" exact component={SignupScreen} />
            <Route exact path="/" component={LoginScreen} />
            <Route path="/admin/add-admin" component={AddAdmin} />
            <Route path="/admin/buyer-list" component={Buyerlist} />
            <Route path="/admin/category-list" component={CategoryList} />
            <Route path="/admin/add-category" component={AddCategory} />
            <Route path="/admin/feedback-list" component={FeedbackList} />
            <Route path="/admin/complaint-list" component={ComplaintList} />
            <Route path="/admin/product-report" component={ProductReport} />
            <Route path="/admin/seller-list" component={SellerList} />
            <Route
              path="/user/edit-profile"
              component={UserEditProfileScreen}
            />
            <Route path="/admin-monthly-revenue" component={MonthlyRevenue} />
            <Route path="/admin-page" component={AdminPage} />
            <Route
              path="/admin/product-report-graph"
              component={ProdRepGraph}
            />

            <Route path="/seller-signin" component={SellerSigninScreen} />
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
            <Route
              path="/seller/inventory-report"
              component={InventoryReportScreen}
            />
            <Route path="/seller/your-orders" component={OrdersListScreen} />
            <Route path="/seller/performance" component={PerformanceScreen} />
            <Route
              path="/seller/product-feedback"
              component={ProductFeedbackScreen}
            />
            <Route
              path="/seller/product-feedback"
              component={ProductFeedbackScreen}
            />
            <Route
              path="/seller/order-details"
              component={SellerOrderDetailsScreen}
            />
            <Route path="/seller/payments" component={PaymentsScreen} />

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
            <Route path="/user/order-details" component={OrderDetails} />
            <Route path="/customer/home" component={Customerhome} />
            <Route path="/customer/addToCart" component={AddToCartScreen} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
