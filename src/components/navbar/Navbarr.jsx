import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Samehlogo from "../assets/sameh.png";
import "./navbar.css"

const Navbarr = () => {
  return (
    <>
      <Navbar
        className="navbar-nav"
        variant="dark"
        style={{
          background:
            "linear-gradient(rgb(105,113,132) ,rgb(157,161,171))",boxShadow:" 5px 1px 10px #999"
        }}
      >
        <Container>
          <Nav className="me-auto">
            <NavLink className="navbar-brand" to="/">
              Home
            </NavLink>
            <NavLink className="navbar-brand" to="/public">
              Public Quiz
            </NavLink>
            <NavLink className="navbar-brand" to="/islamic">
              Islamic Quiz
            </NavLink>
          </Nav>
          <Nav>
            <img
              src={Samehlogo}
              alt="sameh-logo"
              style={{ width: "150px", height: "30px" }}
            />
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Navbarr;
