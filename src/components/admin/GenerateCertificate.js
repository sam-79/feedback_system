import React from 'react';
import { Container } from 'react-bootstrap';

import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';

function GenerateCertificate() {

    const [placeholderValues, setPlaceHolderValues] = React.useState(null);
    // {
    //     "date": "15/11/2022",
    //     "name": "Sameer Borkar",
    //     "designation": "Owner",
    //     "department": "CSE",
    //     "subjectName": "Python",
    //     "feedbackPercentage": "99"
    // }

    function loadFile(url, callback) {
        PizZipUtils.getBinaryContent(url, callback);
    }


    const generateFile = () => {
        let placeHolderData;
        try {

            placeHolderData = JSON.parse(placeholderValues)
        } catch (error) {
            alert("provided JSON is not in proper format")
            return
        }
        loadFile(
            require('./Warning_letter.docx'),
            function (error, content) {
                if (error) {
                    throw error;
                }
                var zip = new PizZip(content);
                var doc = new Docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });
                doc.setData(placeHolderData);
                try {
                    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                    doc.render();
                } catch (error) {
                    // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
                    function replaceErrors(key, value) {
                        if (value instanceof Error) {
                            return Object.getOwnPropertyNames(value).reduce(function (
                                error,
                                key
                            ) {
                                error[key] = value[key];
                                return error;
                            },
                                {});
                        }
                        return value;
                    }
                    console.log(JSON.stringify({ error: error }, replaceErrors));

                    if (error.properties && error.properties.errors instanceof Array) {
                        const errorMessages = error.properties.errors
                            .map(function (error) {
                                return error.properties.explanation;
                            })
                            .join('\n');
                        console.log('errorMessages', errorMessages);
                        // errorMessages is a humanly readable message looking like this :
                        // 'The tag beginning with "foobar" is unopened'
                    }
                    throw error;
                }
                var out = doc.getZip().generate({
                    type: 'blob',
                    mimeType:
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                }); //Output the document using Data-URI
                saveAs(out, 'output.docx');
            }
        );
    }

    return (
        <Container>
            GenerateCertificate
            <br/>

            <label>Enter value : </label>
            <input type="textarea"
                name="textValue"
                onChange={(e) => { setPlaceHolderValues(e.target.value) }}
                value={placeholderValues}
            />

            <input type="submit" value="Submit" onClick={() => { generateFile() }} />


        </Container>
    )
}

export default GenerateCertificate