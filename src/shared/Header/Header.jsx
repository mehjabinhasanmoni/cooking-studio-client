import  { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaClipboard, FaComment, FaHome, FaRegistered, FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
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
          <Navbar.Collapse id="responsive-navbar-nav text-right">
            <Nav className="mx-auto">
              
            </Nav>
            <Nav >
            <Link
                to="/"
                className={`d-flex justify-content-center align-items-center border border border-success px-4 py-3 me-2 my-2 rounded ${
                  current?.pathname === "/" && "activeLink"
                }`}
              >
                <FaHome></FaHome> Home
              </Link>

              <Link
                to="/blog"
                className={`d-flex justify-content-center align-items-center border border border-success px-4 py-3 me-2 my-2 rounded ${
                  current?.pathname === "/blog" && "activeLink"
                }`}
              >
                <FaComment></FaComment> Blog
              </Link>

              {user ? (
                <>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    {user?.photoURL ? (
                      <div className="avatar my-2 mx-auto">
                        <img src={user.photoURL} referrerPolicy="no-referrer" alt="User Avatar" />
                      </div>
                    ) : (
                      <div className="my-2 mx-auto">
                        <FaUserCircle
                          style={{ fontSize: "60px" }}
                        ></FaUserCircle>
                      </div>
                    )}
                  </OverlayTrigger>
                  <Button
                    onClick={handleLogOut}
                    variant="outline-success"
                    className="my-2 ms-2 p-3 d-block"
                  >
                    <FaSignOutAlt></FaSignOutAlt> Logout
                  </Button>
                </>
              ) : (
                <>
                 <Link to="/login" className={`d-flex justify-content-center align-items-center border border border-success px-4 py-3 me-2 my-2 rounded ${
                  current?.pathname === "/login" && "activeLink"
                }`}>
                  <FaSignInAlt></FaSignInAlt> &nbsp; Login
                </Link>
                <Link to="/register" className={`d-flex justify-content-center align-items-center border border border-success px-4 py-3 me-2 my-2 rounded ${
                  current?.pathname === "/register" && "activeLink"
                }`}>
                  <FaClipboard></FaClipboard> &nbsp; Register
                </Link>
                </>
               
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
