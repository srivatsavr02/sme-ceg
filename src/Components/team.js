import React, { Component } from "react";
import Slide from "react-reveal";
import "./team.css";

class Team extends Component {
  render() {
    const bimg = {
      backgroundImage:
        'url("https://wallpapers.com/images/hd/hd-engineering-mechanical-drawing-pg7gcjjs1p0sxd4p.jpg")',
      "background-repeat": "no-repeat",
      "background-size": "cover",
      "background-height": "80%",
    };

    const cimg = {
      height: "90%",
    };

    return (
      <section id="team">
        <Slide left duration={1300}>
          <html>
            <body className="team1" style={bimg}>
              <div class="content">
                <h1 class="heading">TEAM</h1>
                <div class="container">
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
              </div>
            </body>
          </html>
        </Slide>
      </section>
    );
  }
}

export default Team;
