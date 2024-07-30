import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../navbar/SideBar";
import Chat from "../navbar/Chat";

function Dashboard() {
  return (
    <Container fluid>
      <Row>
          <Chat />
      </Row>
    </Container>
  );
}

export default Dashboard;
