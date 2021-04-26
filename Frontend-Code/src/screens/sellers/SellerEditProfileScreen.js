import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ChangePassword from '../../components/EditProfile/ChangePassword'
import EditAddress from '../../components/EditProfile/EditAddress'
import EditBankDetails from '../../components/EditProfile/EditBankDetails'
import EditSellerPersonalInfo from '../../components/EditProfile/EditSellerPersonalInfo'

import '../../styles/App.css'

const SellerEditProfileScreen = (props) => {
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  //const [userDetails, setUserDetails] = useState()
  const [sellerId, setsellerId] = useState()
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
  const [aadharNo, setAadharNo] = useState()
  const [gstin, setGstin] = useState()
  const [pan, setPan] = useState()
  const [businessName, setbusinessName] = useState()
  const [status, setStatus] = useState()

  useEffect(() => {
    loading()
  }, [])

  const url = 'http://localhost:8080/seller/update-profile'

  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = {
    sellerId,
    userName,
    firstName,
    lastName,
    email,
    mobileNo,
    password,
    aadharNo,
    gstin,
    pan,
    businessName,
    regDate,
    status,
    address: {
      pinCode,
      line1,
      line2,
      landMark,
      city,
      state,
      country,
    },
    bankDetail: {
      ifscCode,
      accNo,
    },
  }

  const loading = () => {
    //setUserDetails(JSON.parse(sessionStorage.getItem('userDetails')))
    // console.log(userDetails)
    setStatus(userDetails.status)
    setsellerId(userDetails.sellerId)
    setUserName(userDetails.userName)
    setFirstName(userDetails.firstName)
    setLastName(userDetails.lastName)
    setEmail(userDetails.email)
    setMobileNo(userDetails.mobileNo)
    setPassword(userDetails.password)
    setRegDate(userDetails.regDate)
    setRole(userDetails.role)
    setAadharNo(userDetails.aadharNo)
    setPan(userDetails.pan)
    setGstin(userDetails.gstin)
    setbusinessName(userDetails.businessName)

    if (userDetails.bankDetail) {
      setAccNo(userDetails.bankDetail.accNo)
      setIfscCode(userDetails.bankDetail.ifscCode)
    }
    if (userDetails.address) {
      setLine1(userDetails.address.line1)
      console.log('line1' + line1)
      setLine2(userDetails.address.line2)
      console.log('line2' + line2)
      setPinCode(userDetails.address.pinCode)
      console.log('pincode' + pinCode)
      setLandMark(userDetails.address.landMark)
      console.log('landmark' + landMark)
      setCity(userDetails.address.city)
      console.log('city' + city)
      setState(userDetails.address.state)
      console.log('state' + state)
      setCountry(userDetails.address.country)
      console.log('country' + country)
    }
  }

  const executeFun = () => {
    axios
      .put(url, body, header)
      .then((response) => {
        const temp = response.data
        console.log('inside on submit')
        alert('your profile has been updated')
        sessionStorage.removeItem('userDetails')
        sessionStorage.setItem('userDetails', JSON.stringify(body))
        document.location.href = '/seller/home'
      })
      .catch((error) => alert(`Error: ${error}`))
  }

  const onSubmit = () => {
    if (password) {
      if (password === newPassword) executeFun()
    } else if (newPassword) {
      alert('confirm password must match with new password')
    } else {
      executeFun()
    }
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
                                    className="form-control"
                                    type="text"
                                    value={userName}
                                    readOnly="true"
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            <div className="row">
                              <div className="form-group">
                                <label className="col-md-3 control-label">
                                  Business Name:
                                </label>
                                <div className="col-md-12">
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={businessName}
                                    onChange={(e) =>
                                      setbusinessName(e.target.value)
                                    }
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
                                    value={firstName}
                                    onChange={(e) => {
                                      setFirstName(e.target.value)
                                    }}
                                    className="form-control"
                                    type="text"
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
                                  className="form-control"
                                  type="text"
                                  onChange={(e) => {
                                    setEmail(e.target.value)
                                  }}
                                  value={email}
                                  readOnly="true"
                                />
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="form-group">
                              <label className="col-lg-6 control-label">
                                PAN Card No :
                              </label>
                              <div className="col-lg-12">
                                <input
                                  value={pan}
                                  onChange={(e) => setPan(e.target.value)}
                                  className="form-control"
                                  type="text"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <label className="col-lg-6 control-label">
                                AAdhar No :
                              </label>
                              <div className="col-lg-12">
                                <input
                                  className="form-control"
                                  type="text"
                                  value={aadharNo}
                                  onChange={(e) => setAadharNo(e.target.value)}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td colSpan="2">
                            <div className="row">
                              <div className="form-group">
                                <label className="col-md-3 control-label">
                                  GSTIN :
                                </label>
                                <div className="col-md-12">
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={gstin}
                                    onChange={(e) => setGstin(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
                                    value={line1}
                                    onChange={(e) => {
                                      setLine1(e.target.value)
                                    }}
                                    className="form-control"
                                    type="text"
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
                                    value={line2}
                                    onChange={(e) => {
                                      setLine2(e.target.value)
                                    }}
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
                                  value={landMark}
                                  onChange={(e) => {
                                    setLandMark(e.target.value)
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
                                PinCode:
                              </label>
                              <div className="col-lg-12">
                                <input
                                  onChange={(e) => {
                                    setPinCode(e.target.value)
                                  }}
                                  className="form-control"
                                  type="number"
                                  value={pinCode}
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
                                  required
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
                                  required
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
                                    value={accNo}
                                    onChange={(e) => {
                                      setAccNo(e.target.value)
                                    }}
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
                                    value={ifscCode}
                                    onChange={(e) => {
                                      setIfscCode(e.target.value)
                                    }}
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
                      <Link to="/seller/home">
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
export default SellerEditProfileScreen
