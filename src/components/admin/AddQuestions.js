import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import Feedbackform from './Feedbackform';

function AddQuestions() {

    const [showModal,setShowModal]=useState(false);

    const [questions, setQuestions] = useState([
        { id: "ques1", que: "Whether the teaching session plan, syllabus and the handout of the course were given in the semester.", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques2", que: "Whether the teacher has informed about the course material (question bank, books, worksheets etc and location of its availability?", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques3", que: "Whether the teacher has command over the subject?", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques4", que: "The topics are taught with basic concepts and examples", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques5", que: "The teacher encourages students to think and ask doubts.", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques6", que: "Whether the teacher implemented innovative teaching methods to make teaching more interactive?", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques7", que: "The topics taught till now are well understood by me.", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques8", que: "The teacher has good oral communication, blackboard writing and presentations in the ClassNameroom?", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques9", que: "CAE/Sessional exam question paper discussed & marks shown?", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques10", que: "The teacher is regular and punctual in engaging the classes.", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques11", que: "The teacher has good class control during teaching", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques12", que: "The teacher gives content beyond syllabus knowledge during the teaching", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques13", que: "The teacher always shows a decent and impartial behavior towards the students.", ans: "", ansValue: "", maxMarks: 5 },
        { id: "ques14", que: "The teacher is always available for guidance, doubts, clarification of queries after classes", ans: "", ansValue: "", maxMarks: 5 },
    ])


    const addQuestionField = () => {
        // console.log(questions)
        // let newData = { id: "ques", que: "", ans: "", ansValue: "", maxMarks: 0 };
        // let data = questions;
        // data.push(newData);
        setQuestions([...questions, { id: "ques", que: "", ans: "", ansValue: "", maxMarks: 1 }]);
        console.log("added", questions)

    }

    const removeQuestionField = (index) => {

        let updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1)
        setQuestions(updatedQuestions)
    }

    const QuestionField = ({ props }) => {

        const updateListQuestion = (index, value) => {
            let old_List = [...questions];
            old_List[index].que = value;
            setQuestions(old_List);
        }
        const updateListMarks = (index, value) => {
            let old_List = [...questions];
            old_List[index].maxMarks = value;
            setQuestions(old_List);
        }

        let [que, setQue] = useState(props.data.que);
        let [marks, setMarks] = useState(props.data.maxMarks);



        return (
            <>
                <label >Question No.: {props.index + 1}</label>
                <input autoComplete="off" className="input d-inline form-control w-100 m-1"
                    type="text" placeholder="Type Question" value={`${que}`} onChange={(e) => { setQue(e.target.value) }} onBlur={(e) => updateListQuestion(props.index, e.target.value)} />
                <input autoComplete="off" className="input d-inline form-control w-25 m-1"
                    type="number" min={1} max={5} placeholder="Type Marks" value={`${marks}`} onChange={(e) => { setMarks(e.target.value) }} onBlur={(e) => updateListMarks(props.index, e.target.value)} />
                <Button className="btn btn-danger" type="button" onClick={() => removeQuestionField(props.index)}>-</Button>
            </>
        )
    }

    

    return (
        <>
            <h1 className="fs-1">Add Questions</h1>
            {/* <!-- form fields / question fields-- > */}

            <div className="container">

                <div className="row">

                    <Form id='feedback-form'>

                        {
                            questions.map((data, index) => {

                                return (
                                    <div key={index} >
                                        <QuestionField props={{ data, index }} />
                                    </div>
                                )
                            })
                        }


                        <Button className="m-1" onClick={() => addQuestionField()}>
                            Add Field
                        </Button>

                        <Button className="m-1" onClick={()=>setShowModal(true)}>Preview Feedback Form</Button>

                        <Modal show={showModal} onHide={()=>setShowModal(false)} size={"lg"}>
                            <Modal.Header closeButton>
                                <Modal.Title>Feedback Form Preview</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Feedbackform questions={questions}/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={()=>setShowModal(false)}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>



                    </Form>

                </div>

            </div>
        </>

    )
}

export default AddQuestions