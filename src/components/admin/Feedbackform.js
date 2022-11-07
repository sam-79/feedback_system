import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

function Feedbackform({ questions }) {
    return (
        <div>

            <Form>


                {
                    questions.map((data, index) => {
                        
                        return (
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Question No. {index + 1}: {data.que}</Form.Label>
                                <ReactStars
                                    count={data.maxMarks}
                                    size={50}
                                    activeColor="#ffd700"
                                />


                            </Form.Group>
                        )
                    }
                    )
                }

                <Button className='justify-content-end' type="submit">Send form</Button>


            </Form>

        </div>

    )
}

export default Feedbackform