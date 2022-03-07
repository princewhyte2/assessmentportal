import { Tab } from "@headlessui/react"

const Project = () => {
  return (
    <div className="min-h-screen h-full w-screen overflow-x-hidden flex justify-center lg:p-10  items-center bg-blue-400 text-black">
      <div className="p-4 bg-white">
        <h1 className="py-3 text-center">Project Competency Assessment Details</h1>
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-2 ">
            <Tab
              className={({ selected }) =>
                selected ? " text-black font-bold p-2" : "bg-gray-100 text-black font-normal p-2"
              }
            >
              General Employee Details
            </Tab>
            <Tab
              className={({ selected }) =>
                selected ? " text-black font-bold p-2" : "bg-gray-100 text-black font-normal p-2"
              }
            >
              Your Education Details
            </Tab>
            <Tab
              className={({ selected }) =>
                selected ? " text-black font-bold p-2" : "bg-gray-100 text-black font-normal p-2"
              }
            >
              Project Information Deatails
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="w-full border">
                <div className="px-3 py-2 border-b bg-gray-100">Fill Your General Employee Details</div>
                <div className="p-4">
                  <div>
                    <label>Enter Email Address</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Enter Full Name</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Ref. Indicator</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Job Title/Role</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Department</label>
                    <div className="w-full rounded-md p-3 my-2 border">
                      <select className="w-full ">
                        <option>TP</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label>Years of Experience in Project Delivery</label>
                    <div className="w-full rounded-md p-3 my-2 border">
                      <select className="w-full ">
                        <option>0</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label>Relevant Training(s) attended with dates</label>
                    <textarea className="w-full outline-none rounded-md p-3 my-2 border h-16" />
                  </div>
                  <div>
                    <label>Upload you CV and Assessment Evidence </label>
                    <input type="file" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Primary Skillpool </label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Secondary Skillpool</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Last Approved Project Level </label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Supervisor </label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div className="flex justify-center space-x-2 py-8">
                    <button className="rounded border p-3 text-white bg-blue-400">Next</button>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full border">
                <div className="px-3 py-2 border-b bg-gray-100">Fill Your Education Details</div>
                <div className="p-4">
                  <div>
                    <label>Key Date</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Education</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>

                  <div>
                    <label>Certificate</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>

                  <div className="flex justify-center space-x-2 py-8">
                    <button className="rounded border p-3">Previous</button>
                    <button className="rounded border p-3 text-white bg-blue-400">Next</button>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full border">
                <div className="px-3 py-2 border-b bg-gray-100">Project Information Details</div>
                <div className="p-4">
                  <div>
                    <label>Project/Portfolio Name</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Size</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>Complexity</label>
                    <div className="w-full rounded-md p-3 my-2 border">
                      <select className="w-full ">
                        <option>Low</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label>Project Management Role</label>
                    <input type="text" className="w-full outline-none rounded-md p-3 my-2 border" />
                  </div>
                  <div>
                    <label>ORP Phases(Type in as it applies to you, i.e, Phase 1, Phase 2, Phase 3)</label>
                    <textarea className="w-full outline-none rounded-md p-3 my-2 border h-16" />
                  </div>
                  <div>
                    <label>Challenges</label>
                    <textarea className="w-full outline-none rounded-md p-3 my-2 border  h-16" />
                  </div>
                  <div>
                    <label>Results Achieved</label>
                    <textarea className="w-full outline-none rounded-md p-3 my-2 border h-16" />
                  </div>
                  <div>
                    <label>Details </label>
                    <textarea className="w-full outline-none rounded-md p-3 my-2 border h-16" />
                  </div>
                  <div className="flex justify-center space-x-2 py-8">
                    <button className="rounded border p-3">Previous</button>
                    <button className="rounded border p-3 text-white bg-green-400">Register</button>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default Project
