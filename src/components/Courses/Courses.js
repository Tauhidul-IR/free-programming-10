import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ShowAllCourses from '../ShowAllCourses/ShowAllCourses';
import SingleCourse from '../singleCourse/SingleCourse';

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses)
    return (
        <div className='container text-center'>
            <h1>All Courses</h1>
            <div className='my-4'>
                <Row>
                    <Col lg='3'>
                        {
                            allCourses.map(courses => <p key={courses.id}>
                                <Link to={`/courses/${courses.id}`}>{courses.title}</Link>
                            </p>)
                        }
                    </Col>
                    <Col lg='9' className='row'>
                        {
                            allCourses.map(courses => <ShowAllCourses key={courses.id} courses={courses}></ShowAllCourses>)
                        }
                    </Col>
                </Row>
            </div>
        </div>
    );
};
// {
//     categories.map(category => <p key={category.id}>
//         <Link to={`/category/${category.id}`}>{category.name}</Link>
//     </p>)
// }
export default Courses;