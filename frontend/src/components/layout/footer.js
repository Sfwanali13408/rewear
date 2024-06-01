import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkedAlt, faPhone, faMoneyBill, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Contact Section */}
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              13408@students.riphah.edu.pk
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              +923471976826
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" />
              Riphah International University I-14/3, Hajj Complex Islamabad.
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-4">
            <h3>Subscribe to our Newsletter</h3>
            <form action="#" method="POST" className="d-flex">
              <input type="email" name="email" placeholder="Enter your email" required className="form-control me-2" style={{outlineColor:'black'}}/>
              <button type="submit" className="btn btn-success" style={{backgroundColor:'goldenrod', border:'none'}}>Subscribe</button>
            </form>
          </div>

          {/* Links Section */}
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="about-page" className="text-white">About us</a></li>
              <li><a href="privacy-policy" className="text-white">Privacy Policy</a></li>
              <li><a href="faq's" className="text-white">FAQ's</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <h3>We offer these payment methods</h3>
            <div className="d-flex justify-content-center">
              <div className="me-4 text-center">
                <FontAwesomeIcon icon={faCcMastercard} size="2x" />
                <span className="d-block">Mastercard</span>
              </div>
              <div className="me-4 text-center">
                <FontAwesomeIcon icon={faMoneyBill} size="2x" />
                <span className="d-block">Installments</span>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faHandHoldingUsd} size="2x" />
                <span className="d-block">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center py-3">
        <p className="mb-0">&copy; 2024 Re-Wear. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
