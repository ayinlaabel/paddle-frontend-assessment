import React from "react";
import Blur from "react-css-blur";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about__header">
          <div className="header__overlay"></div>
          <div className="header__content">
            <p className="header__title">About us</p>
            <h2 className="header__h2">
              Built for SaaS
              <br /> and E-commerce
            </h2>
            <div className="header__body">
              <p>
                Our tool are easy to set up and use with a user friendly
                dashboard that enables you to set up, launch, automate and
                manage multi-affilate campigns in 5 minutes.
              </p>
            </div>
          </div>
        </div>
        <div className="about__section-1">
          <p className="title">
            Matricks was developed because just like you, we needed a product
            that could give us <b>good value.</b>
          </p>
          <div className="aboutus">
            <div className="whyus">
              <div className="whyus__container">
                <div className="whyus__title">
                  <p className="title_1">01</p>
                  <p className="title_2">Why us?</p>
                </div>
                <div className="whyus__content">
                  <p>
                    We pride ourselves in our ability to innovate and create
                    world-class tools that provide reliable and efficient
                    touchpoints between advertisers and affiliates.
                  </p>
                  <div className="dotted">
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                      <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="grow__container">
                <div className="grow__title">
                  <p className="title_1">02</p>
                  <p className="title_2">Growing with us</p>
                </div>
                <div className="grow__content">
                  <p>
                    Leveraging the best technology, we have developed an
                    all-in-one affiliate marketing tracking software, a genius
                    tool to help you track, automate and optimize your
                    influencer campaigns, all from one dashboard.
                  </p>
                  <p>
                    Our team of experts are constantly brainstorming, testing
                    and developing new solutions with only one thing in mind -
                    your business growth. Your success is our success and by
                    giving you the tools you need to scale, we grow as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
