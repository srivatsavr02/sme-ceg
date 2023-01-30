import React, { Component } from "react";
import Slide from "react-reveal";
import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <section id="events">
        <Slide left duration={1300}>
          <html>
            <body>
              <div class="content">
                <h1 class="heading">EVENTS</h1>
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
        </Slide>
      </section>
    );
  }
}

export default Resume;
