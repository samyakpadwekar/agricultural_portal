import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signup } from '../../actions/userActions'
import Header from '../../components/Header'
import '../../styles/App.css'

const SignupScreen = (props) => {
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('CUSTOMER')

  const dispatch = useDispatch()
  const userSignup = useSelector((store) => store.userSignup)
  const { loading, response, error } = userSignup

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response && response.status === 'OK') {
      props.history.push('/login')
    } else if (error) {
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    dispatch(
      signup(userName, firstName, lastName, mobileNo, email, password, role)
    )
  }

  return (
    <div className="container">
      <Header title="User Signup" />
      <div className="form-signup form">
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            onChange={(e) => {
              setLastName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile number</label>
          <input
            onChange={(e) => {
              setMobileNo(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="Mobile"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
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
            value="CUSTOMER"
            readOnly="true"
          />
        </div>
        <div className="mb-3">
          <button onClick={onSignup} className="btn btn-success">
            Signup
          </button>
          <div className="float-end">
            Existing user? <Link to="/login">Signin here</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupScreen
