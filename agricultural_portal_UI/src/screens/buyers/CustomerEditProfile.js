import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaRegClosedCaptioning } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ChangePassword from '../../components/EditProfile/ChangePassword'
import EditAddress from '../../components/EditProfile/EditAddress'
import EditBankDetails from '../../components/EditProfile/EditBankDetails'
import EditPersonalInfo from '../../components/EditProfile/EditPersonalInfo'

import '../../styles/App.css'

const CustomerEditProfileScreen = (props) => {
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  //const [userDetails, setUserDetails] = useState()
  const [userId, setUserId] = useState()
  const [userName, setUserName] = useState()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [regDate, setRegDate] = useState('')
  const [pinCode, setPinCode] = useState('')
  const [landMark, setLandMark] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [ifscCode, setIfscCode] = useState('')
  const [accNo, setAccNo] = useState('')
  const [result, setResult] = useState('')

  useEffect(() => {
    loading()
  }, [])

  const url = 'http://localhost:8080/user/edit-profile'

  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = {
    userId,
    userName,
    firstName,
    lastName,
    email,
    mobileNo,
    password,
    role,
    addresses: {
      pinCode,
      line1,
      line2,
      landMark,
      city,
      state,
      country,
    },
    bankDetails: {
      ifscCode,
      accNo,
    },
  }

  const loading = () => {
    //setUserDetails(JSON.parse(sessionStorage.getItem('userDetails')))
    // console.log(userDetails)
    setUserId(userDetails.userId)
    setUserName(userDetails.userName)
    setFirstName(userDetails.firstName)
    setLastName(userDetails.lastName)
    setEmail(userDetails.email)
    setMobileNo(userDetails.mobileNo)
    setPassword(userDetails.password)
    setRegDate(userDetails.regDate)
    setRole(userDetails.role)
    if (userDetails.bankDetails) {
      setAccNo(userDetails.bankDetails.accNo)
      setIfscCode(userDetails.bankDetails.ifscCode)
    }
    if (userDetails.addresses) {
      setLine1(userDetails.addresses.line1)
      setLine2(userDetails.addresses.line2)
      setPinCode(userDetails.addresses.pinCode)
      setLandMark(userDetails.addresses.landMark)
      setCity(userDetails.addresses.city)
      setState(userDetails.addresses.state)
      setCountry(userDetails.addresses.country)
    }
  }

  const onSubmit = () => {
    if (newPassword === password) {
      setPassword(newPassword)
      axios
        .put(url, body, header)
        .then((response) => {
          const temp = response.data
          alert('your profile has been updated')
          sessionStorage.removeItem('userDetails')
          sessionStorage.setItem('userDetails', JSON.stringify(body))
          props.history.push('/user/your-account')
        })
        .catch((error) => console.error(`Error: ${error}`))
    } else {
      alert('confirm password must match with new password')
    }
  }

  return (
    <div className="container">
      <div className="col-md-8 mx-auto">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <div className="container">
                  <h3>Edit Profile</h3>
                  <table className="table table-borderless ">
                    <tbody>
                      <tr>
                        <td colSpan="2">
                          <div className="row">
                            <div className="form-group">
                              <label className="col-md-3 control-label">
                                Username:
                              </label>
                              <div className="col-md-12">
                                <input
                                  value={userName}
                                  className="form-control"
                                  type="text"
                                  readOnly
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="row">
                            <div className="form-group">
                              <label className="col-lg-3 control-label">
                                First name:
                              </label>
                              <div className="col-lg-12">
                                <input
                                  onChange={(e) => {
                                    setFirstName(e.target.value)
                                  }}
                                  className="form-control"
                                  type="text"
                                  value={firstName}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <label className="col-lg-3 control-label">
                              Last name:
                            </label>
                            <div className="col-lg-12">
                              <input
                                value={lastName}
                                onChange={(e) => {
                                  setLastName(e.target.value)
                                }}
                                className="form-control"
                                type="text"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-group">
                            <label className="col-lg-3 control-label">
                              Mobile No:
                            </label>
                            <div className="col-lg-12">
                              <input
                                value={mobileNo}
                                onChange={(e) => {
                                  setMobileNo(e.target.value)
                                }}
                                className="form-control"
                                type="text"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <label className="col-lg-3 control-label">
                              Email:
                            </label>
                            <div className="col-lg-12">
                              <input
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value)
                                }}
                                className="form-control"
                                type="text"
                                readOnly
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="container">
                  <h3>Change Password</h3>
                  <table className="table table-borderless ">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-group">
                            <label className="col-md-3 control-label">
                              New Password:
                            </label>
                            <div className="col-md-6">
                              <input
                                onChange={(e) => {
                                  setNewPassword(e.target.value)
                                }}
                                className="form-control"
                                type="password"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-md-3 control-label">
                              Confirm password:
                            </label>
                            <div className="col-md-6">
                              <input
                                onChange={(e) => {
                                  setPassword(e.target.value)
                                }}
                                className="form-control"
                                type="password"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="form-group">
                    <label className="col-md-3 control-label"></label>
                    <div className="col-md-12">
                      <button
                        onClick={onSubmit}
                        className="btn btn-success"
                        value="Submit">
                        Submit
                      </button>
                      <Link to="/user/your-account">
                        <button
                          className="btn btn-warning float-end"
                          value="Cancel">
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomerEditProfileScreen
