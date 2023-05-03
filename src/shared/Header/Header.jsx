import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    // const {user} = useContext(AuthContext);

    // const handleLogOut = () =>{
    //     logOut()
    //      .then()
    //      .catch(error =>{
    //         console.log(error);
    //      })

    // }


    return (
        <div>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Cooking-Studio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                
                                    <Link to="/">Home</Link>
                                
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                            
                            </Nav>
                            <Nav>
                                {/* {
                                user && 
                                    <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
                               }
                                
                                    {
                                        user ? 
                                        <Button onClick={handleLogOut} varient="secondary">Logout</Button> :
                                        <Link to="/login">
                                            <Button varient="secondary">Login</Button>
                                        </Link>
                                    } */}
                               
                            </Nav>
                        </Navbar.Collapse>
                </Container>
      </Navbar>
            
        </div>
    );
};

export default Header;