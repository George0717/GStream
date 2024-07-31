import React, { useState } from "react";
import { ListGroup, Image, Form } from "react-bootstrap";
import sampleImage from "../../assets/pict_1.jpg";

// Fungsi untuk menghasilkan nama acak
function getRandomName() {
  const names = ["Antonio", "Ferguso", "Armado", "John", "Doe", "Alice", "Bob", "Charlie"];
  return names[Math.floor(Math.random() * names.length)];
}

// Fungsi untuk menghasilkan status acak
function getRandomStatus() {
  const statuses = ["online", "busy", "offline"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

// Generate contacts
const contacts = Array.from({ length: 10 }, (_, id) => ({
  id: id + 1,
  name: getRandomName(),
  status: getRandomStatus(),
  avatar: sampleImage,
}));

// Warna status
const statusColors = {
  online: "green",
  busy: "red",
  offline: "gray",
};

function User({ onSelectUser }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    onSelectUser(contact);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-sidebar">
      <Form.Control
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-2"
      />
      <ListGroup>
        {filteredContacts.map((contact) => (
          <ListGroup.Item
            key={contact.id}
            active={selectedContact?.id === contact.id}
            onClick={() => handleContactClick(contact)}
            className="d-flex align-items-center user-item"
          >
            <div
              className="status-indicator"
              style={{ backgroundColor: statusColors[contact.status] }}
            />
            <Image src={contact.avatar} roundedCircle width={30} height={30} className="me-2" />
            <span>{contact.name}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default User;
