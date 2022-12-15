import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import img from '../../images/program.jpg'
import { Button, Col, Row } from 'react-bootstrap';

const Home = () => {

    return (
        <div className='home mb-3 container'>
            <Row>
                <Col>
                    <img className='w-100' src={img} alt="" />
                    <h1>Free-Programming</h1>
                    <h4>Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts. By the end, you’ll know whether Data Science, Computer Science or Web Development is right for you.</h4>
                    <h3>To start this Skill Path.</h3>
                    <Button variant="primary"> <Link to={'/courses'} className='text-light text-decoration-none'>Try it Free</Link></Button>
                </Col>
            </Row>
        </div>
    );
};

export default Home;