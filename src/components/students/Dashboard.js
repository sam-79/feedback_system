import React, { useState, useEffect } from 'react';

import { Navbar, Nav, Container, Offcanvas, Button, Row, Col, Image, Form } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

import { AuthContext } from './LoginStudent';


function Dashboard() {
    const { state, dispatch } = React.useContext(AuthContext);

    const [assignedForm, setAssignedForm] = useState(null);


    const getAssignedForms = () => {
        //function to get list of forms assigned to the logged in user

        let assignForms = [
            { id: "ABC01", subject: 'DSA', faculty: 'Pushpa Birha', lastDate: '11-11-22' },
            { id: "ABC01", subject: 'DSA', faculty: 'Pushpa Birha', lastDate: '11-11-22' },
            { id: "ABC01", subject: 'DSA', faculty: 'Pushpa Birha', lastDate: '11-11-22' },
            { id: "ABC01", subject: 'DSA', faculty: 'Pushpa Birha', lastDate: '11-11-22' },

        ]
        setAssignedForm(assignForms);

    }

    useEffect(() => {

        getAssignedForms()

        return () => {
            setAssignedForm(null);
        }
    }, [])


    return (
        <div>
            {/* Navigation Bar */}
            <Navbar key={'nav'} bg="light" expand={false} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">Dashboard</Navbar.Brand>

                    <Navbar className="justify-content-end" style={{ alignSelf: 'flex-end' }}>
                        <Navbar.Text>
                            Welcome, {state.displayName}
                        </Navbar.Text>
                    </Navbar>

                    <Navbar.Toggle />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                        placement="end"
                    >

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Nav className="justify-content-end" >

                            <Button href="#
                            
                            " variant="outline-primary" size='lg' >Home</Button>
                            <Button variant="outline-primary" size='lg' onClick={() => { dispatch({ type: 'LOGOUT' }) }}>Logout</Button>

                        </Nav>
                        <Offcanvas.Body>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <h3>Welcome, {state.displayName}</h3>
            <hr align={'center'} width={"50%"} />

            <Container>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <span style={{ marginTop: 50 }}>
                        <h5>Forms assigned for feedback</h5>

                        {
                            (assignedForm != null && assignedForm.length > 0) ?
                                assignedForm.map((data, index) => {
                                    return (
                                        <div key={`${data.id}-${index}`}>
                                            <a href='#' style={{ textDecoration: 'None', fontSize: 20 }}>
                                                {data.subject} - {data.faculty}
                                            </a><br />
                                            <p>Last date: {data.lastDate}</p>
                                        </div>
                                    )
                                })
                                :
                                <p>Currently, no forms assigned</p>
                        }

                    </span>
                    <span >
                        <Image src='assets/7709382_3721106.jpg' height={500} />
                    </span>
                </div>
            </Container >


            <Container>

            </Container>


        </div >
    )
}

export default Dashboard