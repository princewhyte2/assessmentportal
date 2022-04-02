import { useMemo } from "react"
import { useTable } from "react-table"

const SummaryTable = () => {
  const data = useMemo(
    () => [
      {
        col1: "Special Plant Projects",
        col2: "",
        col3: "$45M",
        col4: "Lead Project Engineer 2019 - 2022",
        col5: "Select/Define Operate",
        col6: `The main challenge in this role has been a lack of adequate project resource loaded and integrated schedule, 
          longer and more challenging procurement logistics, few capable contractor pool in remote location, inadequate PMC contractor engineering capability, insufficient technical authority personnel, insufficient owner construction personnel, delays caused by shared project services personnel, schedule slippages from unavailable execution windows, with attendant negative impact on the journey to top quartile project delivery'`,
        col7: "Delivered the following projects 1. Train 4,5&6 Mark VI to Mark Vie Turbine Control Upgrade Project ($25m)2. Replacement of Obsolete HVAC Units Tr1-3 ($9M)3. Replacement of Obsolete VSDS Control System Tr1-3 ($5M)",
      },
    ],
    [],
  )
  const columns = useMemo(
    () => [
      {
        Header: "Project/Portfolio name",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "",
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
