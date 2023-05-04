import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const[error, setError] = useState('');
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
               setError(error.message);
            })
    }


    return (
        <Container className='w-25 mx-auto mt-5 mb-5'>
        <h1>Please Login</h1>
        <Form onSubmit={handleLogin} className="border border-2 border-success p-5">
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
            <Form.Text className="text-danger">
                <p>{error}</p>
            </Form.Text>
        </Form>
    </Container>
    );
};

export default Login;