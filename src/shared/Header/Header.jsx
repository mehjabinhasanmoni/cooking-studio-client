import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
         .then()
         .catch(error =>{
            console.log(error);
         })

    }


    return (
        <div>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://i.ibb.co/7NMtdy5/logo.png" alt="" />
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                
                                    <Link to="/" className='border border-2 border-success p-2 m-2'>Home</Link>
                                
                                <Nav.Link href="#pricing"  className='border border-2 border-success p-2 m-2'>Blog</Nav.Link>
                                
                            
                            </Nav>
                            <Nav>
                                
                               
                                    <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
                               
                                
                                    
                                        <Button onClick={handleLogOut} varient="secondary">Logout</Button> :
                                        <Link to="/login">
                                            <Button varient="secondary">Login</Button>
                                        </Link>
                                   
                               
                            </Nav>
                        </Navbar.Collapse>
                </Container>
      </Navbar>
            
        </div>
    );
};

export default Header;