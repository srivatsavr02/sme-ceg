import React, { Component } from "react";
import Fade from "react-reveal";
import "./resume.css";

class Resume extends Component {
  render() {
    const bimg = {
      background:
        " linear-gradient(to right, rgba(255,0,0,0), rgba(232, 58, 87))",
    };

    return (
      <section id="events">
        <Fade left duration={1000} distance="40px">
          <html>
            <body style={bimg}>
              <div class="content">
                <a class="link-3">EVENTS</a>
                <a class="card" href="#!">
                  <div
                    class="front"
                    style={{
                      "background-image":
                        'url("//source.unsplash.com/300x401")',
                    }}
                  >
                    <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                  </div>
                  <div class="back">
                    <div>
                      <p>
                        Consectetur adipisicing elit. Possimus, praesentium?
                      </p>
                      <p>
                        Provident consectetur natus voluptatem quis tenetur sed
                        beatae eius sint.
                      </p>
                      <button class="button">Click Here</button>
                    </div>
                  </div>
                </a>
                <a class="card" href="#!">
                  <div
                    class="front"
                    style={{
                      "background-image":
                        'url("//source.unsplash.com/300x406")',
                    }}
                  >
                    <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
                  </div>
                  <div class="back">
                    <div>
                      <p>
                        Consectetur adipisicing elit. Possimus, praesentium?
                      </p>
                      <p>
                        Provident consectetur natus voluptatem quis tenetur sed
                        beatae eius sint.
                      </p>
                      <button class="button">Click Here</button>
                    </div>
                  </div>
                </a>
              </div>
            </body>
          </html>
        </Fade>
      </section>
    );
  }
}

export default Resume;
