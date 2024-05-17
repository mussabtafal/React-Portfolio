import React, { useState } from "react";
import "../journey/journey.css";

const Journey = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section id="journey" className="container">
      <h5>Glimpse About My</h5>
      <h2>Journey</h2>

      <div className="qualification__container">
        <div className="journey__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              toggle === 0
                ? "qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(0)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div
          className={
            toggle === 1
              ? "qualification__content-active"
              : "qualification__content"
          }
        >
          <div className="qualification__sections">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Axsos Academy Bootcamp</h3>
                <span className="qualification__subtitle">
                  Ramallah - Westbank, Palestine
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  An-Najah National University
                </h3>
                <span className="qualification__subtitle">
                  Bachelor in the Science of Engineering
                </span>
                <span className="qualification__subtitleTwo">
                  Nablus - Westbank, Palestine
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2018
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Al Fadiliya Highschool</h3>
                <span className="qualification__subtitle">
                  Tulkarm - Westbank, Palestine
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2014
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            toggle === 0
              ? "qualification__content-active"
              : "qualification__content"
          }
        >
          <div className="qualification__sections">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  OnPassive Technologies LLC.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Software Engineer - Team lead
                </h3>
                <span className="qualification__subtitle">
                  Procure Software and Logistic Services
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  AppiaTech Software Services
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
