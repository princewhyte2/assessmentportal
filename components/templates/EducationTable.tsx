import { useMemo } from "react"
import { useTable } from "react-table"

const EducationTable = () => {
  const data = useMemo(
    () => [
      {
        col1: "1997",
        col2: "",
        col3: "Masters, Electrical Engineering",
        col4: "Federal University of Technology, Owerri",
      },
    ],
    [],
  )
  const columns = useMemo(
    () => [
      {
        Header: "Key dates (start)",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "",
        accessor: "col2",
      },
      {
        Header: "Education/certificate",
        accessor: "col3",
      },
      {
        Header: "School",
        accessor: "col4",
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
  return (
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
  )
}

export default EducationTable
