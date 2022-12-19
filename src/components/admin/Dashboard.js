import React, { useState, useEffect } from 'react';

import { Navbar, Nav, Container, Offcanvas, Button, Row, Col, Dropdown, Form } from 'react-bootstrap';

import { AuthContext } from './LoginAdmin';
import CreateChart from './CreateChart';
import {Link} from 'react-router-dom';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Dashboard() {

    const { state, dispatch } = React.useContext(AuthContext);
    
    return (
        <div>

            <Container>
                <h1>Form results</h1>
                {/* render list of forms */}


                <div class="row">
                    {
                        [{ department: 'CSE Department', id:1 }, { department: 'ETC Department', id:1 }, { department: 'EE Department', id:1 }, { department: 'AI Department', id:1 }, { department: 'Cyber Security Department', id:1 }]
                            .map((data, index) => {
                                return (
                                    <div class="col-sm-5 m-1">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">{data.department}</h5>
                                                <p class="card-text">
                                                    <div style={{ height: 200, width: 400 }}>
                                                        <CreateChart />
                                                    </div>
                                                </p>
                                                <Link to={`results/${data.id}`} class="btn btn-primary">View Complete Result</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }


                </div>
            </Container>




        </div>
    )
}

export default Dashboard