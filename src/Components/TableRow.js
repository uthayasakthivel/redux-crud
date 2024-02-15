import React from "react"
import { MdModeEdit } from "react-icons/md"
import { AiFillDelete } from "react-icons/ai"
const TableRow = ({ users }) => {
  return (
    <>
      <table className="w-full border-collapse text-2xl">
        <thead className="text-center border p-2 border-solid border-[#ddd]">
          <tr>
            <th className="table-cells">Name</th>
            <th className="table-cells">Email</th>
            {/* <th>Address</th> */}
            <th className="table-cells">Phone</th>
            <th className="table-cells">Action</th>
          </tr>
        </thead>
        <tbody className="text-center border p-2 border-solid border-[#ddd]">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="table-cells">{user.name}</td>
              <td className="table-cells">{user.email}</td>
              {/* <td className="border border-solid border-[#ddd]">
                {Object.values(user.address).join(", ")}
              </td> */}
              <td className="table-cells">{user.phone}</td>
              <td className="table-cells ">
                <tr className="flex justify-evenly">
                  <td>
                    <MdModeEdit color="#ffc828" />
                  </td>
                  <td>
                    <AiFillDelete color="#f55b4f" />
                  </td>
                </tr>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableRow
