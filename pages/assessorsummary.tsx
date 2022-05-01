import type { NextPage } from "next"

const AccessorSummary: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full min-h-screen space-y-3 ">
      <h1 className="text-xl font-extrabold ">PROJECT LEVEL ASSESSMENT - FINAL ASSESSMENT SHEET</h1>
      <div className="flex flex-col w-full max-w-3xl space-y-3">
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Staff Name:</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400">Maxwell Adele </h2>
        </div>
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Department/Section</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400">Frontend Development </h2>
        </div>
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Assessor Name</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400">Frontend Development </h2>
        </div>
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Assessment Date</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400">Frontend Development </h2>
        </div>
        <div className="flex w-full ">
          <h2 className="w-2/5 p-3 text-black bg-orange-300">Target Level</h2>
          <h2 className="w-3/5 p-3 text-black bg-yellow-400">Frontend Development </h2>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="p-2 bg-yellow-400 border border-black">Target Level</th>
            <th className="p-2 bg-yellow-400 border border-black">Achieved?</th>
            <th className="p-2 bg-yellow-400 border border-black">Explanatory Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 bg-yellow-300 border border-black">JCP</td>
            <td className="p-2 border border-black">Achieved </td>
            <td className="p-2 border border-black">
              <select className="border-none outline-none ">
                <option>Yes</option>
                <option>No</option>
              </select>
            </td>
            <td className="p-2 border border-black">
              <textarea className="h-full outline-none" placeholder="Explanatory Notes"></textarea>
            </td>
          </tr>
          <tr>
            <td className="p-2 bg-yellow-300 border border-black">CAPEX SIZE</td>
            <td className="p-2 border border-black">$25 million as much as </td>
            <td className="p-2 border border-black">
              <select className="border-none outline-none ">
                <option>Yes</option>
                <option>No</option>
              </select>
            </td>
            <td className="p-2 border border-black">
              <textarea className="h-full outline-none" placeholder="Explanatory Notes"></textarea>
            </td>
          </tr>
          <tr>
            <td className="p-2 bg-yellow-300 border border-black">Flying Hours</td>
            <td className="p-2 border border-black">3 years with a single point</td>
            <td className="p-2 border border-black">
              <select className="border-none outline-none ">
                <option>Yes</option>
                <option>No</option>
              </select>
            </td>
            <td className="p-2 border border-black">
              <textarea className="h-full outline-none" placeholder="Explanatory Notes"></textarea>
            </td>
          </tr>
          <tr>
            <td className="p-2 bg-yellow-300 border border-black">Training</td>
            <td className="p-2 border border-black">Managing Access</td>
            <td className="p-2 border border-black">
              <select className="border-none outline-none ">
                <option>Yes</option>
                <option>No</option>
              </select>
            </td>
            <td className="p-2 border border-black">
              <textarea className="h-full outline-none" placeholder="Explanatory Notes"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="max-w-3xl ">
        *If JCP and Flying Hours criteria are met and either Capex Size and / or Training are the only outstanding
        requirement, the requestor shall apply for a waiver from his/her Line Manager. Assessor shall be informed. **The
        TD Project Capability team will maintain a list of equivalent courses.
      </p>
      <textarea
        className="w-full h-20 max-w-3xl p-2 border border-black rounded outline-none"
        placeholder="Competent or not yet Competent"
      ></textarea>
      <div className="p-3">
        <table style={{ width: "100%", border: "1px solid black" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black" }}></th>
              <th style={{ border: "1px solid black" }}>Name</th>
              <th style={{ border: "1px solid black" }}>Signature</th>
              <th style={{ border: "1px solid black" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid black" }}>Employee</td>
              <td style={{ border: "1px solid black" }}>
                {/* <input type={"text"} /> */}
                {/* {user.project.fullName} */}
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
                {/* <input type={"text"} /> */}
                {/* {user.project.supervisor} */}
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

export default AccessorSummary
