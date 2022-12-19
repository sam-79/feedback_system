import React, { useState } from 'react';
import {
    useParams, Link
} from "react-router-dom";

import { Form, Row, Col, Button } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';


function ActiveForm({ props }) {
    let { id } = useParams();
    let data = JSON.parse(id);

    const [questions, setQuestions] = useState([
        { id: "ques1", que: "Whether the teaching session plan, syllabus and the handout of the course were given in the semester.", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques2", que: "Whether the teacher has informed about the course material (question bank, books, worksheets etc and location of its availability?", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques3", que: "Whether the teacher has command over the subject?", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques4", que: "The topics are taught with basic concepts and examples", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques5", que: "The teacher encourages students to think and ask doubts.", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques6", que: "Whether the teacher implemented innovative teaching methods to make teaching more interactive?", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques7", que: "The topics taught till now are well understood by me.", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques8", que: "The teacher has good oral communication, blackboard writing and presentations in the ClassNameroom?", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques9", que: "CAE/Sessional exam question paper discussed & marks shown?", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques10", que: "The teacher is regular and punctual in engaging the classes.", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques11", que: "The teacher has good class control during teaching", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques12", que: "The teacher gives content beyond syllabus knowledge during the teaching", ans: "", ansValue: "4", maxMarks: 5 },
        { id: "ques13", que: "The teacher always shows a decent and impartial behavior towards the students.", ans: "", ansValue: "4", maxMarks: 2 },
        { id: "ques14", que: "The teacher is always available for guidance, doubts, clarification of queries after classes", ans: "", ansValue: "4", maxMarks: 5 },
    ])

    return (
        <div>
            {props}
            <br />
            <Row>

                <Col lg className="my-2">
                    <h4>College: {data.collegeName} GHRIETN</h4>
                </Col>
                <Col lg className="my-2">
                    <h4>Course: {data.courseName}</h4>
                </Col>
                <Col lg className="my-2">
                    <h4>Year: {data.Year}</h4>
                </Col>
                <Col lg className="my-2">
                    <h4>Semester: {data.semValue}</h4>
                </Col>
                <Col lg className="my-2">
                    <h4>Subject: {`${data.subjectName}(${data.subjectType})`}</h4>
                </Col>
            </Row>
            <Form>
                {
                    questions.map((data, index) => {
                        return (
                            <Form.Group id={`q-${index+1}`} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Question No. {index + 1}: {data.que}</Form.Label>
                                <div>
                                <ReactStars
                                    count={data.maxMarks}
                                    size={50}
                                    activeColor="#ffd700"
                                    onChange={(x)=>console.log(x)}
                                />
                                <input  style={{border:"none"}}/>
                                </div>
                            </Form.Group>
                        )
                    }
                    )
                }
                <Link class="btn btn-primary" to={"/student"} role="button" id="liveToastBtn" onClick={()=>alert("Form Submitted successfully")}>Submit form</Link>
            </Form>

        </div>
    )
}

export default ActiveForm