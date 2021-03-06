import { useMemo } from "react"
import { useTable } from "react-table"

const CvDashboard = ({ user }: any) => {
  const data = useMemo(
    () => [
      {
        col1: user?.project?.fullName ?? "",
        col2: user?.project?.refIndicator ?? "",
        col3: user?.project?.jobTitle ?? "",
        col4: user?.project?.priSkillPool ?? "",
        col5: user?.project?.secSkillPool ?? "",
        col6: user?.project?.lastApprovedProjectLevel ?? "",
        col7: user?.project?.supervisor ?? "",
        col8: user?.project?.cvAssessmentFiles.length
          ? user?.project?.cvAssessmentFiles.map((file: any) => (
              <a key={file.id} target={"_blank"} rel="noreferrer" href={file.file}>
                view
              </a>
            ))
          : "",
      },
    ],
    [
      user?.project?.fullName,
      user?.project?.jobTitle,
      user?.project?.lastApprovedProjectLevel,
      user?.project?.priSkillPool,
      user?.project?.refIndicator,
      user?.project?.secSkillPool,
      user?.project?.supervisor,
      user?.project?.cvAssessmentFiles,
    ],
  )
  const columns: any = useMemo(
    () => [
      {
        Header: "Surname/Name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Ref-Indicator",
        accessor: "col2",
      },
      {
        Header: "Role/Title",
        accessor: "col3",
      },
      {
        Header: "Primary Skillpool",
        accessor: "col4",
      },
      {
        Header: "Secondary Skillpool",
        accessor: "col5",
      },
      {
        Header: "Last Project Level",
        accessor: "col6",
      },
      {
        Header: "Supervisor",
        accessor: "col7",
      },
      {
        Header: "CV",
        accessor: "col8",
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
  return (
    <div>
      <h1>Cv Dashboard</h1>
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                    border: "solid 1px gray",
                    padding: "10px",
                  }}
                  key={index}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                      key={index}
                    >
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CvDashboard
