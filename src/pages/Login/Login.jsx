import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 mx-auto mt-5 mb-5'>
        <h1>Please Login</h1>
        <Form  className="border border-2 border-success p-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="success" type="submit">
                Login
            </Button>
            <br />
            <Form.Text className="text-secondary">
                Don't Have an Account? <Link to="/register">Register</Link>
            </Form.Text>
            <Form.Text className="text-success">

            </Form.Text>
            <Form.Text className="text-danger">

            </Form.Text>
        </Form>
    </Container>
    );
};

export default Login;