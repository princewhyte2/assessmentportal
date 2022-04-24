import { useMemo } from "react"
import { useTable } from "react-table"

const EducationTable = ({ education }: any) => {
  const data = useMemo(
    () =>
      education?.map((item: any) => {
        return {
          col1: new Date(item.keyDate).toLocaleDateString(),
          col2: item.certificate,
          col3: item.education,
        }
      }) ?? [],
    [education],
  )
  const columns: any = useMemo(
    () => [
      {
        Header: "Key dates (start)",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Education/certificate",
        accessor: "col2",
      },
      {
        Header: "School",
        accessor: "col3",
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
