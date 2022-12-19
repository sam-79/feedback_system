import React from 'react';
import { Navbar, Container, Button} from 'react-bootstrap';



import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            {/* <Link to={'./admin'}>
                <Button variant="primary">Admin Login</Button>
            </Link>
            <Link to={'./student'}>
                <Button variant="primary">Student Login</Button>
            </Link> */}

            {/* Navigation Bar */}
            <Navbar key={'nav'} bg="primary" expand={false} style={{ borderRadius: '0 0 10px 10px', padding: "20px 0 20px 0" }} sticky="top">
                {/* Navbar Content */}
                <Container fluid>
                    {/* Title and Logo */}
                    <Link to={"./"}>
                        <Navbar.Brand href="#home" className='text-white'>
                            <img
                                alt="Raisoni Logo"
                                src="https://rgicdn.s3.ap-south-1.amazonaws.com/raisonimain/rgi-logo-white.webp"
                                width="50"
                                className="d-inline-block align-top mx-2"
                            />{' '}
                            Feedback Management System
                        </Navbar.Brand>
                    </Link>


                    <div className="d-flex align-items-center text-white ">
                        {/* <!-- Navbar Options --> */}



                    </div>

                </Container>
            </Navbar>

            <div class="container-fluid">
                <div class="container fs-1 text text-center my-3">

                    Student Feedback and Suggestion System

                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">

                            <video controls style={{ width: "100%", }} poster="videoPoster.jpeg" >
                                <source src="videoLink"
                                    type="video/webm" />

                                <source src="videoLink"
                                    type="video/mp4" />

                                Download the
                                <a href="videoLink">WEBM</a>
                                or
                                <a href="videoLink">MP4</a>
                            </video>

                        </div>
                        <div class="col-sm-6">
                            <ul>
                                <li className='fs-4 text'>Managed Multiple Forms at single place</li>
                                <li className='fs-4 text'>Managed Multiple Forms at single place</li>
                                <li className='fs-4 text'>Manage questions</li>
                                <li className='fs-4 text'>Generate Certificates</li>
                                <li className='fs-4 text'>Managed Multiple Forms at single place</li>
                                <li className='fs-4 text'>Managed Multiple Forms at single place</li>
                            </ul>

                            <Link to={'./admin'}>
                                <Button variant="primary">Admin Login</Button>
                            </Link>
                            <Link to={'./student'}>
                                <Button variant="primary">Student Login</Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home