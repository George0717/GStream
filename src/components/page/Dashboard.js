import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../navbar/SideBar";
import Chat from "../navbar/Chat";

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="bg-light">
          <SideBar />
        </Col>
        <Col md={9}>
          <Chat />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
