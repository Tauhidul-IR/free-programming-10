import React from 'react';

const Blogs = () => {
    return (
        <div className='py-6 bg-white text-black container'>
            <h1 className='text-4xl'>This is Blogs section</h1>
            <div className='w-2/4 mx-auto mt-5'>
                <div>
                    <h2 className='text-xl'>1.what is cors?</h2>
                    <p className='text-lg'>Ans..Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl'>2.Why are you using firebase?</h2>
                    <p className='text-lg'>Ans..
                        <nav>
                            <li>Google Analytics For Firebase</li>
                            <li>Realtime Database & Firestore</li>
                            <li>Crashlytics</li>
                            <li>Free Use of Dynamic Links</li>
                        </nav>

                    </p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl'>3. What other options do you have to implement authentication?</h2>
                    <p className='text-lg'>Ans..Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl'>4. How does the private route work?</h2>
                    <p className='text-lg'>Ans..The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl'>5. What is Node?</h2>
                    <p className='text-lg'>Ans..As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-xl'>6. How does Node work?</h2>
                    <p className='text-lg'>Ans..Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;