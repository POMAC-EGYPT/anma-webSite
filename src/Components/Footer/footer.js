//react
import React from "react";

//styles
import "./footer.css";
import "./footer-media.css"

//footer img
import AnmaLogoImg from "../../img/anmalogo.png";
import Facebook from "../../svg/facebook.svg";
import Instagram from "../../svg/instagram.svg";
import Twitter from "../../svg/twitter.svg";
import Linkend from "../../svg/linkenind.svg";
import Youtube from "../../svg/youtube.svg";

export default (props) => {
  const soceialApps = [
    { icon: Facebook, link: "https://www.google.com/" },
    { icon: Instagram, link: "https://www.google.com/" },
    { icon: Twitter, link: "https://www.google.com/" },
    { icon: Linkend, link: "https://www.google.com/" },
    { icon: Youtube, link: "https://www.google.com/" },
  ];
  return (
    <footer className="homeFooter-parent">
      <div className="row col-12 justify-content-between flex-md-row flex-column homeFooter-cont">
        <div className="col-md-6 col-12 flex-column d-flex">
          <img className="footer-img" src={AnmaLogoImg} />

          <span className="footertext">
            The Anma platform has benefited from international scientific
            research that has proven the effectiveness of artificial
            intelligence and its ability to sort and identify various
            developmental disorders
          </span>
        </div>

        <div className="col-md-6 col-12 popularTest flex-column d-flex">
          <span className="footertext-bold">The most popular tests</span>

          <div className="row   col-12">
            <div className="row col-md-5 col-12">
              <a>Language communication skills test</a>
            </div>

            <div className="row col-md-5 col-12">
              <a>Testing early learning indicators</a>
            </div>

            <div className="row col-md-5 col-12">
              <a>Testing early learning indicators</a>
            </div>

            <div className="row col-md-5 col-12">
              <a>ADHD Test</a>
            </div>

            <div className="row col-md-5 col-12">
              <a>ADHD Test</a>
            </div>

            <div className="row col-md-5 col-12">
              <a>Reading skills Test</a>
            </div>

            <div className="row col-md-5 col-12">
              <a>Reading skills Test</a>
            </div>
          </div>
        </div>

        <div className="sociealIcons col-md-2 col-12">
          <div className="sociealIcons-cont">
          {soceialApps.map((data) => {
            console.log(data);
            return (
              <a href={data.link}>
                <img src={data.icon} />
              </a>
            );
          })}
          </div>
        </div>
      </div>

      <div className="summary-parent">
        <div className="summary-cont my-3">
      
          <a className="" href="https://www.google.com/">Terms of use</a>

          <a className="" href="https://www.google.com/">Privacy policy</a>

          <a className="" href="https://www.google.com/">Connect with us</a>

          <a className="" href="https://www.google.com/">Who are we</a>

          <a className="" href="https://www.google.com/">Common questions</a>
       
        </div>
      </div>
    </footer>
  );
};
