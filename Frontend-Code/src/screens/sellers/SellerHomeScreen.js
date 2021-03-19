import Header from '../../components/Header'
import { Link } from "react-router-dom";

const SellerHomeScreen = (props) => {
    return (
      <div>
        <div>
          <Header title="" subtitle="" />
        </div>
        <div className="container row">
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-10">
            <div className="row" style={{paddingTop:0}}>
            
              <div className="col">
                <div className="card" style={{width: 190}}>
                  <Link to="/seller/product-list" style={{textDecoration:'none',color: '#000'}}>
                    <img className="card-img-top" style={{width: 188, height:200}} src="/images/catalogue.png" alt="Catologue"/>
                    <div className="card-body">
                      <h5 className="card-title">Product Catalogue</h5>
                      <p className="card-text">Manage your products.</p>
                    </div>
                    </Link>
                    {/* <ul className="list-group list-group-flush">
                      <li className="list-group-item">Add new Product</li>
                      <li className="list-group-item">Edit product details </li>
                      <li className="list-group-item">Remove product from catalogue</li>
                    </ul> */}
                </div>
              </div>

              <div className="col">
                <div className="card" style={{width: 190}}>
                  <Link to="/seller/inventory" style={{textDecoration:'none',color: '#000'}}>
                    <img className="card-img-top" style={{width: 188, height:200}} src="/images/inventory.png" alt="inventory"/>
                    <div className="card-body">
                      <h5 className="card-title">Inventory</h5>
                      <p className="card-text">Manage your product inventory.</p>
                    </div>
                    </Link>
                    {/* <ul className="list-group list-group-flush">
                      <li className="list-group-item">Check remaining stock</li>
                      <li className="list-group-item">Restock product </li>
                      <li className="list-group-item">Get inventory report</li>
                    </ul> */}
                </div>
              </div>

              <div className="col">
                <div className="card" style={{width: 190}}>
                  <Link to="/seller/performance" style={{textDecoration:'none',color: '#000'}}>
                    <img className="card-img-top" style={{width: 188, height:200}} src="/images/performance.png" alt="performance"/>
                    <div className="card-body">
                      <h5 className="card-title">Performance</h5>
                      <p className="card-text">Check how you are performing.</p>
                    </div>
                    </Link>
                    {/* <ul className="list-group list-group-flush">
                      <li className="list-group-item">Check customer feedback</li>
                      <li className="list-group-item">Check customer rating</li>
                      <li className="list-group-item">View complaints</li>
                    </ul> */}
                </div>
              </div>

              <div className="col">
                <div className="card" style={{width: 190}}>
                  <Link to="/seller/orders" style={{textDecoration:'none',color: '#000'}}>
                    <img className="card-img-top" style={{width: 188, height:200}} src="/images/orders.png" alt="orders"/>
                    <div className="card-body">
                      <h5 className="card-title">Orders</h5>
                      <p className="card-text">Manage your orders.</p>
                    </div>
                    </Link>
                    {/* <ul className="list-group list-group-flush">
                      <li className="list-group-item">Search orders</li>
                      <li className="list-group-item">Update order status</li>
                      <li className="list-group-item">View pending orders</li>
                    </ul> */}
                </div>
              </div>
            
            </div>
          </div>
          <div className="col-md-2">
            <div style={{width:250, position:"fixed"}}>
              <h2>Business Name</h2>
              <h4>--Business details--</h4>
            </div>
          </div>
          </div>
        
      </div>
    )
  }
  
export default SellerHomeScreen