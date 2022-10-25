import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Form className='container my-5'>
            <h1>Please Login.</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Form.Text className="text-danger">
                {/* {error} */}
            </Form.Text>
            <h4>If you are a new user!!!</h4>
            <h4> Please create a account then login...</h4>
            <h5>For Registration go to <Link to={'/register'}>Registration</Link></h5>
        </Form>
    );
};

export default Login;