import React from 'react'

function StudentMarkList(props) {


    let EngMarks=Number(props.EngMarks);
    let SciMarks=Number(props.SciMarks);
    let MathMarks=Number(props.MathMarks);
    let TelMarks=Number(props.TelMarks)
    let SocMarks=Number(props.SocMarks);
    let TotalMarks=EngMarks+SciMarks+MathMarks+TelMarks+SocMarks;
    let percentage=TotalMarks/500*100;

  return (
    <div>
         <table class="tb">
            <caption>{props.StudentName} MarksSheet</caption>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Maximum Marks</th>
                <th>MarksObtained</th>
                <th>Result</th>
                
            </tr>
        </thead>
        <tbody>
                <tr>
                <td>English</td>
                <td>100</td>
                <td>{EngMarks}</td>
                <td>{EngMarks>=35? "pass":"fail"}</td>
                </tr>
                
                <tr>
                <td>Science</td>
                <td>100</td>
                <td>{SciMarks}</td>
                <td>{SciMarks>=35? "pass":"fail"}</td>
                </tr>

                <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{MathMarks}</td>
                <td>{MathMarks>=35? "pass":"fail"}</td>
                </tr>

                <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{TelMarks}</td>
                <td>{TelMarks>=35? "pass":"fail"}</td>
                </tr>

                <tr>
                <td>Social</td>
                <td>100</td>
                <td>{SocMarks}</td>
                <td>{SocMarks>=35? "pass":"fail"}</td>
                </tr>
        </tbody>

        <tfoot>
                <tr>
                <td>TotalSubjects</td>
                <td>500</td>
                <td>{TotalMarks}({percentage.toFixed(2)}%)</td>
                <td>pass</td>
                </tr>
        </tfoot>
        </table>
    </div>
  )
}

export default StudentMarkList