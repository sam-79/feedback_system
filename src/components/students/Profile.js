import React from 'react';

import { Container } from 'react-bootstrap';

function Profile() {

    const [editableForm, setEditableForm] = React.useState(true);

    return (
        <Container>
            <h2 class='my-2'>Profile</h2>

            <hr style={{color:"black"}}/>


            <form>
                <div class="mb-3">
                    <label for="registrationNumber" class="form-label">Registration Number</label>
                    <input type="text" disabled={editableForm} class="form-control" id="registrationNumber"
                    
                     />
                </div>
                <div class="mb-3">
                    <label for="collegeName" class="form-label">College Name</label>
                    <input type="text" disabled={editableForm} class="form-control" id="collegeName" />
                </div>
                <div class="row g-2 mb-3">
                    <div class="col-md">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" disabled={editableForm} class="form-control" id="firstName"
                        
                         />
                    </div>
                    <div class="col-md">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" disabled={editableForm} class="form-control" id="lastName"
                        
                         />
                    </div>
                </div>
                <div class="mb-3">
                    <label for="courseName" class="form-label">Course</label>
                    <input type="text" disabled={editableForm} class="form-control" id="courseName"
                    
                     />
                </div>
                <div class="mb-3">
                    <label for="branchName" class="form-label">Branch</label>
                    <input type="text" disabled={editableForm} class="form-control" id="branchName"
                    
                     />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Personal Email</label>
                    <input type="email" disabled={editableForm} class="form-control" id="email"
                    
                      />
                </div>
                <div class="mb-3">
                    <label for="collegeEmail" class="form-label">College Email</label>
                    <input type="email" disabled={editableForm} class="form-control" id="collegeEmail"
                    
                     />
                </div>
                <div class="mb-3">
                    <label for="rollNum" class="form-label">Roll number</label>
                    <input type="number" disabled={editableForm} class="form-control" id="rollNum"
                    
                     />
                </div>
                <div class="mb-3">
                    <label for="semester" class="form-label">Semester</label>
                    <input type="number" disabled={editableForm} class="form-control" id="semester"
                    
                     />
                </div>
                <div class="mb-3">
                    <label for="section" class="form-label">Section</label>
                    <input type="text" disabled={editableForm} class="form-control" id="section"
                    
                     />
                </div>
                <div class="mb-3">
                    <label for="mobile" class="form-label">Mobile</label>
                    <input type="number" disabled={editableForm} class="form-control" id="mobile"
                    
                     />
                </div>


                <div>
                    <span class='mx-2'>
                        <div type="button" class="btn btn-primary" onClick={() => { setEditableForm(true) }}>Save</div>
                    </span>
                    <span class='mx-2'>
                        <div type="button" class="btn btn-primary" onClick={() => { setEditableForm(false) }}>Edit</div>
                    </span>
                </div>
            </form>

        </Container >
    )
}

export default Profile