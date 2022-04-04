const TFAssessment = () => {
  return (
    <div className="w-screen h-full min-h-screen ">
      <h1 className="text-2xl font-bold text-purple-600 ">TF Assessment</h1>
      <div className="flex pr-16 mr-16 space-x-52">
        <div className="flex-1">
          <div className="flex border border-black">
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Staff Name:</div>
              <div className="p-3 border-r border-black">
                <input type="text" value={"Prince whyte Dabotubo"} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Ref Indicator</div>
              <div className="p-3 border-r border-black">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="flex mt-3 border border-black">
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Assessor</div>
              <div className="p-3 border-r border-black">
                <input type="text" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Assessment Date</div>
              <div className="p-3 border-r border-black">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="flex mt-3 border border-black">
            <div className="flex items-center">
              <div className="p-3 border-r border-black">PL Designation</div>
              <div className="p-3 border-r border-black">Front End Engineer</div>
            </div>
          </div>
          <div className="flex mt-3 border border-black">
            <div className="flex items-center">
              <div className="p-3 border-r border-black">Project Level</div>
              <div className="p-3 border-r border-black">Project Level 2</div>
            </div>
          </div>
        </div>
        <div className="text-white bg-red-500 border-2 border-black w-44">
          <div>
            Proceed to final Assessment by an independent assessor only when Line Head agrees project JCP score has met
            minimum criteria of 80%
          </div>
        </div>
      </div>
      <div>
        <table style={{ width: "100%", border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}>Project Discipline Job Competence Profiles</th>
              <th style={{ border: "1px solid black" }}>Target Levels</th>
              <th style={{ border: "1px solid black" }}>Staff Entry</th>
              <th style={{ border: "1px solid black" }}>Evidence</th>
              <th style={{ border: "1px solid black" }}>Line Entry</th>
              <th style={{ border: "1px solid black" }}>Staff Score</th>
              <th style={{ border: "1px solid black" }}>Line Score</th>
              <th style={{ border: "1px solid black" }}>Weighted Line Score</th>
              <th style={{ border: "1px solid black" }}>Assessor Entry</th>
              <th style={{ border: "1px solid black" }}>Weighted Assessor Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>
                COMPETENCY LEVELS A = Awareness and Understanding K = Working Knowledge S = Skill
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>0%</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>2%</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>competence level</td>
              <td style={{ border: "1px solid black" }}>2</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>Not Achieved</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>Not Achieved</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Project competence</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Business Case Value</td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Evaluate & Frame Opportunities</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>0</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Deliver Commercial Values</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>0</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Cost Estimating</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>0</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Project Risk Management</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>0</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Probablistic Cost & schedule Risk Analysis</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>0</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Drive & project performance</td>
              <td style={{ border: "1px solid black" }}>S</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>0</td>
              <td style={{ border: "1px solid black" }}>
                <select>
                  <option>Not Achieved</option>
                  <option>Achieved</option>
                </select>
              </td>
              <td style={{ border: "1px solid black" }}>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
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
    </div>
  )
}

export default TFAssessment
