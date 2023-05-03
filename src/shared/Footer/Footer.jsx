import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaGooglePlus, FaInstagram, FaPaperPlane, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-light p-5'>
            <Container>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='text-center'>
                         <img src="https://i.ibb.co/7NMtdy5/logo.png" alt="" />
                         <h2 className='mt-3'>Your Trusted Cooking Studio</h2>
                         <h5 className='mt-2'>Join adventure of Bangladeshi chefs</h5>
                    
                    </div>
                    
                </div>

                <Row className='mt-5 d-flex align-items-center justify-space-between'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <h3>Get Social with Us</h3>
                            <Link to='/'>
                                <FaFacebook style={{fontSize:'2.5em',margin:'10px'}}>

                                </FaFacebook>
                            </Link>
                            <Link to="/">
                                <FaTwitter style={{fontSize:'2.5em',margin:'10px'}}>

                                </FaTwitter>
                            </Link>
                            <Link to="/">
                                <FaInstagram style={{fontSize:'2.5em',margin:'10px',color:'red'}}>

                                </FaInstagram>
                            </Link>
                            <Link to="/">
                                <FaGooglePlus style={{fontSize:'2.5em',margin:'10px',color:'red'}}>

                                </FaGooglePlus>
                            </Link>
                    </div>
                    <div className='subscribe col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                    
                    <h3>Subscribe</h3>
                    <input type="text" placeholder="Enter Your Email" />
                    <Button variant="success"><FaPaperPlane></FaPaperPlane>  Subscribe</Button>
            
                    </div>
                </Row>
            </Container>

            <p className='text-center mt-3'>Copyright 2023 All Rights Reserved by <strong className="text-success">Cooking Studio</strong> </p>
        </div>
      
    );
};

export default Footer;