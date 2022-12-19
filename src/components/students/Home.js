import React, { useState } from 'react';

import { Navbar, Container, Button } from 'react-bootstrap';

import { Routes, Route, Link } from 'react-router-dom';

import ActiveForm from './ActiveForm';
import { AuthContext } from './LoginStudent';
import Profile from './Profile';
import SuggestionBox from './SuggestionBox';
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
            <nav id="sidebar" className={toggleSideBar ? "active" : null}>
                <div class="sidebar-header">
                    <h3>Welcome,<br /> {state.displayName}</h3>
                </div>
                <ul class="list-unstyled components">

                    <div class="sidebar-header" style={{ background: '#062552', padding: '10px', }}>
                        Menu
                    </div>
                    <li >
                        <Link to="./">
                            <i class="bi bi-house"></i>
                            {"  "}Home
                        </Link>

                    </li>
                    <li>
                        <Link to="profile">
                            <i class="bi bi-person"></i>
                            {"  "}Profile
                        </Link>
                    </li>
                    <li>
                        <div data-bs-toggle="modal" data-bs-target="#suggestionModal">
                            <i class="bi bi-box-arrow-right"></i>
                            {"  "}Suggestion Box
                        </div>
                    </li>
                    <li>
                        <div onClick={() => dispatch({ type: 'LOGOUT' })}>
                            <i class="bi bi-box-arrow-right"></i>
                            {"  "}Logout
                        </div>

                    </li>
                </ul>
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

                                <span>
                                    <Navbar.Toggle as={Button} onClick={() => { setToggleSideBar(!toggleSideBar) }} aria-controls={`offcanvasNavbar-expand`} className="btn-light" />
                                </span>

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
                                        <Route exact path={`/profile`} element={<Profile />} />
                                        <Route exact path={`/:id`} element={<ActiveForm />} />

                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="modal fade" id="suggestionModal" tabindex="-1" aria-labelledby="suggestionModalBox" aria-hidden="true">
                        <SuggestionBox />
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Home