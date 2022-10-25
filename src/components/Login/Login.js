import React from 'react';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <Row>
                <Col sm='6' lg='6' className=''>
                    <Form className=' my-5'>
                        <h1>Login with Email .</h1>
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
                </Col>

                <Col sm='6' lg='6' className=' my-5'>
                    <h3>LogIn With</h3>
                    <ListGroup>
                        <ListGroup.Item className='mb-3'><Link><FaGithub /> Github</Link></ListGroup.Item>
                        <ListGroup.Item className='mb-3'><Link><FaGoogle /> Google</Link></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>

    );
};

export default Login;