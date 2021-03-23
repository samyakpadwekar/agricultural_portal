import { Link } from 'react-router-dom'
import Header from '../../components/Header'

import '../../styles/App.css'

const SellerSignupScreen = () => {
  return (
    <div className="container">
      <Header title="Signup" />
      <div className="row">
        <div className="col-mb-8 mx-auto">
          <div className="sellerSignup">
            <div className="form-horizontal">
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input className="form-control"></input>
              </div>

              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input className="form-control"></input>
              </div>

              <div className="mb-3">
                <label className="form-label">Business Name</label>
                <input className="form-control"></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="phone"
                  className="form-control"
                  placeholder="Mobile"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="test@test.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*****"></input>
              </div>
              <div className="mb-3">
                <label className="form-label">GSTIN</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <button className="btn btn-success">Signup</button>
                <div className="float-end">
                  Existing user? <Link to="/seller-signin">Signin here</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerSignupScreen
