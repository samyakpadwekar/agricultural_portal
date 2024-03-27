import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { sellerSignin } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'

const SellerSigninScreen = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const sellerSignin1 = useSelector((store) => store.sellerSignin)
  const { loading, error, response } = sellerSignin1

  const dispatch = useDispatch()
  const userNameError = () => {
    enqueueSnackbar('Username cannot be empty', { variant: 'warning' })
  }

  const passError = () => {
    enqueueSnackbar('Password cannot be empty', { variant: 'warning' })
  }

  const validate = () => {
    if (!username) {
      userNameError()
      return false
    }
    if (!password) {
      passError()
      return false
    }
    return true
  }

  const onSellerSignin = () => {
    const isValid = validate()
    if (isValid) {
      dispatch(sellerSignin(username, password))
    }
  }
  const errornotification = () => {
    enqueueSnackbar('Invalid Credentials', { variant: 'error' })
  }
  useEffect(() => {
    if (response) {
      console.log('inside useEffect')
      const seller = response
      sessionStorage.setItem('sellerId', seller.sellerId)
      sessionStorage.setItem('userRole', 'SELLER')
      sessionStorage.setItem('businessName', seller.businessName)
      sessionStorage.setItem('address', JSON.stringify(seller.address))
      sessionStorage.setItem('userDetails', JSON.stringify(response))

      // NavCond()
      {
        document.location.href = '/seller/home'
      }
    } else if (response && response.status === 'error') {
      console.log('failure')
      errornotification()
    } else if (error) {
      errornotification()
    }
  }, [loading, error, response])

  return (
    <div className="login-screen d-flex h-100 bg-image">
      <div className="row col-md-12 align-self-center bg-text">
        <div className="col-md-6 login-page justify-content-center align-self-center">
          <h1 className="login-brand">Agrishop</h1>
          <h5>One stop shop for your complete agriculture need</h5>
        </div>
        <div className="col-md-6">
          <Header title="Seller Signin" />
          <div className="form form-signin">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                type="text"
                className="form-control"
                placeholder="username"
                required
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
            <div className="mb-3 d-grid gap-2">
              <button onClick={onSellerSignin} className="btn btn-success">
                Signin
              </button>
            </div>
            <div>
              <div className="float-start">
                Customer? <Link to="/">Signin here</Link>
              </div>
              <div className="float-end">
                New Seller? <Link to="/seller-signup">Signup here</Link>
              </div>
            </div>
            {/* <div className="mb-3">
          <div className="float-end">
            Seller? <Link to="/signup">Signin here</Link>
          </div>
        </div> */}
          </div>
          {loading && <div>waiting for response</div>}
        </div>
      </div>
    </div>
  )
}

export default SellerSigninScreen
