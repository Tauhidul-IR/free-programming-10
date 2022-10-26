import React from 'react';
import { useContext } from 'react';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, setLoading } = useContext(AuthContext);



    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();



    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                toast.success("login Successfully")

            })
            .catch(e => console.error(e))
    }
    const handleGithubSIgnIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
                toast.success("login Successfully")

            })
            .catch(e => console.error(e))
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        //  signIn
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError('');
                toast.success("login Successfully")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })

    }




    return (
        <div onSubmit={handleSubmit} className='container'>
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
                            {error}
                        </Form.Text>
                        <h4>If you are a new user!!!</h4>
                        <h4> Please create a account then login...</h4>
                        <h5>For Registration go to <Link to={'/register'}>Registration</Link></h5>
                    </Form>
                </Col>

                {/* google and github login */}
                <Col sm='6' lg='6' className=' my-5'>
                    <h3>LogIn With</h3>
                    <ListGroup>
                        <ListGroup.Item className='mb-3'><Link onClick={handleGithubSIgnIn}><FaGithub /> Github</Link></ListGroup.Item>
                        <ListGroup.Item className='mb-3'><Link onClick={handleGoogleSignIn}><FaGoogle /> Google</Link></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>

    );
};

export default Login;