import React from "react";

const TopNavbar = () => {
  return (
    <div>
      <div className="container-fluid bg-primary px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-5 text-center text-lg-start mb-lg-0">
            <div className="d-flex">
              <a href="#" className="text-muted me-4">
                <i className="fas fa-envelope text-secondary me-2"></i>
                Example@gmail.com
              </a>
              <a href="#" className="text-muted me-0">
                <i className="fas fa-phone-alt text-secondary me-2"></i>
                +01234567890
              </a>
            </div>
          </div>
          <div className="col-lg-3 row-cols-1 text-center mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-twitter fw-normal text-secondary"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-facebook-f fw-normal text-secondary"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-linkedin-in fw-normal text-secondary"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle me-2"
                href=""
              >
                <i className="fab fa-instagram fw-normal text-secondary"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-square rounded-circle"
                href=""
              >
                <i className="fab fa-youtube fw-normal text-secondary"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <a href="#" className="text-muted me-2">
                Help
              </a>
              <small> / </small>
              <a href="#" className="text-muted mx-2">
                Support
              </a>
              <small> / </small>
              <a href="#" className="text-muted ms-2">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
