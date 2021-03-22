import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-light">
          <div className="footer-widget lead col-md-4 ">
            <h2>AgriShop</h2>
            <div className="contact-info">
              <Link to="/about-us">
                <span className="nav-link footer-link">
                  <img
                    src="/./images/file-person.svg"
                    className="bi bi-file-person"
                    alt=""/>
                  About Us
                </span>
              </Link>
              <Link to="/faqs">
                <span className="nav-link footer-link">
                  <img
                    src="/./images/question-square.svg"
                    className="bi bi-question-square" alt=""></img>
                  FAQs
                </span>
              </Link>
              <Link to="/faqs">
                <span className="nav-link footer-link">
                  <img
                    src="/./images/person-lines-fill.svg"
                    className="bi bi-question-square" alt=""></img>
                  Contact Us
                </span>
              </Link>
              <Link to="/faqs">
                <span className="nav-link footer-link">
                  <img
                    src="/./images/shield-lock.svg"
                    className="bi bi-shield-lock" alt=""></img>
                  Privacy Policy
                </span>
              </Link>
              <Link to="/faqs">
                <span className="nav-link footer-link">
                  <img
                    src="/./images/file-earmark-ruled-fill.svg"
                    className="bi bi-file-earmark-ruled-fill" alt=""></img>
                  Terms and Conditions
                </span>
              </Link>
              <Link to="/faqs">
                <span className="nav-link footer-link">
                  <img
                    src="/./images/laptop-fill.svg"
                    className="bi bi-laptop-fill" alt=""></img>
                  Careers At AgriShop
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Download Our App</h4>
            <div className="download-app">
              <Link to="https://www.googplaystore.com/" target="_blank">
                <span className="nav-link">
                  <img src="/./images/gPlayStore.jpg" alt=""></img>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Get Social With Us</h3>
            <div className="row">
              <div className="social-us">
                <Link to="/facebook.com">
                  <img
                    src="/./images/facebook.svg"
                    className="bi bi-facebook" alt=""></img>
                </Link>
                <Link to="/instagram.com">
                  <img
                    src="/./images/instagram.svg"
                    className="bi bi-instagram" alt=""></img>
                </Link>
                <Link to="/twitter.com">
                  <img src="/./images/twitter.svg" className="" alt=""></img>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-light bg-dark">
            CopyRight @ 2020-2022 AgriShop Agriculture Partal Pvt. Ltd.
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
