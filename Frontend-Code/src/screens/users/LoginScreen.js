import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { signin } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'

const LoginScreen = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const userSignin = useSelector((store) => store.userSignin)
  const { loading, error, response } = userSignin

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

  const onSignin = () => {
    const isValid = validate()
    if (isValid) {
      dispatch(signin(username, password))
    }
  }

  const errornotification = () => {
    enqueueSnackbar('Invalid Credentials', { variant: 'error' })
  }

  useEffect(() => {
    if (response) {
      console.log('inside useEffect')
      const user = response
      sessionStorage.setItem('userDetails', JSON.stringify(user))
      sessionStorage.setItem('userId', user.userId)
      sessionStorage.setItem('userRole', user.role)
      // NavCond()
      if (user.role === 'CUSTOMER') {
        // props.history.push('/customer/home')
        document.location.href = '/customer/home'
      }
      if (user.role === 'ADMIN') {
        // props.history.push('/admin-page')
        document.location.href = '/admin-page'
      }
    } else if (response && response.status === 'error') {
      console.log('failure')
      alert(response.error)
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
          <Header title="Signin" />
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
              <button onClick={onSignin} className="btn btn-success">
                Signin
              </button>
            </div>
            <div>
              <div className="float-start">
                Seller? <Link to="/seller-signin">Signin here</Link>
              </div>
              <div className="float-end">
                New User? <Link to="/signup">Signup here</Link>
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

export default LoginScreen
