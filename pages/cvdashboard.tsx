import { useMemo } from "react"
import { useTable } from "react-table"
import EducationTable from "../components/templates/EducationTable"
import SummaryTable from "../components/templates/SummaryTable"

const CvDashboard = () => {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
        col3: "Hello",
        col4: "World",
        col5: "Hello",
        col6: "World",
        col7: "Hello",
      },
    ],
    [],
  )
  const columns = useMemo(
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
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
  return (
    <div className=" w-screen min-h-screen h-full ">
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
      <SummaryTable />
      <EducationTable />
    </div>
  )
}

export default CvDashboard
