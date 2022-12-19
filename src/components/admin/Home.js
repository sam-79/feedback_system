import React, { useState } from 'react';

import { Navbar, Container, Button } from 'react-bootstrap';

import { Routes, Route, Link, } from 'react-router-dom';

import { AuthContext } from './LoginAdmin';
import AddQuestions from './AddQuestions';

import ActivateForm from './ActivateForm';
import ActiveForm from './ActiveForm';
import GenerateCertificate from './GenerateCertificate';
import Suggestion from './Suggestion';

import '../Sidebar.css'

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
import Results from './Results';


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
    const [toggleSideBar, setToggleSideBar] = useState(false);

    return (
        <div class="wrapper">
            {/* <!-- Sidebar  --> */}
            <nav id="sidebar" className={toggleSideBar ? "active" : null} >
                <div>
                    <div class="sidebar-header">
                        <h3>Welcome,<br /> {state.displayName}</h3>
                    </div>
                    <ul class="list-unstyled components">

                        <div class="sidebar-header" style={{ background: '#062552', padding: '10px', }}>
                            Menu
                        </div>
                        <li class="active">
                            <Link to="./">
                                <i class="bi bi-house"></i>
                                {"   "}Home
                            </Link>

                        </li>
                        <li>
                            <Link to="add-questions">
                                <i class="bi bi-plus-square"></i>
                                {"   "}Add Questions
                            </Link>
                        </li>
                        <li>
                            <Link to="activateForm">
                                <i class="bi bi-box-arrow-in-up-right"></i>
                                {"   "}Activate Form
                            </Link>

                        </li>
                        <li>
                            <Link to="studentSuggestion">
                                <i class="bi bi-chat-text"></i>
                                {"   "}Student's Suggestion
                            </Link>

                        </li>
                        <li>
                            <Link to="generateCertificate">
                                <i class="bi bi-printer"></i>
                                {"   "}Generate Certificate
                            </Link>

                        </li>
                        <li>
                            <div onClick={() => dispatch({ type: 'LOGOUT' })}>
                                <i class="bi bi-box-arrow-right"></i>
                                {"   "}Logout
                            </div>

                        </li>
                    </ul>
                </div>
            </nav>

            {/* <!-- Page Content  --> */}
            <div id="content">

                <div>
                    {/* Navigation Bar */}
                    <Navbar key={'nav'} bg="primary" expand={false} style={{ borderRadius: '0 0 10px 0' }} sticky="top">
                        {/* Navbar Content */}
                        <Container fluid>
                            {/* Title and Logo */}
                            <Link to={"./"}>
                                <Navbar.Brand href="#home" className='text-white sidebar-header'>
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

                                <span>
                                    <Navbar.Toggle as={Button} onClick={() => { setToggleSideBar(!toggleSideBar) }} aria-controls={`offcanvasNavbar-expand`} className="btn-light" />
                                </span>





                                {/* <Navbar.Offcanvas
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
                                </Navbar.Offcanvas> */}
                            </div>

                        </Container>
                    </Navbar>

                    <section>
                        <div class="container">
                            {/* <!-- Page Content --> */}
                            <div class="row vh-100 d-flex justify-content-center">
                                <div class="col md-8 lg-6 xs-12">
                                    {/* Main Content goes here */}
                                    <Routes>
                                        <Route exact path={'/'} element={<Dashboard />} />
                                        <Route exact path={`/add-questions`} element={<AddQuestions />} />
                                        <Route exact path={`/activateForm`} element={<ActivateForm />} />
                                        <Route exact path={`/activateForm/:id`} element={<ActiveForm />} />
                                        <Route exact path={`/studentsuggestion`} element={<Suggestion />} />
                                        <Route exact path={`/generateCertificate`} element={<GenerateCertificate />} />
                                        <Route exact path={`/results/:id`} element={<Results />} />


                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
        </div >

    )
}

export default Home