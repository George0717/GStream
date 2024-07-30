import React, { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div className="chat">
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
    </div>
  );
}

export default Chat;
