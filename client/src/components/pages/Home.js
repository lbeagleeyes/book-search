import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Enter Books of interest and press Search</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
