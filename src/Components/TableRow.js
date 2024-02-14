import React from "react"

const TableRow = ({ users }) => {
  return (
    <>
      <table className="w-full border-collapse">
        <thead className="text-center border p-2 border-solid border-[#ddd]">
          <tr>
            <th className="table-cell">Name</th>
            <th className="table-cell">Email</th>
            {/* <th>Address</th> */}
            <th className="table-cell">Phone</th>
            <th className="table-cell">Action</th>
          </tr>
        </thead>
        <tbody className="text-center border p-2 border-solid border-[#ddd]">
          {users.map((user) => (
            <tr>
              <td className="table-cell">{user.name}</td>
              <td className="table-cell">{user.email}</td>
              {/* <td className="border border-solid border-[#ddd]">
                {Object.values(user.address).join(", ")}
              </td> */}
              <td className="table-cell">{user.phone}</td>
              <td className="table-cell">'Actions'</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableRow
