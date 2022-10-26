import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blogs from '../Blogs/Blogs';
import Courses from '../Courses/Courses';
import FAQ from '../FAQ/FAQ';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Premium from '../Premium/Premium';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';
import SingleCourse from '../singleCourse/SingleCourse';
import Terms from '../Terms/Terms';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://free-programming-server.vercel.app/courses`)
            },
            {
                path: '/courses/:id',
                element: <SingleCourse></SingleCourse>,
                loader: ({ params }) => fetch(`https://free-programming-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/courses/premium/:id',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://free-programming-server.vercel.app/courses/premium/${params.id}`)
            },
        ]
    },
    { path: '*', element: <div>Page not Found</div> }
])