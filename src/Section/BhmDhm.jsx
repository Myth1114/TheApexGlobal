import React, { useState } from "react";
import hotelsData from "../data/hotels.js";

const BhmDhm = () => {
  const [visibleCount, setVisibleCount] = useState(4); // show first 4

  const showMore = () => {
    setVisibleCount((prev) => prev + 4); // load next 4 each click
  };

  return (
    <div>
      <div className="container-fluid contact overflow-hidden pb-5">
        <div className="container py-5">
          <div className="office pt-5">
            {/* Section Title */}
            <div
              className="section-title text-center mb-5"
              data-aos="fade-up"
              data-aos-duration=".3s"
            >
              <div className="sub-style">
                <h5 className="sub-title text-primary px-3">BHM & DHM</h5>
              </div>
              <h1 className="display-5 mb-4">
                China Hospitality Internship Program for BHM & DHM
              </h1>
              <p className="mb-0">
                Kick-start your hospitality career with our exclusive BHM and
                DHM programs in China, offering world-class training, paid
                internships, and placement opportunities in 4 to 7-star hotels.
                Students receive international exposure, professional
                development, and complete guidance—from admission and
                documentation to visa processing and arrival support.
              </p>
            </div>

            {/* Hotel Cards */}
            <div className="row g-4 justify-content-center">
              {hotelsData.slice(0, visibleCount).map((hotel, index) => (
                <div
                  key={index}
                  className="col-md-6 col-lg-6 col-xl-3"
                  data-aos="fade-up"
                  data-aos-duration={hotel.delay}
                >
                  <div className="office-item p-4">
                    <div className="office-img mb-4">
                      <img
                        src={hotel.image}
                        className="img-fluid w-100 rounded"
                        alt={hotel.name}
                      />
                    </div>
                    <div className="office-content d-flex flex-column">
                      <h5 className="mb-2">{hotel.name}</h5>
                      <a href="#" className="text-secondary fs-5 mb-2">
                        {hotel.city}
                      </a>
                      <a href="#" className="text-muted fs-5 mb-2">
                        {hotel.rating}
                      </a>
                      <p className="mb-0">{hotel.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {visibleCount < hotelsData.length && (
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
    </div>
  );
};

export default BhmDhm;
