import React from "react";
import { useParams } from "react-router-dom";
import countriesData from "../data/countriesData";

const CountryDetails = () => {
  const { slug } = useParams();
  // find the selected country
  const country = countriesData.find((c) => c.slug === slug);

  if (!country) {
    return (
      <div className="container py-5">
        <h1>Country Not Found</h1>
        <p>The country you are looking for does not exist.</p>
      </div>
    );
  }
  return (
    <div>
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "600px" }}
        >
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            {country.tag}
          </h3>
        </div>
      </div>
      <div className="container-fluid overflow-hidden py-5">
        <div className="container py-5">
          <div className="row g-4 ">
            <div className="col-lg-6 mb-5 mb-xl-0">
              {/* <h1 className="mb-4">{country.name}</h1> */}
              <h3>Overview</h3>
              <p>{country.details.overview}</p>
              <hr />
              <h3>Popular Courses</h3>
              <ul>
                {country.details.popularCourses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
              <hr />

              <h3>Tuition Fees</h3>
              <p>Bachelors: {country.details.tuitionFees.bachelors}</p>
              <p>Masters: {country.details.tuitionFees.masters}</p>

              <hr />

              <h3>Living Cost</h3>
              <p>{country.details.livingCost}</p>

              <hr />

              <h3>Stay Back</h3>
              <p>{country.details.stayBack}</p>

              <hr />

              <h3>Part-Time Work</h3>
              <p>{country.details.partTimeWork}</p>

              <hr />

              <h3>Visa Requirements</h3>
              <ul>
                {country.details.visaRequirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>

              <hr />

              <h3>Documents Required</h3>
              <ul>
                {country.details.documentsRequired.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>

              <hr />

              <h3>Top Universities</h3>
              <ul>
                {country.details.topUniversities.map((uni, i) => (
                  <li key={i}>{uni}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6  mb-5 mb-xl-0">
              <img
                src={country.image}
                alt={country.name}
                className="img-fluid mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
