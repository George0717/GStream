import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import sampleImage from "../../assets/pict_1.jpg";
import sampleVideo from "../../assets/vid_1.mp4";

// Sample data including both images and videos
const channels = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: `Channel ${index + 1}`,
  description: `This is channel ${index + 1}`,
  mediaType: index % 2 === 0 ? "image" : "video",
  mediaUrl: index % 2 === 0 ? sampleImage : sampleVideo, // Using local files
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
              {channel.mediaType === "image" ? (
                <Card.Img
                  variant="top"
                  src={channel.mediaUrl}
                  className="channel-card-media"
                />
              ) : (
                <div className="video-container">
                  <video
                    src={channel.mediaUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="channel-card-media"
                  />
                </div>
              )}
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
            {selectedChannel.mediaType === "image" ? (
              <img
                src={selectedChannel.mediaUrl}
                alt={selectedChannel.name}
                className="img-fluid"
              />
            ) : (
              <video
                src={selectedChannel.mediaUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-100"
              />
            )}
            <p className="mt-3">{selectedChannel.description}</p>
          </Modal.Body>
          <Modal.Footer>
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
