import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import '../../styles/App.css'

const SignupScreen = () => {
  return (
    <div className="container">
      <Header title="Signup" />
      <div className="form-signup form">
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
          <label className="form-label">Mobile number</label>
          <input type="text" className="form-control" placeholder="Mobile" />
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
          <label className="form-label">Role</label>
          <input
            type="Phone"
            className="form-control"
            placeholder="Phone"
            value="Buyer"
            readOnly="true"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-success">Signup</button>
          <div className="float-end">
            Existing user? <Link to="/login">Signin here</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupScreen
