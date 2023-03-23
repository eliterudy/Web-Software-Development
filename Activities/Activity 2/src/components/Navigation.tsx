import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Nav className="justify-content-center bg-black" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/About">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Products">Products</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
