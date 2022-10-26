import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const preCourse = useLoaderData();

    const { image_url, title, id, mentor, rating, price, details } = preCourse;
    // console.log(preCourse)
    return (
        <div className='container text-center' >

            <Card className='mx-auto' style={{ width: '50%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div className='text-left'>
                        <p>Price : ${price}</p>
                        <p>Rating : {rating?.badge}</p>
                        <p>Mentor : {mentor?.name}</p>
                        <img style={{ height: '40px' }} src={mentor?.img} alt="" />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Premium;