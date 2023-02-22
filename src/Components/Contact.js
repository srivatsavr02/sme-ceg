import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;

    const handleClick = () => {
      window.location = "mailto:srivatsavr02@gmail.com";
    };

    return (
      <section id="contact">
        <div style={{ display: "flex" }}>
          <div style={{ width: "120%", height: "30%" }}>
            <Fade bottom duration={1000}>
              <div className="row section-head">
                <div className="ten columns">
                  <p
                    className="lead"
                    style={{
                      color: "white",
                      marginTop: "1rem",
                      marginLeft: "5rem",
                      alignContent: "center",
                    }}
                  >
                    Society of Mechanical Enginnering
                    <div
                      className="lead"
                      style={{
                        color: "white",
                        marginTop: "1rem",
                      }}
                    >
                      CEG, Anna University.
                    </div>
                  </p>
                </div>
              </div>
            </Fade>
            <div className="row">
              <Slide left duration={1000}>
                <div className="eight columns">
                  <form id="contactForm" name="contactForm" action="#contact">
                    <fieldset>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: "60%" }}>
                          <label
                            htmlFor="contactMessage"
                            style={{ marginLeft: "5rem", marginRight: "1rem" }}
                          >
                            <p
                              style={{
                                fontWeight: "100",
                                color: "white",
                                textAlign: "left",
                                fontSize: "1rem",
                              }}
                            >
                              Michael&nbsp;Scott
                              <div
                                style={{
                                  fontWeight: "10",
                                  color: "#3acab4",
                                  textAlign: "left",
                                  fontSize: "0.8rem",
                                  marginLeft: "0.2rem",
                                }}
                              >
                                President
                              </div>
                            </p>
                          </label>
                        </div>

                        <div style={{ marginLeft: "10rem" }}>
                          <button className="submit" onClick={handleClick}>
                            Contact
                          </button>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: "60%" }}>
                          <label
                            htmlFor="contactMessage"
                            style={{ marginLeft: "5rem", marginRight: "1rem" }}
                          >
                            <p
                              style={{
                                fontWeight: "100",
                                color: "white",
                                textAlign: "left",
                                fontSize: "1rem",
                              }}
                            >
                              Dwight&nbsp;Schrute
                              <div
                                style={{
                                  fontWeight: "10",
                                  color: "#3acab4",
                                  textAlign: "left",
                                  fontSize: "0.8rem",
                                  marginLeft: "0.2rem",
                                }}
                              >
                                President
                              </div>
                            </p>
                          </label>
                        </div>

                        <div style={{ marginLeft: "10rem" }}>
                          <button
                            className="submit"
                            type="submit"
                            onClick={handleClick}
                          >
                            Contact
                          </button>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ flex: "60%" }}>
                          <label
                            htmlFor="contactMessage"
                            style={{ marginLeft: "5rem", marginRight: "1rem" }}
                          >
                            <p
                              style={{
                                fontWeight: "100",
                                color: "white",
                                textAlign: "left",
                                fontSize: "1rem",
                              }}
                            >
                              Jim&nbsp;Halpert
                              <div
                                style={{
                                  fontWeight: "10",
                                  color: "#3acab4",
                                  textAlign: "left",
                                  fontSize: "0.8rem",
                                  marginLeft: "0.2rem",
                                }}
                              >
                                President
                              </div>
                            </p>
                          </label>
                        </div>

                        <div style={{ marginLeft: "10rem" }}>
                          <button
                            className="submit"
                            type="submit"
                            onClick={handleClick}
                          >
                            Contact
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </Slide>
            </div>
          </div>
          <div style={{ flex: "90%", marginTop: "2rem" }}>
            <Slide right duration={1000}>
              <aside
                className="four columns footer-widgets"
                style={{ margin: "0px", display: "block" }}
              >
                <div className="widget widget_contact">
                  <h4>Address and Phone</h4>
                  <p
                    className="address"
                    style={{
                      color: "white",
                      fontWeight: "50",

                      textAlign: "left",
                    }}
                  >
                    {name}
                    <br />
                    {street} <br />
                    {city}, {state} {zip}
                    <br />
                    <span>{phone}</span>
                  </p>
                </div>

                <div className="widget widget_tweets">
                  <h4 className="widget-title">Events</h4>
                  <ul id="twitter">
                    <li>
                      <span>
                        Pi-Day&nbsp;&nbsp;&nbsp;
                        <a href="#events">Click here</a>
                      </span>
                      <b>
                        <a href="./">Feburary 2023</a>
                      </b>
                    </li>
                    <li>
                      <span>
                        Pinnacle&nbsp;&nbsp;&nbsp;
                        <a href="#events">Click here</a>
                      </span>
                      <b>
                        <a href="./">April 2023</a>
                      </b>
                    </li>
                  </ul>
                </div>
              </aside>
            </Slide>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
