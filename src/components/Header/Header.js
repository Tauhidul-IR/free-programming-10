import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLayerGroup } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';

import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { useState } from 'react';





const Header = () => {
    const [theme, setTheme] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    //set theme
    const handleTheme = () => {
        if (theme === false) {

            setTheme(true)
        }
        else {
            setTheme(false)
        }
    }

    //Logout part
    const handleLogout = () => {
        logOut()
            .then(result => {
            })
            .catch(error => console.error(error))
    }

    //Tooltip part
    const renderTooltip = props => (
        <Tooltip {...props}>{user?.displayName}</Tooltip>
    );
    return (
        <div>
            <Navbar collapseOnSelect className='' expand="lg" bg="dark" variant="light">
                <Container>
                    <Navbar.Brand>
                        <FaLayerGroup className='text-light fs-3'></FaLayerGroup>

                        <Link className='text-decoration-none' to={'/'}>Free-Programming</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-decoration-none ms-3' to={'/'}>Home</Link>
                            <Link className='text-decoration-none ms-3' to={'/courses'}>Courses</Link>
                            <Link className='text-decoration-none ms-3' to={'/faq'}>FAQ</Link>
                            <Link className='text-decoration-none ms-3' to={'/blogs'}>Blogs</Link>
                            {/* theme part */}
                            {

                                theme ?
                                    <Link onClick={handleTheme} className='text-decoration-none ms-3' href="#">light</Link>
                                    :
                                    <Link onClick={handleTheme} className='text-decoration-none ms-3' href="#">dark</Link>
                            }
                            {/* theme part end*/}
                        </Nav>

                        <Nav className=''>
                            <Link href="#deets" className='me-4 text-decoration-none'>
                                {/* login & Register */}
                                {
                                    user?.uid ? <>
                                        <span className='text-light me-3'> {user?.displayName}</span>
                                        <Button className='text-decoration-none' onClick={handleLogout}>Log Out</Button>
                                    </> :
                                        <>
                                            <Link className='text-decoration-none me-4' to={'/login'}>Login</Link>
                                            <Link className='text-decoration-none' to={'/register'}>Register</Link>
                                        </>
                                }
                                {/* login & Register end */}
                            </Link>
                            {/* user profile */}
                            <Link to={'/profile'}>
                                {user?.photoURL ?
                                    <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                        <Image roundedCircle
                                            className='me-2'
                                            src={user?.photoURL}
                                            style={{ height: '40px' }}></Image>
                                    </OverlayTrigger>

                                    : <FaUserAlt></FaUserAlt>

                                }
                            </Link>
                            {/* user profile end*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;



