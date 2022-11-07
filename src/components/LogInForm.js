import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form, Collapse } from "react-bootstrap";



function LoginForm({ props }) {

    const [signInOpen, setSignInOpen] = useState(true);
    const [signUpOpen, setSignUpOpen] = useState(false);



    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <Card className="shadow">
                        <div className="border border-3 border-primary rounded-top"></div>
                        <Card.Body>
                            {/* <!-- Signin/Signup switch --> */}
                            <div className="row align-items-center">
                                <Button
                                    className='btn-primary col m-1'
                                    onClick={() => setSignInOpen(!signInOpen)}
                                    aria-controls="signinContent signupContent"
                                    aria-expanded={signInOpen}
                                >
                                    Signin
                                </Button>

                                <Button
                                    className='btn-primary col m-1'
                                    onClick={() => setSignUpOpen(!signUpOpen)}
                                    aria-controls="signupContent signinContent"
                                    aria-expanded={signUpOpen}
                                >
                                    Signup
                                </Button>
                            </div>

                            {/* Signup  Form */}
                            <Collapse in={signInOpen} onEnter={()=>setSignUpOpen(false)} >
                                <div className="mb-3 mt-md-4" id='signinContent'>
                                    <h2 className="fw-bold mb-2 text-uppercase ">{props.formTitle} Signin</h2>
                                    <p className=" mb-5">Please enter your login and password!</p>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" value={props.email} onChange={(e) => { props.setEmail(e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" value={props.password} onChange={(e) => { props.setPassword(e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                                <p className="small">
                                                    <a className="text-primary" href="#!">
                                                        Forgot password?
                                                    </a>
                                                </p>
                                                
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="button" onClick={props.authenticateUser}>
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Collapse>


                            {/* SignUp Form */}
                            <Collapse in={signUpOpen} onEnter={()=>setSignInOpen(false)}>
                                <div className="mb-3 mt-md-4" id='signupContent'>
                                    <h2 className="fw-bold mb-2 text-uppercase ">{props.formTitle} Signup</h2>
                                    <p className=" mb-5">Please enter your details</p>
                                    <div className="mb-3">
                                        <Form>

                                            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Enter Name
                                                </Form.Label>
                                                <Form.Control type="text" placeholder="Enter name" value={props.name} onChange={(e) => { props.setEmail(e.target.value) }} />
                                            </Form.Group> */}

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" value={props.email} onChange={(e) => { props.setEmail(e.target.value) }} />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" value={props.password} onChange={(e) => { props.setPassword(e.target.value) }} />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                                <p className="small">
                                                    <a className="text-primary" href="#!">
                                                        Forgot password?
                                                    </a>
                                                </p>
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="button" onClick={props.authenticateUser}>
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>
                                        {/* <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Don't have an account?{" "}
                                            <a href="" className="text-primary fw-bold">
                                                Sign Up
                                            </a>
                                        </p>
                                    </div> */}
                                    </div>
                                </div>
                            </Collapse>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm;