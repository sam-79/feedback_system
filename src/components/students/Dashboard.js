import React, { useState, useEffect } from 'react';

import { Container, Image, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { AuthContext } from './LoginStudent';


function Dashboard() {
    const { state, dispatch } = React.useContext(AuthContext);

    const [assignedForm, setAssignedForm] = useState(null);


    const getAssignedForms = () => {
        //function to get list of forms assigned to the logged in user

        let assignForms = [
            { id: "F1", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'UDM', subjectType: 'Theory' },
            { id: "F2", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'IIN', subjectType: 'Theory' },
            { id: "F3", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'UHV', subjectType: 'Theory' },
            { id: "F4", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'Content Desgining', subjectType: 'Theory' },
            // { id: "F6", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'Machine Learning', subjectType: 'Theory' }
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
        <Container>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
                <span style={{ marginTop: 50 }}>
                    <h5 className="my-3">Forms assigned for feedback</h5>
                    {
                        (assignedForm != null && assignedForm.length > 0) ?
                            assignedForm.map((data, index) => {
                                
                                return (
                                    <div key={`${data.id}-${index}`} className="my-2" >
                                        <Link to={`${JSON.stringify(data)}`} >
                                            {`${data.id} - ${data.subjectName}(${data.subjectType}) - ${data.courseName}`}
                                        </Link>
                                        <br />
                                        {/* <p>Last date: {data.lastDate}</p> */}
                                    </div>
                                )
                            })
                            :
                            <p>Currently, no forms assigned</p>
                    }

                </span>
                <span >
                    <Image src='https://i.pinimg.com/originals/60/e2/5c/60e25cbc6ab9f4d2c8564729127bf9eb.gif' height={500} />
                </span>
            </div>
        </Container >
    )
}

export default Dashboard