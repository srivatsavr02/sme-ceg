import React, { Component } from "react";
import Slide from "react-reveal";
import "./activities.css";

class Activities extends Component {
  render() {
    const bimg = {
      "background-repeat": "no-repeat",
      "background-size": "cover",
      "background-height": "100%",
      background:
        "linear-gradient(0deg, rgba(187, 35, 252, 0.3), rgba(187, 35, 252, 0.3)), url(https://wallpapercave.com/wp/wp2043479.jpg)",
    };

    return (
      <section id="activities">
        <Slide left duration={1300}>
          <html>
            <body style={bimg}>
              <div class="wrapper">
                <div>
                  <span>
                    <h1 class="change-text">Activities</h1>
                  </span>
                </div>
                <section class="container">
                  <div class="outer-wrapper">
                    <div class="inner-wrapper">
                      <div class="pseudo-item"></div>
                      <div class="pseudo-item"></div>
                      <div class="pseudo-item"></div>
                      <div class="pseudo-item"></div>
                      <div class="pseudo-item"></div>
                      <div class="pseudo-item"></div>
                      <div class="pseudo-item"></div>
                      <div class="pseudo-item"></div>
                    </div>
                  </div>
                </section>
              </div>
            </body>
          </html>
        </Slide>
      </section>
    );
  }
}

export default Activities;
