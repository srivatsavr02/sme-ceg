import React, { Component } from "react";
import "./team.css";
import Fade from "react-reveal";

class Team extends Component {
  render() {
    const cimg = {
      height: "90%",
    };

    return (
      <section id="team">
        <Fade top duration={1000} distance="40px">
          <html>
            <body className="team1">
              <div class="content">
                <a class="link-2">TEAM</a>

                <div class="box-scroll">
                  <div class="card ml">
                    <img
                      src="https://freebiespic.com/images/2018/0821_sneakers-shoes-men-on-the-shelf-thumb.jpg"
                      alt="Text image"
                      style={cimg}
                    />
                    <p>Sneakers shoes for men</p>
                  </div>
                  <div class="card ml">
                    <img
                      src="https://freebiespic.com/images/2018/0820_shoes-for-men-leather-thumbnail.jpg"
                      alt="Text image"
                      style={cimg}
                    />
                    <p>Shoes for men leather</p>
                  </div>
                  <div class="card ml">
                    <img
                      src="https://freebiespic.com/images/2018/0911_various-sneakers-on-the-showcase-at-the-store-thumb.jpg"
                      alt="Text image"
                      style={cimg}
                    />
                    <p>Sport shoes for men</p>
                  </div>
                  <div class="card ml">
                    <img
                      src="https://freebiespic.com/images/2018/0821_sneakers-shoes-men-on-the-shelf-thumb.jpg"
                      alt="Text image"
                      style={cimg}
                    />
                    <p>Product Title</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        </Fade>
      </section>
    );
  }
}

export default Team;
