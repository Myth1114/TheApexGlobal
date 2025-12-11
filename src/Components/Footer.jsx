import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid footer py-5 wow fadeIn"
      data-wow-delay="0.2s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Contact Info</h4>
              <a href="">
                <i className="fa fa-map-marker-alt me-2"></i> Baluwatar,
                Kathmandu, 44600
              </a>
              <a href="">
                <i className="fas fa-envelope me-2"></i> globaltheapex@gmail.com
              </a>
              <a href="">
                <i className="fas fa-phone me-2"></i> +977 9802390001
              </a>
              <a href="" className="mb-3">
                <i className="fas fa-phone me-2"></i> +977 9802390002
              </a>
              <div className="d-flex align-items-center">
                <i className="fas fa-share fa-2x text-secondary me-2"></i>
                <a
                  className="btn mx-1"
                  href="https://www.facebook.com/profile.php?id=61582785184712"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn mx-1" href="">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  className="btn mx-1"
                  href="https://www.instagram.com/theapexglobal/"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn mx-1" href="https://wa.me/+9779802390001">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Opening Time</h4>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Sun - Friday:</h6>
                <p className="text-white mb-0">09.00 am to 06.00 pm</p>
              </div>
              {/* <div className="mb-3">
                <h6 className="text-muted mb-0">Saturday:</h6>
                <p className="text-white mb-0">10.00 am to 05.00 pm</p>
              </div> */}
              <div className="mb-3">
                <h6 className="text-muted mb-0">Vacation:</h6>
                <p className="text-white mb-0">All Saturday is our vacation</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-primary mb-4">Our Services</h4>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2"></i> University Selection
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2"></i> Scholarship Guidance
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2"></i> Documentation
                Assistance
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2"></i> Visa Application
                Support
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2"></i> Counselling
              </a>
              <a href="#" className="">
                <i className="fas fa-angle-right me-2"></i> Pre-Departure &
                Post-Arrival Services
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="text-primary mb-4">Newsletter</h4>
              <p className="text-white mb-3">
                Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="position-relative mx-auto rounded-pill">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
