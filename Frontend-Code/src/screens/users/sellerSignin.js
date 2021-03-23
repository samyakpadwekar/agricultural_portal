import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { sellerSignin } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SellerSigninScreen = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const sellerSignin1 = useSelector((store) => store.sellerSignin)
  const { loading, error, response } = sellerSignin1

  const dispatch = useDispatch()

  const onSellerSignin = () => {
    dispatch(sellerSignin(username, password))
  }

  useEffect(() => {
    if (response) {
      console.log('inside useEffect')
      const seller = response
      sessionStorage.setItem('sellerId', seller.sellerId)
      sessionStorage.setItem('userRole', 'SELLER')
      sessionStorage.setItem('userDetails', JSON.stringify(response))
      // NavCond()
      {
        props.history.push('/seller/home')
      }
    } else if (response && response.status === 'error') {
      console.log('failure')
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <div>
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
          <button onClick={onSellerSignin} className="btn btn-success">
            Signin
          </button>
          <div className="float-end">
            New User? <Link to="/signup">Signup here</Link>
          </div>
        </div>
      </div>
      {loading && <div>waiting for response</div>}
    </div>
  )
}

export default SellerSigninScreen
