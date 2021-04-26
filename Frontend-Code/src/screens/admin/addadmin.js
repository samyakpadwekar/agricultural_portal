import { useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import '../../styles/App.css'
import { useSnackbar } from 'notistack'

const AddAdmin = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const [userName, setUserName] = useState()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const role = 'ADMIN'

  const url = 'http://localhost:8080/user/register'

  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = {
    userName,
    firstName,
    lastName,
    email,
    mobileNo,
    password,
    role,
  }

  const validate = () => {
    if (!email) {
      enqueueSnackbar("Email can't be empty", { variant: 'warning' })
      return false
    } else if (!email.includes('@')) {
      enqueueSnackbar('Invalid Email', { variant: 'warning' })
      return false
    }

    if (!password) {
      enqueueSnackbar("Password can't be empty", { variant: 'warning' })
      return false
    }

    if (!userName) {
      enqueueSnackbar("UserName can't be empty", { variant: 'warning' })
      return false
    }

    if (!firstName) {
      enqueueSnackbar("FirstName can't be empty", { variant: 'warning' })
      return false
    }

    if (!lastName) {
      enqueueSnackbar("LastName can't be empty", { variant: 'warning' })
      return false
    }

    if (!mobileNo) {
      enqueueSnackbar("Mobile Number can't be empty", { variant: 'warning' })
      return false
    }

    return true
  }

  const addAdmin = () => {
    const isValid = validate()
    console.log(isValid)
    if (isValid) {
      axios
        .post(url, body, header)
        .then((response) => {
          //notify()
          props.history.push('/admin-page')
        })
        .catch((error) => console.error(`Error: ${error}`))
    }
  }

  return (
    <div className="container">
      <Header title="Add Admin" />
      <div className="form-signup form">
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            className="form-control"
            required></input>
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
            value="ADMIN"
            readOnly="true"
          />
        </div>
        <div className="mb-3">
          <button onClick={addAdmin} className="btn btn-success">
            Add Admin
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddAdmin
