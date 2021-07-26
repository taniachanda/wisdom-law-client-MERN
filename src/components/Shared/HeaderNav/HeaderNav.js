import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import { UserContext } from "../../../App";
import logo from "../../../icons/logo2.png";
import "./HeaderNav.css";

const HeaderNav = () => {
  // const [loggedInUser] = useContext(UserContext);
  // const [admin, setAdmin] = useState(false);
  const history = useHistory();
  const handleSignOut = () => {
    localStorage.clear();
    history.go(0);
  };
  // const name = JSON.parse(localStorage.getItem("name"));
  const email = JSON.parse(localStorage.getItem("email"));

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar fixed-top"
        variant="light"
      >
        <Navbar.Brand
          className=" navbar-brand text-white"
          style={{ fontFamily: "'Cinzel Decorative', cursive" }}
        >
          <img src={logo} alt="Wisdom law" width="50" height="40" />
          WISEDOM <span> LAW</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ml-auto nav-items text-white fw-bold text-decoration-none"
            style={{ textDecoration: "none", color: "#faf8ff" }}
          >
            <Nav.Link className="m-2 text-white active" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="m-2 text-white" href="#services">
              SERVICES
            </Nav.Link>
            <Nav.Link className="m-2 text-white" href="#testimonial">
              TESTIMONIAL
            </Nav.Link>
            <Nav.Link className="m-2 text-white" href="#blog">
              BLOG
            </Nav.Link>
            <Nav.Link eventKey={2} className="text-light">
              {/* {email && <Nav.Link>{name}</Nav.Link>} */}
              {email && (
                <Button
                  size="lg"
                  onClick={handleSignOut}
                  className="btn-c text-decoration-none fw-bold"
                >
                  Log Out
                </Button>
              )}
              {!email && (
                <Button
                  size="lg"
                  className="btn-c text-decoration-none fw-bold"
                >
                  <Link to="/logIn">Log in</Link>
                </Button>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HeaderNav;
