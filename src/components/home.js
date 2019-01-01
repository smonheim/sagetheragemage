import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import AboutMe from "./aboutme";

class Home extends Component {
  render() { 
    return (
      <div>
        <Row>
          <Col xs="6" sm="4"><AboutMe/></Col>
          <Col xs="6" sm="4">.</Col>
          <Col sm="4"></Col>
        </Row>
      </div>
    );
  }
}

export default Home;