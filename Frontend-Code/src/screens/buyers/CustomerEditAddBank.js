import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ChangePassword from '../../components/EditProfile/ChangePassword'
import EditAddress from '../../components/EditProfile/EditAddress'
import EditBankDetails from '../../components/EditProfile/EditBankDetails'
import EditPersonalInfo from '../../components/EditProfile/EditPersonalInfo'

import '../../styles/App.css'

const CustomerEditAddBank = (props) => {
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [landMark, setLandMark] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [accountNumber, setAccountNumbe] = useState('')
  const [ifsc, setIfsc] = useState('')

  axios.post()

  return (
    <div className="container">
      <div className="col-md-8 mx-auto">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <form onSubmit={''} className="form-horizontal" role="form">
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
                                      setAddressLine1(e.target.value)
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
                                    onChange={(e) => {
                                      setAddressLine2(e.target.value)
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
                                    setPincode(e.target.value)
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
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="form-group">
                                <label className="col-lg-3 control-label">
                                  IFSC Code:
                                </label>
                                <div className="col-lg-12">
                                  <input className="form-control" type="text" />
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
                      <button className="btn btn-success" value="Submit">
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
