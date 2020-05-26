import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Footer from "../components/footer";
import CustomNavbar from "../components/customNavbar";

import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <main>
        <CustomNavbar />

        <Row className="contact-us">
          <Col md={12}>
            <h4>Send Us a Message</h4>
            <Form>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Address" />
              </Form.Group>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group controlId="ControlInput">
                <Form.Control
                  as="textarea"
                  placeholder="Your Message Here"
                  rows="5"
                />
              </Form.Group>
              <Button className="btn-customBtn" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
        <Footer />
      </main>
    );
  }
}
