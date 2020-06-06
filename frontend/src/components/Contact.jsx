import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Footer from "../components/footer";

import "./contact.css";

export default class Contact extends Component {
  render() {
    return (
      <main>
        <Row className="contact-us">
          <Col md={12}>
            <h4>Send a Message</h4>
            <Form>
              <Form.Group controlId="ControlInput">
                <Form.Control type="text" placeholder="Name" required="true" />
              </Form.Group>
              <Form.Group controlId="ControlInput">
                <Form.Control type="email" placeholder="Email Address" required="true"  />
              </Form.Group>
              <Form.Group controlId="ControlInput">
                <Form.Control type="text" placeholder="Address" required="true" />
              </Form.Group>
              <Form.Group controlId="ControlInput">
                <Form.Control type="number" placeholder="Phone Number" required="true" />
              </Form.Group>

              <Form.Group controlId="ControlInput">
                <Form.Control
                  as="textarea"
                  placeholder="Your Message Here"
                  rows="5"
                  required="true" 
                />
              </Form.Group>
              <Button className="btn-customBtn" type="submit" onClick={() => alert("Your Message has sent!")} >
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
