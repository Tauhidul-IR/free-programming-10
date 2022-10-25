import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Form className='container my-4'>
            <h1>Please Register First</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    // onClick={handleAccepted}
                    label={<>Accept <Link to={'/terms'}> Terms and condition</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" >
                Submit
            </Button>
            <Form.Text className="text-danger">
                {/* {error} */}
            </Form.Text>
        </Form>
    );
};

export default Register;