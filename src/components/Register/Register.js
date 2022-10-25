import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
// import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const { user, createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        // form.reset()
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(result);
                setError('');
                form.reset();
                // handleUpdateUserProfile(name, photoURL);
                // handleEmailVerification();
                // toast.success('please verify email before login')
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            });

    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }




    return (
        <Form onSubmit={handleSubmit} className='container my-4'>
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
                    onClick={handleAccepted}
                    label={<>Accept <Link to={'/terms'}> Terms and condition</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accepted}>
                Submit
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;