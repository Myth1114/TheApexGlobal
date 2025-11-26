import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-xl-5"
              data-aos="fade-right"
              data-aos-offset="300"
            >
              <div className="bg-light rounded">
                <img
                  src="/images/about-2.png"
                  className="img-fluid w-100"
                  style={{ marginBottom: "-7px" }}
                  alt="Image"
                ></img>
                <img
                  src="/images/about-3.jpg"
                  className="img-fluid w-100 border-bottom border-5 border-primary"
                  style={{
                    borderTopRightRadius: "300px",
                    borderTopLeftRadius: "300px",
                  }}
                  alt="Image"
                ></img>
              </div>
            </div>
            <div
              className="col-xl-7"
              data-aos="fade-left"
              data-aos-offset="300"
            >
              <h5 className="sub-title pe-3">About the company</h5>
              <h1 className="display-5 mb-4">
                We are Trusted Immigration Consultant Agency.
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                architecto consectetur iusto perferendis blanditiis assumenda
                dignissimos, commodi fuga culpa earum explicabo libero sint est
                mollitia saepe! Sequi asperiores rerum nemo!
              </p>
              <div className="row gy-4 align-items-center">
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-map-marked-alt fa-3x text-primary"></i>
                  <h5 className="ms-4">Best Immigration Resources</h5>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-passport fa-3x text-primary"></i>
                  <h5 className="ms-4">Return Visas Availabile</h5>
                </div>
                <div className="col-4 col-md-3">
                  <div className="bg-light text-center rounded p-3">
                    <div className="mb-2">
                      <i className="fas fa-ticket-alt fa-4x text-primary"></i>
                    </div>
                    <h1 className="display-5 fw-bold mb-2">34</h1>
                    <p className="text-muted mb-0">Years of Experience</p>
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className="mb-5">
                    <p className="text-primary h6 mb-3">
                      <i className="fa fa-check-circle text-primary me-2"></i>{" "}
                      Offer 100 % Genuine Assistance
                    </p>
                    <p className="text-primary h6 mb-3">
                      <i className="fa fa-check-circle text-primary me-2"></i>{" "}
                      It’s Faster & Reliable Execution
                    </p>
                    <p className="text-primary h6 mb-3">
                      <i className="fa fa-check-circle text-primary me-2"></i>{" "}
                      Accurate & Expert Advice
                    </p>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div
                      id="phone-tada"
                      className="d-flex align-items-center justify-content-center me-4"
                    >
                      <a
                        href=""
                        className="position-relative wow tada"
                        data-wow-delay=".9s"
                      >
                        <i className="fa fa-phone-alt text-primary fa-3x"></i>
                        <div className="position-absolute">
                          <span>
                            <i className="fa fa-comment-dots text-primary"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span className="text-primary">Have any questions?</span>
                      <span className="text-primary fw-bold fs-5">
                        Free: +0123 456 7890
                      </span>
                    </div>
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

export default About;
