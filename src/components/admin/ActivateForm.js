import React, { useEffect, useState } from 'react';

import { Navbar, Nav, Container, Offcanvas, Button, Row, Col, Table, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

function ActivateForm({ props }) {


  const getCollegeList = () => {
    // function to get list of college 
  }
  const getCourseList = (collegeName) => {
    // function to get list of available Courses for particular college 
  }
  const getYearList = (courseName) => {
    // function to get list of Semester available for that Course 
  }
  const getSemesterList = (yearName) => {
    // function to get list of Semester available for that Course 
  }
  const getSubjectList = (semValue) => {
    // function to get list of Subjects based semester
  }
  const getSubjectTypeList = (subjectName) => {
    // function to get list of subject type based on selected subject 
  }
  const getFormQuestions = (subjectType) => {
    // get form questions
  }

  useEffect(() => {
    getCollegeList()

    return () => {

    }
  }, [])


  return (
    <div>
      <Container>
        <fieldset>
          <legend><h1 className="fs-1">Create Form</h1></legend>
          <Form>

            <Row>
              <Col lg className="my-2">

                <label for='college-select'>Select College</label>
                <Form.Select id='college-select' aria-label="Select College" onChange={(event) => getCourseList(event.target.value)}>
                  <option>All</option>
                  {
                    ["GHRIETN",'GHRAETN','GHRIITN','GHRPCN'].map((data, index) => {
                      return (
                        <option as={'p'} key={`${data}-${index}`} value={data}>{data}</option>
                      )
                    })
                  }
                </Form.Select>

              </Col>
              <Col lg className="my-2">
              <label for='course-select'>Select Course</label>
                <Form.Select id='course-select' aria-label="Select Course" onChange={(event) => getYearList(event.target.value)}>
                  <option>All</option>
                  {
                    ["B.Tech",'B.E.','B.Com.','BBA','B.SC.'].map((data, index) => {
                      return (
                        <option as={'p'} key={`${data}-${index}`} value={data}>{data}</option>
                      )
                    })
                  }
                </Form.Select>
              </Col>

              <Col lg className="my-2">
              <label for='year-select'>Select Year</label>
                <Form.Select id='year-select' aria-label="Select Year" onChange={(event) => getSemesterList(event.target.value)}>
                  <option>All</option>
                  {
                    ["First",'Second','Third','Fourth'].map((data, index) => {
                      return (
                        <option as={'p'} key={`${data}-${index}`} value={data}>{data}</option>
                      )
                    })
                  }
                </Form.Select>
              </Col>

              <Col lg className="my-2">
              <label for='semester-select'>Select Semester</label>
                <Form.Select id='semester-select' aria-label="Select Semester" onChange={(event) => getSubjectList(event.target.value)}>
                  <option>All</option>
                  {
                    ["5th Sem",'6th Sem'].map((data, index) => {
                      return (
                        <option as={'p'} key={`${data}-${index}`} value={data}>{data}</option>
                      )
                    })
                  }
                </Form.Select>
              </Col>
              <Col lg className="my-2">
              <label for='subject-select'>Select Subject</label>

                <Form.Select id='subject-select' aria-label="Select Subject" onChange={(event) => getSubjectTypeList(event.target.value)}>
                  <option>All</option>
                  {
                    ["UDM",'INN','Machine Learning','Employability Skills','UHV','Content Designing'].map((data, index) => {
                      return (
                        <option as={'p'} key={`${data}-${index}`} value={data}>{data}</option>
                      )
                    })
                  }
                </Form.Select>
              </Col>
              <Col lg className="my-2">
              <label for='subjectType-select'>Select Subject Type</label>

                <Form.Select id='subjectType-select' aria-label="Select Subject Type" onChange={(event) => getFormQuestions(event.target.value)}>
                  <option>All</option>
                  {
                    ["Theory",'Practical'].map((data, index) => {
                      return (
                        <option as={'p'} key={`${data}-${index}`} value={data}>{data}</option>
                      )
                    })
                  }
                </Form.Select>
              </Col>

            </Row>
            <Col lg className="my-2">
              <Button onClick={()=>{
                alert("Form send successful");

              }}>Send form</Button>
            </Col>
          </Form>

        </fieldset>
      </Container>


      <Container style={{ marginTop: 50, backgroundColor: '#f3f3f3', borderRadius: 10, padding: 10 }}>

        {
          // templateSettings.batch && templateSettings.subject && templateSettings.formType ?
          //   <h5>Creating form for {templateSettings.batch} Batch <br />
          //     for the subject {templateSettings.subject} [{templateSettings.formType}]

          //   </h5> :
          //   ''

        }

        {

          // formQuestions.length > 0 ?
          //   <Feedbackform questions={formQuestions} />
          //   : ''

        }
      </Container>


      <Container>
        <h1 className="fs-1">Active Forms</h1>

        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>College</th>
                <th>Course</th>
                <th>Year</th>
                <th>Sem</th>
                <th>Subject</th>
                <th>Subject Type</th>
                <th>View Form</th>
              </tr>
            </thead>
            <tbody>

              {
                [{ id: "F1", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'UDM', subjectType: 'Theory' },
                { id: "F2", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'IIN', subjectType: 'Theory' },
                { id: "F3", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'UHV', subjectType: 'Theory' },
                { id: "F4", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'Content Desgining', subjectType: 'Theory' },
                // { id: "F5", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'Machine Learning', subjectType: 'Practical' },
                { id: "F6", collegeName: "GHRIETN", courseName: 'BTech', Year: 3, semValue: 6, subjectName: 'Machine Learning', subjectType: 'Theory' }
              ]
                  .map((data, index) => {
                    return (
                      // <Link to={`${data.id}`}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{data.collegeName}</td>
                          <td>{data.courseName}</td>
                          <td>{data.Year}</td>
                          <td>{data.semValue}</td>
                          <td>{data.subjectName}</td>
                          <td>{data.subjectType}</td>
                          <td><Link to={`${JSON.stringify(data)}`}>View</Link></td>

                        </tr>
                      // </Link>
                      )
                  })
              }
            </tbody>
          </Table>


        </div>

      </Container>


    </div>
  )
}

export default ActivateForm