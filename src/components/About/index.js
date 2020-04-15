import React from "react";
import "./about.css";

import { Accordion, Card } from "react-bootstrap";

import CatalogCarousel from "../Home/Catalog/catalogCarousel";
import Newsletter from "../Home/Newsletter";

const index = () => {
  return (
    <>
      <div className="nav">
        <h5>
          {" "}
          <span>Home</span> | <i> About</i>
        </h5>
      </div>
      <div className="container">
        <div className="about-label">
          <h2>About us</h2>
          <p>Add some Description</p>
        </div>

        <div className="shoes-wrapper">
          <div className="row">
            <div className="col-md-5">
              <div className="shoes-img"></div>
            </div>
            <div className="col-md-7 shoes-text">
              <h3>Welcome to Downy shoes</h3>
              <p>
                Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut
                laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat
                purus viverra sit amet. Quisque lacinia quam sed tortor
                interdum, malesuada congue nunc ornare. Cum sociis In semper
                lorem eget tortor pulvinar ultricies.{" "}
              </p>{" "}
              <p>
                Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut
                laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat
                purus viverra sit amet. Quisque lacinia quam sed tortor
                interdum, malesuada congue nunc ornare. Cum sociis . In semper
                lorem eget tortor pulvinar ultricies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />

      <div className="about-us">
        <div className="row">
          <div className="col-md-5">
            <div className="about-us-left">
              <h4>Who We Are</h4>
              <Accordion defaultActiveKey="0">
                <Card style={{ backgroundColor: "black", color: "white" }}>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Assumenda Est Cliche Voluptate
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body
                      style={{ backgroundColor: "white", color: "black" }}
                    >
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Itaque Earum Rerum
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Autem Accusamus Terry Qui
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Autem Accusamus Terry Qui
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-us-right">
              <h4>Our Skills</h4>
              <div class="skill_info">
                <h6>
                  Development<span> 95% </span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped active"
                    style={{ width: "95%", backgroundColor: "black" }}
                  ></div>
                </div>
                <h6>
                  Pricing<span> 85% </span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped active"
                    style={{ width: "85%", backgroundColor: "black" }}
                  ></div>
                </div>
                <h6>
                  Production <span>90% </span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped active"
                    style={{ width: "90%", backgroundColor: "black" }}
                  ></div>
                </div>
                <h6>
                  Advertising <span>86% </span>
                </h6>
                <div className="progress prgs-last">
                  <div
                    className="progress-bar progress-bar-striped active"
                    style={{ width: "86%", backgroundColor: "black" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>

      {/* show more shoes */}
      <div className="about-carousel-wrapper">
        <CatalogCarousel />
      </div>

      {/* Newsletter */}
      <div className="about-newsletter-wrapper">
        <Newsletter />
      </div>
    </>
  );
};

export default index;
