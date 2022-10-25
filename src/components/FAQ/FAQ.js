import React from 'react';
import img from '../../images/faq.jpg'

const FAQ = () => {
    return (
        <div className='text-center my-4'>
            <h1 className='my-4'>
                Frequently Asked Questions
            </h1>
            <div>
                <img className='img-fluid' src={img} alt="" />
            </div>
        </div>
    );
};

export default FAQ;