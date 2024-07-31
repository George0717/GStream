import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/page/Dashboard";
import Login from "./components/page/Login";
import Channel from "./components/page/Channel";
import SideBar from "./components/navbar/SideBar";
import { Container, Row, Col } from "react-bootstrap";
import './App.css'; // Import custom CSS for layout
import Message from "./components/page/Message";

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid>
          <Row>
          <Col xs={12} md={3} className="sidebar-col">
            <SideBar />
          </Col>
            <Col md={9} className="content-col">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/channel" element={<Channel />} />
                <Route path="/message" element={<Message />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
