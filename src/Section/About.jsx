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
                Connecting Bright Minds to World-Class Destinations.
              </h1>
              <p className="mb-4">
                The Apex Global Pvt. Ltd. is a trusted international education
                consultancy dedicated to guiding students toward top global
                universities through expert counseling, scholarship assistance,
                and comprehensive admission-to-visa support. We transform
                academic aspirations into reality with personalized services
                that ensure a smooth, successful, and confidence-filled study
                abroad journey.
              </p>
              <div className="row gy-4 align-items-center">
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i class="fas fa-university fa-3x text-primary"></i>
                  <h5 className="ms-4">University Admission</h5>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <i className="fas fa-passport fa-3x text-primary"></i>
                  <h5 className="ms-4">Visa Processing</h5>
                </div>
                {/* <div className="col-4 col-md-3">
                  <div className="bg-light text-center rounded p-3">
                    <div className="mb-2">
                      <i className="fas fa-ticket-alt fa-4x text-primary"></i>
                    </div>
                    <h1 className="display-5 fw-bold mb-2">34</h1>
                    <p className="text-muted mb-0">Years of Experience</p>
                  </div>
                </div> */}
                <div className="col-12 col-md-12">
                  <div className="mb-5">
                    <p className="text-primary h6 mb-3">
                      <i className="fa fa-check-circle text-primary me-2"></i>{" "}
                      Course selection, application processing, documentation,
                      scholarships, and visa guidance.
                    </p>
                    <p className="text-primary h6 mb-3">
                      <i className="fa fa-check-circle text-primary me-2"></i>{" "}
                      Comprehensive training for IELTS, PTE, and HSK with
                      score-focused strategies.
                    </p>
                    <p className="text-primary h6 mb-3">
                      <i className="fa fa-check-circle text-primary me-2"></i>{" "}
                      International internships in hospitality, corporate
                      sectors, and more.
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
                        Call: +977 9802390001
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
