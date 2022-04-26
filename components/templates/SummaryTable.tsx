import { useMemo } from "react"
import { useTable } from "react-table"

const SummaryTable = ({ project }: any) => {
  const data = useMemo(
    () =>
      project?.map((item: any) => {
        return {
          col1: item.name,
          col2: item.duration,
          col3: item.size,
          col4: item.projectManageMentRole,
          col5: item.orpPhases,
          col6: item.challenges,
          col7: item.resultsAchieved,
          col8: item.details,
        }
      }) ?? [],
    [project],
  )
  const columns: any = useMemo(
    () => [
      {
        Header: "Project/Portfolio name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Duration",
        accessor: "col2",
      },
      {
        Header: "Size/complexity [US$]",
        accessor: "col3",
      },
      {
        Header: "Project Management Role",
        accessor: "col4",
      },
      {
        Header: "ORP Phases",
        accessor: "col5",
      },
      {
        Header: "Challenges",
        accessor: "col6",
      },
      {
        Header: "Results Achieved",
        accessor: "col7",
      },
      {
        Header: "Details",
        accessor: "col8",
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

export default SummaryTable
