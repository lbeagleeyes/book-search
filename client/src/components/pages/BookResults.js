import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';

function BookResults() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Book Results</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default BookResults;
