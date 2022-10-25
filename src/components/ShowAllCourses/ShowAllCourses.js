import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowAllCourses = ({ courses }) => {
    console.log(courses)
    const { image_url, title, id, mentor, price, details } = courses;
    const info = details.slice(0, 110);
    console.log(info)
    return (
        <CardGroup className='col-12 col-sm-6 col-lg-4 mb-2'>
            <Card className=''>
                <Card.Img className='' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {`${info}...`}
                    </Card.Text>
                </Card.Body>
                <Button variant="primary"><Link className='text-dark' to={`/courses/${courses.id}`}>See More</Link></Button>

            </Card>
        </CardGroup>
    );
};

export default ShowAllCourses;