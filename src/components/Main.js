import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="title">
        <h1>something awesome is coming soon</h1>
        <p>
          Your all-in-one afflicate marketing tracking software{" "}
          <b>track, automate</b> and <b>optimize</b> your campaigns.
        </p>
      </div>
      <div className="timer">
        <div className="timer__card">
          <div className="days">
            <span className="head">7</span>
            <span>days</span>
          </div>
          <div className="hours">
            <span className="head">24</span>
            <span>hours</span>
          </div>
          <div className="minutes">
            <span className="head">54</span>
            <span>minutes</span>
          </div>
          <div className="second">
            <span className="head">11</span>
            <span>second</span>
          </div>
        </div>
      </div>
      <div className="form">
        <form>
          <div className="form__input">
            <div className="group__input">
              <div className="input__field">
                <input type="text" placeholder="First Name.." />
                <span></span>
              </div>
              <div className="input__field">
                <input type="text" placeholder="Last Name.." />
                <span></span>
              </div>
            </div>
          </div>
          <div className="group__input-button">
            <div className="input__field">
              <input type="text" placeholder="Enter your email address..." />
            </div>
            <button>Join our waiting list</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
