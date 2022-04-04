const ProjectLevelAssessment = () => {
  return (
    <div>
      <h2>Project Level Assessment - Final Assessment Sheet</h2>
      <div className="flex">
        <div>Staff Name:</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="flex">
        <div>Department/Section</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="flex">
        <div>Assessor Name</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="flex">
        <div>Assessment Date</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="flex">
        <div>Target Level: </div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div>
        <table style={{ width: "100%", border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}></th>
              <th style={{ border: "1px solid black" }}>Target Level</th>
              <th style={{ border: "1px solid black" }}>Achieved? </th>
              <th style={{ border: "1px solid black" }}>Explanatory Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>JCP</td>
              <td style={{ border: "1px solid black" }}>Achieved Ref: TP/TF Entry Sheet</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>
                <textarea />
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          {" "}
          *If JCP and Flying Hours criteria are met and either Capex Size and / or Training are the only outstanding
          requirement, the requestor shall apply for a waiver from his/her Line Manager. Assessor shall be informed.
          **The TD Project Capability team will maintain a list of equivalent courses.
        </p>
      </div>
      <h2>Assessor Recommendation</h2>
      <textarea />
      <table style={{ width: "100%", border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}></th>
            <th style={{ border: "1px solid black" }}>Signature</th>
            <th style={{ border: "1px solid black" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black" }}>Employee</td>
            <td style={{ border: "1px solid black" }}>
              <input type={"text"} />
            </td>
            <td style={{ border: "1px solid black" }}>
              <input type={"text"} />
            </td>
            <td style={{ border: "1px solid black" }}>
              <input type={"text"} />
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>Assessor</td>
            <td style={{ border: "1px solid black" }}>
              <input type={"text"} />
            </td>
            <td style={{ border: "1px solid black" }}>
              <input type={"text"} />
            </td>
            <td style={{ border: "1px solid black" }}>
              <input type={"text"} />
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black" }}>Supervisor</td>
            <td style={{ border: "1px solid black" }}>
              <input type={"text"} />
            </td>
            <td style={{ border: "1px solid black" }}>
              <input type={"text"} />
            </td>
            <td style={{ border: "1px solid black" }}>
              <input type={"text"} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProjectLevelAssessment
