import React from 'react'
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>

            <Link to={'./admin'}>
                <Button variant="primary">Admin Login</Button>
            </Link>
            <Link to={'./student'}>
                <Button variant="primary">Student Login</Button>
            </Link>

            
        </div>
    )
}

export default Home