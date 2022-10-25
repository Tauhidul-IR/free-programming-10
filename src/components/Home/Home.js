import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {

    return (
        <div className='home'>
            <h1>Free-Programming</h1>
            <h4>Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts. By the end, you’ll know whether Data Science, Computer Science or Web Development is right for you.</h4>
            <h3>To start this Skill Path.</h3>
            <button> <Link>Try it free</Link></button>
        </div>
    );
};

export default Home;