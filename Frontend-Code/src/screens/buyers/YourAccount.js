// import Header from '../components/Header'
// import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch } from 'react-redux'
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
    },
    {
      id: 2,
      title: 'Login & Security',
      description: 'Edit login/password',
      image: '/images/shield-lock-fill.svg',
    },
    {
      id: 3,
      title: 'Address & Bank Details',
      description: 'Edit address /Bank details',
      image: '/images/geo-alt-fill.svg',
    },

    {
      id: 4,
      title: 'Payment Option',
      description: 'Payment history/ Payment status',
      image: '/images/credit-card.svg',
    },
  ]

  // const onAddToCart = (product) => {
  //   dispatch(addToCart(product))
  // }

  return (
    <div>
      <Header title="Your Account" />

      <div className="row">
        {accountOptions.map((a) => {
          return (
            <div className="yourAccount col-md-5">
              <div className="part1">
                <div className="title">{a.title}</div>
                <div className="description">{a.description}</div>

                <div className="part2">
                  <img
                    className="card-img-top"
                    style={{ width: 70, height: 60 }}
                    src={a.image}
                    alt="inventory"
                  />
                </div>
              </div>

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
