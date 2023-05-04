import React, { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  NavLink,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const current = useLocation();
  const cont = useContext(AuthContext);
  const { user, logOut } = cont;
  console.log("current rout", current);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName}
    </Tooltip>
  );

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img src="https://i.ibb.co/7NMtdy5/logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link
                to="/"
                className={`border border-2 border-success p-2 m-2  ${
                  current?.pathname === "/" && "activeLink"
                }`}
              >
                Home
              </Link>

              <Link
                to="/blog"
                className={`border border-2 border-success p-2 m-2  ${
                  current?.pathname === "/blog" && "activeLink"
                }`}
              >
                Blog
              </Link>
            </Nav>
            <Nav>
              {/* {
                                user && {user.email}
                            } */}

              {user ? (
                <>
                  {user?.photoURL ? (
                    <div className="avatar">
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <img src={user?.photoURL} alt="missing" />
                      </OverlayTrigger>
                    </div>
                  ) : (
                    <div><FaUserCircle style={{fontSize:'50px'}}></FaUserCircle></div>
                  )}
                  <Button
                    onClick={handleLogOut}
                    variant="outline-secondary"
                    className="mx-1"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
