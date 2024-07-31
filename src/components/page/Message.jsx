import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Chat from "../navbar/Chat";
import User from '../navbar/User';

export default function Message() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <Row>
        <Col xs={12} md={3} className="user-sidebar-col">
          <User onSelectUser={handleUserSelect} />
        </Col>
        <Col xs={12} md={9}>
          <Chat selectedUser={selectedUser} />
        </Col>
      </Row>
    </div>
  );
}
