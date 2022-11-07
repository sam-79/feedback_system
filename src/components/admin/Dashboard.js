import React, { useState, useEffect } from 'react';

import { Navbar, Nav, Container, Offcanvas, Button, Row, Col, Dropdown, Form } from 'react-bootstrap';

import { AuthContext } from './LoginAdmin';
import Feedbackform from './Feedbackform';

import CreateChart from './CreateChart';

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
                <div style={{ height: 200, width: 400 }}>
                    <CreateChart />
                </div>
            </Container>




        </div>
    )
}

export default Dashboard