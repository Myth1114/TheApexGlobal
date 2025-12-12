import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countriesData from "../data/countriesData.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Countries = () => {
  const [visibleCount, setVisibleCount] = useState(4); // show first 4

  const showMore = () => {
    setVisibleCount((prev) => {
      const newCount = prev + 4;
      return newCount;
    });
  };

  return (
    <div className="container-fluid country overflow-hidden py-5">
      <div className="container">
        <div
          className="section-title text-center"
          data-aos="fade-up"
          data-aos-duration=".3s"
          style={{ marginBottom: "70px" }}
        >
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">COUNTRIES WE OFFER</h5>
          </div>
          <h1 className="display-5 mb-4">Explore! Apply! Fly!</h1>
          <p className="mb-0">
            Discover top study destinations across the world with trusted
            guidance for admissions, scholarships, documentation, and visa
            support—making your global education journey smooth and successful.
          </p>
        </div>

        <div className="row g-4 text-center">
          {countriesData.slice(0, visibleCount).map((country, index) => (
            <div
              key={index}
              className="col-lg-6 col-xl-3 mb-5 mb-xl-0"
              data-aos="fade-up"
              data-aos-duration={country.delay}
            >
              <Link
                to={`/country/${country.slug}`}
                className="country-item-link"
              >
                <div className="country-item">
                  <div className="rounded overflow-hidden">
                    <img
                      src={country.image}
                      className="img-fluid w-100 rounded"
                      alt={country.name}
                    />
                  </div>
                  <div className="country-flag">
                    <img
                      src={country.flag}
                      className="img-fluid rounded-circle"
                      alt={country.name}
                    />
                  </div>

                  <div className="country-name">
                    <span className="text-white fs-4">{country.name}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {visibleCount < countriesData.length && (
            <div className="text-center mt-4">
              <button
                className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5"
                onClick={showMore}
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Countries;
