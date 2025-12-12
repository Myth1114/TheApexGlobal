import React from "react";

const Carousel = () => {
  return (
    <div>
      <section className="hero-section mt-5 position-relative">
        <div
          className="container text-center"
          data-aos="fade-up"
          data-aos-duration=".3s"
        >
          <h1 className="fw-bold display-4 mb-3">
            “Guiding Futures Beyond Borders."
          </h1>
          <p className="lead mb-4" data-aos="fade-up" data-aos-duration="600">
            We've assisted over <strong>5,000+ students</strong> in their study
            abroad journey.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <button
              className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              Australia <i className="bi bi-arrow-right"></i>
            </button>
            <button
              className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              UK <i className="bi bi-arrow-right"></i>
            </button>
            <button
              className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              China <i className="bi bi-arrow-right"></i>
            </button>
            <button
              className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Canada <i className="bi bi-arrow-right"></i>
            </button>
            <button
              className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
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

            <div
              className="floating-badge-1 position-absolute start-0  translate-middle-y "
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <p className="mb-0 small">
                <strong>17 Years of Experience</strong>
                <br />
                Operating in <strong>14 Countries</strong>
              </p>
            </div>

            <div
              className="floating-badge-2 position-absolute end-0  translate-middle-y "
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <p className="mb-0 small">
                <strong>1,100+ Institution Partners</strong>
                <br />
                200,000+ Institution Courses
              </p>
            </div>
          </div>

          <p className="text-muted mt-3 small">2025</p>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
