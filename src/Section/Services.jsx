import React from "react";
import servicesData from "../data/servicesData.js";

const Services = () => {
  return (
    <div className="container-fluid service overflow-hidden pt-5">
      <div className="container py-5">
        <div
          className="section-title text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">
              Student Visa Support
            </h5>
          </div>
          <h1 className="display-5 mb-4">
            “Expert Visa Support for All Study Destinations”
          </h1>
          <p className="mb-0">
            We provide expert, country-specific student visa guidance to ensure
            your application is accurate, complete, and approved on time. From
            documentation to interview preparation, our team supports you at
            every step—making your journey to your chosen study destination
            seamless and stress-free.
          </p>
        </div>

        <div className="row g-4">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src={service.image}
                      className="img-fluid w-100 rounded"
                      alt={service.title}
                    />
                  </div>

                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-2 mx-5 mb-4 mt-1">
                        <a className="h5 text-white mb-0">{service.title}</a>
                      </div>

                      <a className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5">
                        Explore More
                      </a>
                    </div>

                    <div className="service-content border-primary pb-4">
                      <h4 className="text-white mb-4 py-3">{service.title}</h4>

                      <div className="px-4">
                        <p className="mb-4">{service.description}</p>

                        <a className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5">
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
