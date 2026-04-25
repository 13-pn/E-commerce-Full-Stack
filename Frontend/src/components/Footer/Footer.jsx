import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer text-light pt-5 pb-3" style={{position:'relative',zIndex:'10'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-a  text-decoration-none">About Us</a></li>
              <li><a href="#" className="footer-a  text-decoration-none">Careers</a></li>
              <li><a href="#" className="footer-a  text-decoration-none">Blog</a></li>
              <li><a href="#" className="footer-a  text-decoration-none">Press</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-a text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="footer-a text-decoration-none">Track Order</a></li>
              <li><a href="#" className="footer-a text-decoration-none">Returns</a></li>
              <li><a href="#" className="footer-a text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-a text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="footer-a text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="footer-a text-decoration-none">Shipping Policy</a></li>
              <li><a href="#" className="footer-a text-decoration-none">Refund Policy</a></li>
            </ul>
          </div>


          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Subscribe</h5>
            <p>Get updates about new products</p>

            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
              <button className="btn btn-warning">
                Subscribe
              </button>
            </div>
          </div>

        </div>


        <div className="text-center border-top pt-3 mt-3">
          <p className="mb-0">© 2026 MyStore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;