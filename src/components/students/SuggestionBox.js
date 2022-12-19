import React, { useState } from 'react';


function SuggestionBox() {

    const [suggestion, setSuggestion] = useState("");

    const submitSuggestion = () => {
        alert("suggestion submitted")
    }


    return (
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Suggestion Box</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <div class="input-group">
                        <textarea class="form-control" aria-label="With textarea" value={suggestion} onInput={(e) => { setSuggestion(e.target.value) }}></textarea>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="Submit" class="btn btn-primary" data-bs-dismiss="modal" onClick={submitSuggestion}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default SuggestionBox