import React, { useState, useEffect } from 'react';

import { Navbar, Nav, Container, Offcanvas, Button, Row, Col, Dropdown, Form } from 'react-bootstrap';

import { Routes, Route, Link, useLocation, } from 'react-router-dom';

import { AuthContext } from './LoginAdmin';
import AddQuestions from './AddQuestions';

import ActivateForm from './ActivateForm';
import ActiveForm from './ActiveForm';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Dashboard from './Dashboard';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Home() {

    const { state, dispatch } = React.useContext(AuthContext);
    const url = '';

    return (
        <div>
            {/* Navigation Bar */}
            <Navbar key={'nav'} bg="primary" expand={false} className="mb-3 rounded-bottom" sticky="top">
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
                        Welcome, {state.displayName}
                        <span>
                            <ul className="nav nav-pills nav-fill">

                                <li className="nav-item mx-2">
                                    <Link to='./'>
                                        <Button variant="outline-light" >
                                            Home
                                        </Button>
                                    </Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to='activateForm'>
                                        <Button variant="outline-light" >
                                            Forms
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </span>




                        <Navbar.Toggle as={Button} aria-controls={`offcanvasNavbar-expand`} className="btn-light" />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand`}
                            aria-labelledby={`offcanvasNavbarLabel-expand`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                    Admin Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link>
                                        <Link to="./">
                                            <i class="bi bi-house"></i>
                                            Home
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="add-questions">
                                            <i class="bi bi-house"></i>
                                            Add Questions
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="activateForm">
                                            <i class="bi bi-house"></i>
                                            Activate Form
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="activateForm">
                                            <i class="bi bi-house"></i>
                                            Activate Form
                                        </Link>
                                    </Nav.Link>


                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </div>

                </Container>
            </Navbar>

            <section>
                <div class="container">
                    {/* <!-- Page Content --> */}
                    <div class="row vh-100 d-flex justify-content-center my-5">
                        <div class="col md-8 lg-6 xs-12">
                            {/* Main Content goes here */}
                            <Routes>
                                <Route exact path={'/'} element={<Dashboard />} />
                                <Route exact path={`/add-questions`} element={<AddQuestions />} />
                                <Route exact path={`/activateForm`} element={<ActivateForm />} />
                                <Route exact path={`/activateForm/:id`} element={<ActiveForm />} />

                            </Routes>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Home