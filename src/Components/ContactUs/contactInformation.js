//react
import React from "react";

//icons

import Telephone from "../../svg/Group68686.svg";
import Message from "../../svg/Group68687.svg";
import Location from "../../svg/Group68692.svg";

import Linkend from "../../svg/path-1_24_.svg";
import Instagram from "../../svg/HendElgoharyPortfolio-Work-2.svg";
import Youtube from "../../svg/HendElgoharyPortfolio-Work-6.svg";

export default (props) => {
  return (
    <div className="row justify-content-center h-100 small-cont-card">
      <div
        className="col-6 row flex-column data-cont"
        style={{ height: "78vh" }}
      >
        <span className="information-header">Contact Information</span>
        <span className="information-text">
          Fill up the form and our team will get back to you within 24 hours.
        </span>

        <div className="information-cont pt-4">
          <div className="contact-number d-flex ms-auto pb-3">
            <img src={Telephone} />
            <span className="ps-3">+9660559412305</span>
          </div>

          <div className="contact-email d-flex ms-auto pb-3">
            <img src={Message} />
            <span className="ps-3">Anam2022@gmail.com</span>
          </div>

          <div className="contact-location d-flex ms-auto pb-3">
            <img src={Location} />
            <span className="ps-3">Saudi arabia</span>
          </div>
        </div>

        <div className="d-flex mt-auto ">
          <a className="pe-3" href="">
            <img src={Linkend} />
          </a>

          <a className="pe-3" href="">
            <img src={Instagram} />
          </a>

          <a className="pe-3" href="">
            <img src={Youtube} />
          </a>
        </div>
      </div>

      <div className="col-6 row circles-parent px-0">
        <div className="ms-auto mt-auto d-flex circles-cont">
          <div
            className="mt-md-auto row ms-auto w-100 h-75 circles"
            style={{ paddingTop: "30px" }}
          >
            <div className=" fullCircle"></div>
            <div className=" halfCircle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
