import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup, Image } from "react-bootstrap";

function Chat({ selectedUser }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selectedUser) {
      // Load chat messages for the selected user here
      setMessages([]); // Placeholder, replace with actual loading logic
    }
  }, [selectedUser]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="chat">
      {selectedUser ? (
        <>
          <div className="chat-header d-flex align-items-center">
            <Image src={selectedUser.avatar} roundedCircle width={40} height={40} className="me-2" />
            <div className="ms-2">
              <h4 className="mb-0">{selectedUser.name}</h4>
              <div className="d-flex align-items-center">
                <span className={`status-indicator ${selectedUser.status}`} style={{ marginRight: '8px' }}></span>
                <span className="status-text">{selectedUser.status}</span>
              </div>
            </div>
          </div>
          <div className="chat-messages">
            <ListGroup>
              {messages.map((msg, index) => (
                <ListGroup.Item key={index}>{msg}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <Form className="chat-input" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Form>
        </>
      ) : (
        <div className="no-user-selected">
          <h5>Select a user to start chatting</h5>
        </div>
      )}
    </div>
  );
}

export default Chat;
