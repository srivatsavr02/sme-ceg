import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    const divStyle = {
      "font-size": "280%",
      margin: "30px",
      padding: "20px",
      border: "5px solid pink",
    };

    const bimg = {
      backgroundImage: 'url("https://www.annauniv.edu/cai/images/Anna3.jpg")',
      "background-position": "center",
      "background-repeat": "no-repeat",
      "background-size": "cover",
      "background-height": "80%",
    };

    return (
      <header id="home" style={bimg}>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#events">
                Events
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#team">
                Team
              </a>
            </li>

            <li>
              <a
                className="smoothscroll"
                href="https://www.annauniv.edu/dme/special-machine-shop.html"
              >
                Machines
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Gallery
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 style={divStyle} className="responsive-headline">
                {name}
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
