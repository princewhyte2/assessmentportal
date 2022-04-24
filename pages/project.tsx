import { useState } from "react"
import { Tab } from "@headlessui/react"
import axios from "axios"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"

const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const Project = ({ user }: any) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [refIndicator, setRefIndicator] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [cvAssessmentFiles, setCvAssessmentFiles] = useState<FileList>()
  // const [department, setDepartment] = useState("")
  const [yrsOfExp, setYrsOfExp] = useState("")
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    size: "",
    complexity: "low",
    duration: "",
    projectManageMentRole: "",
    orpPhases: "",
    challenges: "",
    details: "",
    resultsAchieved: "",
  })
  const [projects, setProjects] = useState<
    {
      name: string
      size: string
      complexity: string
      duration: string
      projectManageMentRole: string
      orpPhases: string
      challenges: string
      details: string
      resultsAchieved: string
    }[]
  >([])
  const [priSkillPool, setPriSkillPool] = useState("")
  const [secSkillPool, setSecSkillPool] = useState("")
  const [lastApprovedProjectLevel, setLastApprovedProjectLevel] = useState("")
  const [relevantTrainings, setRelevantTraining] = useState<
    { keyDate: string | null; training: string | null; certificate: string | null }[]
  >([])
  const [education, setEducation] = useState<
    { keyDate: string | null; education: string | null; certificate: string | null }[]
  >([])
  const [supervisor, setSupervisor] = useState("")
  const [showButton, setShowButton] = useState(false)
  const [relevantButton, setRelevantButton] = useState(false)
  const [addProject, setAddProject] = useState(false)
  const [educationDetails, setEducationDetails] = useState<{
    keyDate: string | null
    education: string | null
    certificate: string | null
  }>({ keyDate: null, education: null, certificate: null })
  const [trainingDetails, setTrainingDetails] = useState<{
    keyDate: string | null
    training: string | null
    certificate: string | null
  }>({ keyDate: null, training: null, certificate: null })

  function handleAddEducation() {
    if (!educationDetails?.certificate && !educationDetails?.education && !educationDetails?.keyDate) return
    setEducation([...education, educationDetails])
    setEducationDetails({ keyDate: null, education: null, certificate: null })
    setShowButton(false)
  }

  function handleRemoveEducation(index: number) {
    const newEducation = [...education]
    newEducation.splice(index, 1)
    setEducation(newEducation)
  }

  function handleAddTraining() {
    setRelevantTraining([...relevantTrainings, trainingDetails])
    setTrainingDetails({ keyDate: null, training: null, certificate: null })
    setRelevantButton(false)
  }

  function handleRemoveTraining(index: number) {
    const newTraining = [...relevantTrainings]
    newTraining.splice(index, 1)
    setRelevantTraining(newTraining)
  }

  function handleRemoveProject(index: number) {
    const newProjects = [...projects]
    newProjects.splice(index, 1)
    setProjects(newProjects)
  }

  function handleAddProject() {
    setProjects([...projects, projectDetails])
    setProjectDetails({
      name: "",
      size: "",
      complexity: "low",
      duration: "",
      projectManageMentRole: "",
      orpPhases: "",
      challenges: "",
      details: "",
      resultsAchieved: "",
    })
    setAddProject(false)
  }

  async function handleRegisteration(e: any) {
    e.preventDefault()
    if (!cvAssessmentFiles) {
      window.alert("Please upload your CV")
      return
    }
    if (!isValidEmail(email)) {
      window.alert("Please enter a valid email")
      return
    }
    const response = window.confirm("Are you sure all fields are filled correctly ?")
    if (!response) return
    setIsLoading(true)
    const formData = new FormData()
    const data = JSON.stringify({
      email,
      fullName,
      refIndicator,
      jobTitle,
      yrsOfExp,
      projects,
      priSkillPool,
      secSkillPool,
      lastApprovedProjectLevel,
      education,
      supervisor,
      relevantTrainings,
    })
    formData.append("data", data)

    if (cvAssessmentFiles) {
      for (let i = 0; i < cvAssessmentFiles.length; i++) {
        formData.append("cvAssessmentFiles", cvAssessmentFiles[i])
      }
    }

    try {
      const { data } = await axios.post(`/api/project/${user.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      setIsLoading(false)
      console.log("success", data)
      router.push("/user-general")
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center w-screen h-full min-h-screen overflow-x-hidden text-black bg-blue-400 lg:p-10">
      <div className="w-full p-4 bg-white">
        <h1 className="py-3 text-center">Project Competency Assessment Details</h1>
        <Tab.Group selectedIndex={selectedIndex}>
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
                <div className="px-3 py-2 bg-gray-100 border-b">Fill Your General Employee Details</div>
                <div className="p-4">
                  <div>
                    <label>Enter Email Address</label>
                    <input
                      value={email}
                      required
                      onChange={({ target }) => setEmail(target.value)}
                      type="email"
                      className="w-full p-3 my-2 border rounded-md outline-none"
                    />
                  </div>
                  <div>
                    <label>Enter Full Name</label>
                    <input
                      value={fullName}
                      onChange={({ target }) => setFullName(target.value)}
                      type="text"
                      className="w-full p-3 my-2 border rounded-md outline-none"
                    />
                  </div>
                  <div>
                    <label>Ref. Indicator</label>
                    <input
                      value={refIndicator}
                      onChange={({ target }) => setRefIndicator(target.value)}
                      type="text"
                      className="w-full p-3 my-2 border rounded-md outline-none"
                    />
                  </div>
                  <div>
                    <label>Job Title/Role</label>
                    <input
                      value={jobTitle}
                      onChange={({ target }) => setJobTitle(target.value)}
                      type="text"
                      className="w-full p-3 my-2 border rounded-md outline-none"
                    />
                  </div>
                  {/* <div>
                    <label>Department</label>
                    <div className="w-full p-3 my-2 border rounded-md">
                      <select className="w-full ">
                        <option>TP</option>
                      </select>
                    </div>
                  </div> */}
                  <div>
                    <label>Years of Experience in Project Delivery</label>
                    <div className="w-full p-3 my-2 border rounded-md">
                      <select value={yrsOfExp} onChange={({ target }) => setYrsOfExp(target.value)} className="w-full ">
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={13}>11+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label>Relevant Training(s) attended with dates</label>{" "}
                    <div>
                      <table style={{ width: "100%", border: "1px solid black" }}>
                        <thead>
                          <tr>
                            <th style={{ border: "1px solid black" }}>Key Date</th>
                            <th style={{ border: "1px solid black" }}>Training</th>
                            <th style={{ border: "1px solid black" }}>Certificate</th>
                            <th>
                              {" "}
                              {!relevantButton && <button onClick={() => setRelevantButton(true)}>Add Training</button>}
                            </th>
                          </tr>
                        </thead>
                        {relevantTrainings.map((item, index) => (
                          <tbody key={index}>
                            <tr>
                              <td style={{ border: "1px solid black" }}>{item.keyDate}</td>
                              <td style={{ border: "1px solid black" }}>{item.training}</td>
                              <td style={{ border: "1px solid black" }}>{item.certificate}</td>
                              <td style={{ border: "1px solid black" }}>
                                <button onClick={() => handleRemoveTraining(index)}>remove</button>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                    {relevantButton && (
                      <div>
                        <div>
                          <label>Key Date</label>
                          <input
                            onChange={({ target }) => setTrainingDetails({ ...trainingDetails, keyDate: target.value })}
                            type="date"
                            className="w-full p-3 my-2 border rounded-md outline-none"
                          />
                        </div>
                        <div>
                          <label>Training</label>
                          <input
                            onChange={({ target }) =>
                              setTrainingDetails({ ...trainingDetails, training: target.value })
                            }
                            type="text"
                            className="w-full p-3 my-2 border rounded-md outline-none"
                          />
                        </div>

                        <div>
                          <label>Certificate</label>
                          <input
                            onChange={({ target }) =>
                              setTrainingDetails({ ...trainingDetails, certificate: target.value })
                            }
                            type="text"
                            className="w-full p-3 my-2 border rounded-md outline-none"
                          />
                        </div>
                        <div className="flex justify-center py-8 space-x-2">
                          <button onClick={handleAddTraining} className="p-3 border rounded">
                            Add
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <label>Upload your CV and Assessment Evidence </label>
                    <input
                      onChange={({ target }) => (target?.files?.length ? setCvAssessmentFiles(target.files) : null)}
                      type="file"
                      required
                      multiple
                      className="w-full p-3 my-2 border rounded-md outline-none"
                    />
                  </div>
                  <div>
                    <label>Primary Skillpool </label>
                    <input
                      value={priSkillPool}
                      onChange={({ target }) => setPriSkillPool(target.value)}
                      type="text"
                      className="w-full p-3 my-2 border rounded-md outline-none"
                    />
                  </div>
                  <div>
                    <label>Secondary Skillpool</label>
                    <input
                      value={secSkillPool}
                      onChange={({ target }) => setSecSkillPool(target.value)}
                      type="text"
                      className="w-full p-3 my-2 border rounded-md outline-none"
                    />
                  </div>
                  <div>
                    <label>Last Approved Project Level </label>
                    <input
                      value={lastApprovedProjectLevel}
                      onChange={({ target }) => setLastApprovedProjectLevel(target.value)}
                      type="text"
                      className="w-full p-3 my-2 border rounded-md outline-none"
                    />
                  </div>
                  <div>
                    <label>Supervisor </label>
                    <input
                      value={supervisor}
                      onChange={({ target }) => setSupervisor(target.value)}
                      type="text"
                      className="w-full p-3 my-2 border rounded-md outline-none"
                    />
                  </div>
                  <div className="flex justify-center py-8 space-x-2">
                    <button
                      onClick={() => {
                        if (!cvAssessmentFiles?.length) {
                          alert("Please upload your CV and Assessment Evidence")
                        } else {
                          if (!isValidEmail(email)) {
                            alert("Please enter a valid email address")
                          } else {
                            setSelectedIndex(1)
                          }
                        }
                      }}
                      className="p-3 text-white bg-blue-400 border rounded"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full border">
                <div className="px-3 py-2 bg-gray-100 border-b">Fill Your Education Details</div>
                <div className="p-4">
                  {!showButton && <button onClick={() => setShowButton(true)}>Add Details</button>}

                  <table style={{ width: "100%", border: "1px solid black" }}>
                    <thead>
                      <tr>
                        <th style={{ border: "1px solid black" }}>Key Date</th>
                        <th style={{ border: "1px solid black" }}>Education</th>
                        <th style={{ border: "1px solid black" }}>Certificate</th>
                        <th> {!showButton && <button onClick={() => setShowButton(true)}>Add Details</button>}</th>
                      </tr>
                    </thead>
                    {education.map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td style={{ border: "1px solid black" }}>{item.keyDate}</td>
                          <td style={{ border: "1px solid black" }}>{item.education}</td>
                          <td style={{ border: "1px solid black" }}>{item.certificate}</td>
                          <td style={{ border: "1px solid black" }}>
                            <button onClick={() => handleRemoveEducation(index)}>remove</button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                  {showButton && (
                    <div>
                      <div>
                        <label>Key Date</label>
                        <input
                          onChange={({ target }) => setEducationDetails({ ...educationDetails, keyDate: target.value })}
                          type="date"
                          className="w-full p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div>
                        <label>Education</label>
                        <input
                          onChange={({ target }) =>
                            setEducationDetails({ ...educationDetails, education: target.value })
                          }
                          type="text"
                          className="w-full p-3 my-2 border rounded-md outline-none"
                        />
                      </div>

                      <div>
                        <label>Certificate</label>
                        <input
                          onChange={({ target }) =>
                            setEducationDetails({ ...educationDetails, certificate: target.value })
                          }
                          type="text"
                          className="w-full p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div className="flex justify-center py-8 space-x-2">
                        <button onClick={handleAddEducation} className="p-3 border rounded">
                          Add
                        </button>
                      </div>
                    </div>
                  )}

                  {!showButton && (
                    <div className="flex justify-center py-8 space-x-2">
                      <button onClick={() => setSelectedIndex(0)} className="p-3 border rounded">
                        Previous
                      </button>
                      <button onClick={() => setSelectedIndex(2)} className="p-3 text-white bg-blue-400 border rounded">
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full border">
                <div className="px-3 py-2 bg-gray-100 border-b">Project Information Details</div>
                <div className="p-4">
                  {/* <ul>
                    {projects.map((item, index) => (
                      <li key={index}>
                        {item.name} {item.size} {item.complexity} {item.details} {item.orpPhases}{" "}
                        {item.projectManageMentRole} {item.resultsAchieved} {item.complexity}{" "}
                        <button onClick={() => handleRemoveProject(index)}>remove</button>
                      </li>
                    ))}
                  </ul> */}
                  <table style={{ width: "100%", border: "1px solid black" }}>
                    <thead>
                      <tr>
                        <th style={{ border: "1px solid black" }}>Name</th>
                        <th style={{ border: "1px solid black" }}>Size</th>
                        <th style={{ border: "1px solid black" }}>Complexity</th>
                        <th style={{ border: "1px solid black" }}>Details</th>
                        <th style={{ border: "1px solid black" }}>Duration</th>
                        <th style={{ border: "1px solid black" }}>Orp-phrases</th>
                        <th style={{ border: "1px solid black" }}>Project ManageMentRole</th>
                        <th style={{ border: "1px solid black" }}>Results Achieved</th>
                        <th>{!addProject && <button onClick={() => setAddProject(true)}>Add Project</button>}</th>
                      </tr>
                    </thead>
                    {projects.map((item, index) => (
                      <tbody key={index}>
                        <tr>
                          <td style={{ border: "1px solid black" }}>{item.name}</td>
                          <td style={{ border: "1px solid black" }}>{item.size}</td>
                          <td style={{ border: "1px solid black" }}>{item.complexity}</td>
                          <td style={{ border: "1px solid black" }}>{item.duration}</td>
                          <td style={{ border: "1px solid black" }}>{item.details}</td>
                          <td style={{ border: "1px solid black" }}>{item.orpPhases}</td>
                          <td style={{ border: "1px solid black" }}>{item.projectManageMentRole}</td>
                          <td style={{ border: "1px solid black" }}>{item.resultsAchieved}</td>
                          <td style={{ border: "1px solid black" }}>
                            <button onClick={() => handleRemoveProject(index)}>remove</button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                  {addProject && (
                    <>
                      <div>
                        <label>Project/Portfolio Name</label>
                        <input
                          onChange={({ target }) => setProjectDetails({ ...projectDetails, name: target.value })}
                          type="text"
                          className="w-full p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div>
                        <label>Size</label>
                        <input
                          onChange={({ target }) => setProjectDetails({ ...projectDetails, size: target.value })}
                          type="text"
                          className="w-full p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div>
                        <label>Complexity</label>
                        <div className="w-full p-3 my-2 border rounded-md">
                          <select
                            onChange={({ target }) =>
                              setProjectDetails({ ...projectDetails, complexity: target.value })
                            }
                            className="w-full "
                          >
                            <option value={"low"}>Low</option>
                            <option value={"medium"}>Medium</option>
                            <option value={"high"}>High</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label>Duration</label>
                        <input
                          onChange={({ target }) => setProjectDetails({ ...projectDetails, duration: target.value })}
                          type="text"
                          className="w-full p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div>
                        <label>Project Management Role</label>
                        <input
                          onChange={({ target }) =>
                            setProjectDetails({ ...projectDetails, projectManageMentRole: target.value })
                          }
                          type="text"
                          className="w-full p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div>
                        <label>ORP Phases(Type in as it applies to you, i.e, Phase 1, Phase 2, Phase 3)</label>
                        <textarea
                          maxLength={200}
                          onChange={({ target }) => setProjectDetails({ ...projectDetails, orpPhases: target.value })}
                          className="w-full h-16 p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div>
                        <label>Challenges</label>
                        <textarea
                          maxLength={200}
                          onChange={({ target }) => setProjectDetails({ ...projectDetails, challenges: target.value })}
                          className="w-full h-16 p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div>
                        <label>Results Achieved</label>
                        <textarea
                          maxLength={200}
                          onChange={({ target }) =>
                            setProjectDetails({ ...projectDetails, resultsAchieved: target.value })
                          }
                          className="w-full h-16 p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div>
                        <label>Details </label>
                        <textarea
                          maxLength={200}
                          onChange={({ target }) => setProjectDetails({ ...projectDetails, details: target.value })}
                          className="w-full h-16 p-3 my-2 border rounded-md outline-none"
                        />
                      </div>
                      <div className="flex justify-center py-8 space-x-2">
                        <button onClick={handleAddProject} className="p-3 border rounded">
                          Add
                        </button>
                      </div>
                    </>
                  )}
                  {!addProject && (
                    <div className="flex justify-center py-8 space-x-2">
                      <button onClick={() => setSelectedIndex(1)} className="p-3 border rounded">
                        Previous
                      </button>
                      <button
                        disabled={isLoading}
                        onClick={handleRegisteration}
                        className="p-3 text-white bg-green-400 border rounded"
                      >
                        {isLoading ? "Processing..." : "Register"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { req, res } = context
  const session = await getSession({ req })
  console.log("session", session?.user)
  if (!!!session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/?redirect=/project",
      },
    }
  }
  try {
    const { data } = await axios.get(`http://localhost:3000/api/user/${session.user.id}`)
    console.log("data", data)
    if (data && data.project && data.project.id) {
      return {
        redirect: {
          permanent: false,
          destination: "/general",
        },
      }
    }
  } catch (error: any) {
    console.log(error.message)
  }

  return {
    props: { user: session?.user },
  }
}

export default Project
