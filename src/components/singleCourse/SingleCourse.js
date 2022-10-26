import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pdf from 'react-to-pdf'
import { createRef } from 'react';
const ref = createRef();

const SingleCourse = () => {
    const course = useLoaderData()

    // console.log(course)
    const { image_url, title, id, mentor, rating, price, details } = course;

    return (
        <div className='container text-center' >

            <Card className='mx-auto' style={{ width: '70%' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div className='text-left'>
                        <p>Price : ${price}</p>
                        <p>Rating : {rating?.badge}</p>
                    </div>
                    <div className='mb-3'>
                        <div ref={ref}>
                            <h6>For Download</h6>
                        </div>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf}>Click here</button>}
                        </Pdf>
                    </div>


                    <Button variant="primary"><Link to={`/courses/premium/${id}`} className='text-light'>Go Premium</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;