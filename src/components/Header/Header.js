import React from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const user = 'dfggfd';
    const handleLogout = () => {

    }
    return (
        <div>
            <Navbar collapseOnSelect className='' expand="lg" bg="dark" variant="light">
                <Container>
                    <Navbar.Brand> <Link className='text-decoration-none' to={'/'}>Free-Programming</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-decoration-none ms-3' to={'/faq'}>FAQ</Link>
                            <Link className='text-decoration-none ms-3' to={'/courses'}>Courses</Link>
                            <Link className='text-decoration-none ms-3' to={'/blogs'}>Blogs</Link>

                            {
                                <Link className='text-decoration-none ms-3' href="#">Dark</Link>
                            }
                        </Nav>

                        <Nav className=''>
                            <Link href="#deets" className='me-4 text-decoration-none'>
                                {
                                    user?.uid ? <>
                                        <span> {user?.displayName}</span>
                                        <Button className='text-decoration-none' onClick={handleLogout}>Log Out</Button>
                                    </> :
                                        <>
                                            <Link className='text-decoration-none me-4' to={'/login'}>Login</Link>
                                            <Link className='text-decoration-none' to={'/register'}>Register</Link>
                                        </>
                                }
                            </Link>
                            <Link to={'/profile'}>
                                {user?.photoURL ?
                                    <Image roundedCircle
                                        className='me-2'
                                        src={user?.photoURL}
                                        style={{ height: '40px' }}></Image>
                                    : <FaUserAlt></FaUserAlt>

                                }
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;