import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="my-3">
      <Container className="bg-primary py-2 px-3">
        <Row>
          <Col md={12} lg={4}>
            <h4 className="text-white">Medicare</h4>
            <p className="lh-sm text-white">Phone: 004554871620</p>
            <p className="lh-sm text-white">Email: info@sunrise.com</p>
            <a
              className="text-decoration-none bg-dark p-2 text-white"
              href="www.facebook.com"
            >
              <BsFacebook />
            </a>

            <span className="mx-2">
              <a
                className="text-decoration-none bg-dark p-2 text-white"
                href="https://github.com/settings/applications/1882855"
              >
                <BsGithub />
              </a>
            </span>
            <a
              className="text-decoration-none bg-dark p-2 text-white"
              href="https://www.linkedin.com/"
            >
              <BsLinkedin />
            </a>
          </Col>

          <Col md={12} lg={4}>
            <h4 className="text-white">Our services</h4>
            <ul className="list-group list-group-flush py-3">
              <li className="list-group-item">Transplants</li>
              <li className="list-group-item">Gastroenterology</li>
              <li className="list-group-item">Orthopaedics</li>
              <li className="list-group-item">Spine Care</li>
              <li className="list-group-item">Cancer Care</li>
            </ul>
          </Col>
          <Col md={12} lg={4}>
            <h4 className="text-white">Our future plan</h4>
            <ul className="list-group list-group-flush py-3">
              <li className="list-group-item">
                free treatment first 100 patient
              </li>
              <li className="list-group-item">Free medicine up to 200kr</li>
              <li className="list-group-item">Discount for poor patient</li>
              <li className="list-group-item">Discount for test</li>
              <li className="list-group-item">Free healthcare tips</li>
            </ul>
          </Col>
        </Row>
        <p className="text-white text-center py-2">
          © 2022 Medicare
        </p>
      </Container>
    </div>
  );
};

export default Footer;