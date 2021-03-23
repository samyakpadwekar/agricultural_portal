import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ChangePassword from '../../components/EditProfile/ChangePassword'
import EditAddress from '../../components/EditProfile/EditAddress'
import EditBankDetails from '../../components/EditProfile/EditBankDetails'
import EditPersonalInfo from '../../components/EditProfile/EditPersonalInfo'

import '../../styles/App.css'

const CustomerEditAddBank = (props) => {
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
      userDetails.bankDetails && setAccNo(userDetails.bankDetails.accNo)
      setIfscCode(userDetails.bankDetails.ifscCode)
    }
    if (userDetails.addresses) {
      userDetails.addresses && setLine1(userDetails.addresses.line1)
      setLine2(userDetails.addresses.line2)
      setPinCode(userDetails.addresses.pinCode)
      setLandMark(userDetails.addresses.landMark)
      setCity(userDetails.addresses.city)
      setState(userDetails.addresses.state)
      setCountry(userDetails.addresses.country)
    }
  }

  const onSubmit = () => {
    axios
      .put(url, body, header)
      .then((response) => {
        const temp = response.data
        console.log('inside on submit')
        alert('your address has been updated')
        sessionStorage.removeItem('userDetails')

        sessionStorage.setItem('userDetails', JSON.stringify(body))

        document.location.href = '/user/your-account'
      })
      .catch((error) => alert(`Error: ${error}`))
  }

  return (
    <div className="container">
      <div className="col-md-8 mx-auto">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <form className="form-horizontal" role="form">
                  <div className="container">
                    <h3>Edit Address Details</h3>
                    <table className="table table-borderless ">
                      <tbody>
                        <tr>
                          <td colSpan="2">
                            <div className="row">
                              <div className="form-group">
                                <label className="col-md-3 control-label">
                                  Address Line1:
                                </label>
                                <div className="col-md-12">
                                  <input
                                    onChange={(e) => {
                                      setLine1(e.target.value)
                                    }}
                                    className="form-control"
                                    type="text"
                                    value={line1}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="form-group">
                                <label className="col-lg-3 control-label">
                                  Address Line2:
                                </label>
                                <div className="col-lg-12">
                                  <input
                                    onChange={(e) => {
                                      setLine2(e.target.value)
                                    }}
                                    value={line2}
                                    className="form-control"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label className="col-lg-3 control-label">
                                Landmark:
                              </label>
                              <div className="col-lg-12">
                                <input
                                  onChange={(e) => {
                                    setLandMark(e.target.value)
                                  }}
                                  value={landMark}
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
                                PinCode:
                              </label>
                              <div className="col-lg-12">
                                <input
                                  value={pinCode}
                                  onChange={(e) => {
                                    setPinCode(e.target.value)
                                  }}
                                  className="form-control"
                                  type="number"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <label className="col-lg-3 control-label">
                                City:
                              </label>
                              <div className="col-lg-12">
                                <input
                                  value={city}
                                  onChange={(e) => {
                                    setCity(e.target.value)
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
                                State:
                              </label>
                              <div className="col-lg-12">
                                <input
                                  value={state}
                                  onChange={(e) => {
                                    setState(e.target.value)
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
                                Country:
                              </label>
                              <div className="col-lg-12">
                                <input
                                  value={country}
                                  onChange={(e) => {
                                    setCountry(e.target.value)
                                  }}
                                  className="form-control"
                                  type="text"
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="container">
                    <h3>Edit Bank Details</h3>
                    <table className="table table-borderless ">
                      <tbody>
                        <tr>
                          <td colSpan="2">
                            <div className="row">
                              <div className="form-group">
                                <label className="col-md-3 control-label">
                                  Account Number:
                                </label>
                                <div className="col-md-12">
                                  <input
                                    onChange={(e) => {
                                      setAccNo(e.target.value)
                                    }}
                                    value={accNo}
                                    className="form-control"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="form-group">
                                <label className="col-lg-3 control-label">
                                  IFSC Code:
                                </label>
                                <div className="col-lg-12">
                                  <input
                                    onChange={(e) => {
                                      setIfscCode(e.target.value)
                                    }}
                                    value={ifscCode}
                                    className="form-control"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

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
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomerEditAddBank
