import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for toggle

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="sidebar-toggle btn btn-primary"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link href="/home" className="active">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/channels">Channels</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/friends">Friends</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default SideBar;
