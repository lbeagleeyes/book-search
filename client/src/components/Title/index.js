import React from "react";
import { Jumbotron, Container, Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Title() {
  return (
    <Jumbotron fluid>
    <Container>
      <h1>What would you like to read?</h1>
      <p>
        Search for and save books of interest
      </p>
      <Form inline>
        <FormControl type="text" placeholder="Search for books" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Container>
  </Jumbotron>
  );
}

export default Title;



