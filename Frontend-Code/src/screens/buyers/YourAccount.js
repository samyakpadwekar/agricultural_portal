// import Header from '../components/Header'
// import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import {} from '../../styles/App.css'

const YourAccount = () => {
  // const dispatch = useDispatch()

  const accountOptions = [
    {
      id: 1,
      title: 'Orders',
      description: 'Track, Return and Buy things',
      image: '/images/box.svg',
      link: '/user/your-orders',
    },
    {
      id: 2,
      title: 'Login & Security',
      description: 'Edit login/password',
      image: '/images/shield-lock-fill.svg',
      link: '/user/customer-edit-profile',
    },
    {
      id: 3,
      title: 'Address & Bank Details',
      description: 'Edit address /Bank details',
      image: '/images/geo-alt-fill.svg',
      link: '/user/customer-edit-address-bank',
    },

    {
      id: 4,
      title: 'Payment Option',
      description: 'Payment history/ Payment status',
      image: '/images/credit-card.svg',
      link: '',
    },
  ]

  // const onAddToCart = (product) => {
  //   dispatch(addToCart(product))
  // }

  return (
    <div className="container">
      <Header title="Your Account" />

      <div className="row">
        {accountOptions.map((a) => {
          return (
            <div className="yourAccount col-md-5 btn-outline-info">
              <Link to={a.link}>
                <div className="row">
                  <div className="part2 col-md-4">
                    <img
                      className="card-img-top"
                      style={{ width: 70, height: 60 }}
                      src={a.image}
                      alt="inventory"
                    />
                  </div>

                  <div className="part1 col-md-7 ">
                    <div className="title">{a.title}</div>
                    <div className="description">{a.description}</div>
                  </div>
                </div>
              </Link>
              {/* <button
                onClick={() => {
                  onAddToCart(product)
                }}
                className="btn btn-sm btn-success btn-add-to-cart">
                Add to cart
              </button> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default YourAccount
