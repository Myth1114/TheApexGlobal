import React, { useEffect } from "react";
import { countriesData } from "../data/countriesData.js";

import AOS from "aos";
import "aos/dist/aos.css";

const Countries = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
          <h1 className="display-5 mb-4">
            Immigration & visa services following Countries
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p>
        </div>

        <div className="row g-4 text-center">
          {countriesData.map((country) => (
            <div
              key={country.id}
              className="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp"
              data-aos="fade-up"
              data-aos-duration={country.delay}
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
                  <a className="text-white fs-4">{country.name}</a>
                </div>
              </div>
            </div>
          ))}

          <div className="col-12">
            <a
              className="btn btn-secondary border-primary text-primary rounded-pill py-3 px-5"
              data-wow-delay="0.1s"
              href="#"
            >
              More Countries
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
