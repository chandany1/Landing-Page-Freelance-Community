import React from "react";
import star from "../assets/star.svg";
import half_star from "../assets/half-star.svg";
import arrow_icon from "../assets/arrow-icon.png";
import PeopleGrid from "./PeopleGrid";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* <div id="container"> */}
          <div className="rating">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={half_star} />
            <span>4.5</span>
          </div>
          <p className="rate-msg">from 1,250+ reviews</p>
          <p className="heading-msg">
            Join the largest freelance
            <br />
            community for free.
          </p>
          <p className="support-msg">
            Tap into the massive remote freelance scene where talent thrives
            across
            <br />
            all fields. Dive into a world of opportunities, all without spending
            a dime.
          </p>
          <div id="buttons-container">
              <div className="create-account-button">Create Account Now</div>
              <span/>
              <img src={arrow_icon} alt="create account" />
          </div>
          <p className="trust-text">Trusted by 4000+ freelancers worldwide.</p>
          <PeopleGrid/>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
