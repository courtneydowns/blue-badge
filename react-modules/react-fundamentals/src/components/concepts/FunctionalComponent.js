import React from "react";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const FunctionalComponent = () => {
  return (
    <Container className="main">
      <Row>
        <Col xs="12">
          <h1>Functional Components</h1>
          <p>
            Functional components are the primarily tool in React to build a
            small, modular piece of your page..
          </p>
          <dl>
            <dt>Can use state </dt>
            <dd>
              With the 'useState' hook, functional components can now both
              render a display to the page and update the information to be
              shown.
            </dd>
            <dt>No 'this' keyword</dt>
            <dd>
              Older class components use 'this', functional components have no
              'this' object.
            </dd>
            <dd>
              With the 'useEffect hook, functional componentscan perform side
              effects with any props or state changes.
            </dd>
            <dt>return()</dt>
            <dd>
              Must return a single element, but this element may have nested
              elements inside.
            </dd>
          </dl>
        </Col>
      </Row>
      <hr />
      <h1>CHallenge</h1>
      <Row>
        <Col md="6">
          <HelloWorldFatArrow className="logo" />
        </Col>
        <Col>
          <Col md="6">
            <HelloWorld />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default FunctionalComponent;

const HelloWorld = function () {
  return (
    <div>
      <Card>
        <img
          width="100%"
          height="280px"
          src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg"
          alt="Card cap"
        />
        <CardBody>
          <CardTitle>Regular Ole Function</CardTitle>
          <CardSubtitle>A JS Library</CardSubtitle>
          <CardText>
            <pre>const HelloWorld = function() </pre>
          </CardText>
          <Button>Go somewhere, yo</Button>
        </CardBody>
      </Card>
    </div>
  );
};

const HelloWorldFatArrow = () => (
  <div>
    <Card>
      <img
        width="100%"
        height="280px"
        src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg"
        alt="Card cap"
      />
      <CardBody>
        <CardTitle>Fat Arrow</CardTitle>
        <CardSubtitle>A JS Library</CardSubtitle>
        <CardText>
          <pre>const HelloWorld = () => </pre>
        </CardText>
        <Button>Go somewhere man</Button>
      </CardBody>
    </Card>
  </div>
);
