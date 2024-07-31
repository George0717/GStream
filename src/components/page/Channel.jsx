import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import sampleImage from "../../assets/pict_1.jpg";

// Sample data including only images
const channels = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name: `Channel ${index + 1}`,
  description: `This is channel ${index + 1}`,
  mediaUrl: sampleImage, // Using local file
}));

function Channel() {
  const [showModal, setShowModal] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleCardClick = (channel) => {
    setSelectedChannel(channel);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedChannel(null); // Reset selectedChannel when closing modal
    setShowModal(false);
  };

  return (
    <Container fluid className="channel-container">
      <Row className="mt-3">
        {channels.map((channel) => (
          <Col xs={12} md={6} lg={4} key={channel.id} className="mb-3">
            <Card
              className="channel-card"
              onClick={() => handleCardClick(channel)}
            >
              <Card.Img
                variant="top"
                src={channel.mediaUrl}
                className="channel-card-media"
              />
              <Card.Body>
                <Card.Title>{channel.name}</Card.Title>
                <Card.Text>{channel.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for displaying full details of the selected card */}
      {selectedChannel && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedChannel.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img
              src={selectedChannel.mediaUrl}
              alt={selectedChannel.name}
              className="img-fluid modal-img-radius"
            />
            <p className="mt-3">{selectedChannel.description}</p>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button variant="primary" onClick={handleCloseModal}>
              Chat Group
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Channel;
