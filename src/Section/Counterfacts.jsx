import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Counterfacts = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="container-fluid counter-facts py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div
              className="col-12 col-sm-6 col-md-6 col-xl-3"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-passport"></i>
                </div>
                <div className="counter-content">
                  <h3>Visa Categories</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value" data-toggle="counter-up">
                      31
                    </span>
                    <h4
                      className="text-primary mb-0"
                      style={{ fontWeight: "600", fontSize: "25px" }}
                    >
                      +
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-xl-3 "
              data-aos-duration="600"
              data-aos="fade-up"
            >
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="counter-content">
                  <h3>Team Members</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value" data-toggle="counter-up">
                      377
                    </span>
                    <h4
                      className="text-primary mb-0"
                      style={{ fontWeight: "600", fontSize: "2rem" }}
                    >
                      +
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-xl-3 "
              data-aos-duration="900"
              data-aos="fade-up"
            >
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-user-check"></i>
                </div>
                <div className="counter-content">
                  <h3>Visa Process</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value" data-toggle="counter-up">
                      4.9
                    </span>
                    <h4
                      className="text-primary mb-0"
                      style={{ fonWeight: "600", fontSize: "25px" }}
                    >
                      K
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-xl-3"
              data-aos-duration="1200"
              data-aos="fade-up"
            >
              <div className="counter">
                <div className="counter-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="counter-content">
                  <h3>Success Rates</h3>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="counter-value" data-toggle="counter-up">
                      98
                    </span>
                    <h4
                      className="text-primary mb-0"
                      style={{ fontWeight: "600", fontSize: "25px" }}
                    >
                      %
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counterfacts;
