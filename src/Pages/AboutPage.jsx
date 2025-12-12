import React from "react";
import About from "../Section/About";
import Countries from "../Section/Countries";
import BhmDhm from "../Section/BhmDhm";
const AboutPage = () => {
  return (
    <div className="AboutPage">
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "600px" }}
        >
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
          </h3>
        </div>
      </div>
      <About />
      <Countries />
      <BhmDhm />
      <div className="container-fluid contact">
        <div className="container py-5">
          <div className="office pt-5">
            {/* Section Title */}
            <div
              className="section-title text-center mb-5"
              data-aos="fade-up"
              data-aos-duration=".3s"
            >
              <div className="sub-style">
                <h5 className="sub-title text-primary px-3">Offices</h5>
              </div>
              <h1 className="display-5 mb-4">Explore our offices</h1>
              <p className="mb-0">
                Kick-start your hospitality career with our exclusive BHM and
                DHM
              </p>
            </div>

            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up">
                <div className="office-item p-4">
                  <div className="office-img mb-4">
                    <img
                      src="/images/hotel-1.jpg"
                      className="img-fluid w-100 rounded"
                      alt="qwer"
                    />
                  </div>
                  <div className="office-content d-flex flex-column">
                    <h5 className="mb-2">ktm</h5>
                    <a href="#" className="text-secondary fs-5 mb-2">
                      bhw
                    </a>
                    <a href="#" className="text-muted fs-5 mb-2">
                      5
                    </a>
                    <p className="mb-0">qwertyu</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up">
                <div className="office-item p-4">
                  <div className="office-img mb-4">
                    <img
                      src="/images/hotel-1.jpg"
                      className="img-fluid w-100 rounded"
                      alt="qwer"
                    />
                  </div>
                  <div className="office-content d-flex flex-column">
                    <h5 className="mb-2">ktm</h5>
                    <a href="#" className="text-secondary fs-5 mb-2">
                      bhw
                    </a>
                    <a href="#" className="text-muted fs-5 mb-2">
                      5
                    </a>
                    <p className="mb-0">qwertyu</p>
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

export default AboutPage;
