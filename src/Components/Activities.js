import React, { Component } from "react";
import Slide from "react-reveal";
import "./activities.css";

class Activities extends Component {
  render() {
    const bimg = {
      backgroundImage: 'url("https://wallpapercave.com/wp/wp2043479.jpg")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      "background-height": "100%",
    };

    return (
      <section id="activities">
        <Slide left duration={1300}>
          <html>
            <body style={bimg}>
              <div class="wrapper">
                <h5 data-text="Creative.......">ACTIVITIES....</h5>
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
