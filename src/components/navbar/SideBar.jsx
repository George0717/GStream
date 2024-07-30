import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // Use Link and useLocation

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="sidebar-toggle btn btn-primary"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/channel"
              className={location.pathname === "/channel" ? "active" : ""}
            >
              Channels
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/friends"
              className={location.pathname === "/friends" ? "active" : ""}
            >
              Friends
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/settings"
              className={location.pathname === "/settings" ? "active" : ""}
            >
              Settings
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/logout"
              className={location.pathname === "/logout" ? "active" : ""}
            >
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default SideBar;
