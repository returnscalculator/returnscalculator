import React from "react";
import { Card, Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <Card.Title>
        <h2>About Us</h2>
      </Card.Title>
      <Card body className="light-font">
        Returns Calculator is a website which helps to calculate the estimated
        returns of
        <ul>
          <li>
            <a href="/mf">Mutual Funds</a>
          </li>
          <li>
            <a href="/lumpsum">Lumpsum</a>
          </li>
          <li>
            {" "}
            <a href="/sip">SIP </a>
          </li>
          <li>
            <a href="/rd">Reccuring Deposit </a>
          </li>
          <li>
            <a href="/fd">Fixed Deposit </a>
          </li>
          <li>
            <a href="/stocks">Stocks</a>
          </li>
        </ul>
        Note : We do not offer any financial advice here. the tools should be
        used only for informational purpose.
      </Card>
    </Container>
  );
};

export default About;
