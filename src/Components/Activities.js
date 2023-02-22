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

    const pstyle = {
      margin: "3rem",
      "font-family": "courier",
      color: "#e02860",
      "font-weight": "3rem",
      "font-size": "1rem",
    };

    const p1style = {
      margin: "3rem",
      "font-family": "courier",
      color: "#e35f87",
      "font-weight": "3rem",
      "font-size": "1rem",
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
                      <div class="pseudo-item">
                        <p style={pstyle} class="para">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum dis parturient montes, fringilla vel, aliquet nec,
                          vulputate eget, arcu.
                        </p>
                      </div>
                      <div class="pseudo-item1">
                        <p style={p1style} class="para">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum dis parturient montes, fringilla vel, aliquet nec,
                          vulputate eget, arcu.
                        </p>
                      </div>
                      <div class="pseudo-item">
                        <p style={pstyle} class="para">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum dis parturient montes, fringilla vel, aliquet nec,
                          vulputate eget, arcu.
                        </p>
                      </div>
                      <div class="pseudo-item1">
                        <p style={p1style} class="para">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum dis parturient montes, fringilla vel, aliquet nec,
                          vulputate eget, arcu.
                        </p>
                      </div>
                      <div class="pseudo-item">
                        <p style={pstyle} class="para">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum dis parturient montes, fringilla vel, aliquet nec,
                          vulputate eget, arcu.
                        </p>
                      </div>
                      <div class="pseudo-item1">
                        <p style={p1style} class="para">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum dis parturient montes, fringilla vel, aliquet nec,
                          vulputate eget, arcu.
                        </p>
                      </div>
                      <div class="pseudo-item">
                        <p style={pstyle} class="para">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum dis parturient montes, fringilla vel, aliquet nec,
                          vulputate eget, arcu.
                        </p>
                      </div>
                      <div class="pseudo-item1">
                        <p style={p1style} class="para">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum dis parturient montes, fringilla vel, aliquet nec,
                          vulputate eget, arcu.
                        </p>
                      </div>
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
