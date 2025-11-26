import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Carousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="/vite.svg" className="img-fluid" alt="Image"></img>
              <div className="carousel-caption">
                <div className="text-center p-4" style={{ maxWidth: "900px" }}>
                  <h4
                    className="text-white text-uppercase fw-bold mb-3 mb-md-4"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    Solution For All Type Of Visas
                  </h4>
                  <h1
                    className="display-1 text-capitalize text-white mb-3 mb-md-4"
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    Immigration Process Starts Here!
                  </h1>
                  <p
                    className="text-white mb-4 mb-md-5 fs-5"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <a
                    className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    href="#"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-2.jpg"
                className="img-fluid"
                alt="Image"
              ></img>
              <div className="carousel-caption">
                <div className="text-center p-4" style={{ maxWidth: "900px" }}>
                  <h5
                    className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    Solution For All Type Of Visas
                  </h5>
                  <h1
                    className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Best Visa Immigrations Services
                  </h1>
                  <p
                    className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <a
                    className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
                    data-wow-delay="0.7s"
                    href="#"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-secondary wow fadeInLeft"
              data-wow-delay="0.2s"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden-focusable">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-secondary wow fadeInRight"
              data-wow-delay="0.2s"
              aria-hidden="false"
            ></span>
            <span className="visually-hidden-focusable">Next</span>
          </button>
        </div>
      </div> */}

      <section className="hero-section py-5 mt-5 position-relative">
        <div className="container text-center">
          <h1 className="fw-bold display-4 mb-3">
            Nepal's leading study abroad consultants
          </h1>
          <p className="lead mb-4">
            We've assisted over <strong>760,000+ students</strong> in their
            study abroad journey.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <button className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5 wow fadeInUp">
              Australia <i className="bi bi-arrow-right"></i>
            </button>
            <button className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5 wow fadeInUp">
              UK <i className="bi bi-arrow-right"></i>
            </button>
            <button className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5 wow fadeInUp">
              Canada <i className="bi bi-arrow-right"></i>
            </button>
            <button className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5 wow fadeInUp">
              USA <i className="bi bi-arrow-right"></i>
            </button>
            <button className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5 wow fadeInUp">
              New Zealand <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          <div
            className="position-relative hero-image-wrapper mx-auto"
            style={{ maxWidth: "700px" }}
          >
            <img
              src="/images/student.jpg"
              className="img-fluid"
              alt="Students"
            />

            <div className="floating-badge-1 position-absolute start-0  translate-middle-y ">
              <p className="mb-0 small">
                <strong>17 Years of Experience</strong>
                <br />
                Operating in <strong>14 Countries</strong>
              </p>
            </div>

            <div className="floating-badge-2 position-absolute end-0  translate-middle-y ">
              <p className="mb-0 small">
                <strong>1,100+ Institution Partners</strong>
                <br />
                200,000+ Institution Courses
              </p>
            </div>
          </div>

          <p className="text-muted mt-3 small">*Data shown as of March 2025</p>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
