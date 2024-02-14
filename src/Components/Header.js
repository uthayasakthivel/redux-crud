import React from "react"
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6"

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#425c7d] text-white p-10 text-3xl">
      <div className="font-bold">
        <span className="font-medium">Manage </span>
        Employees
      </div>
      <div className="flex gap-5 justify-between items-center">
        <button className="flex justify-between items-center bg-[#d9534f] px-5 py-3">
          <FaCircleMinus className="mx-3" />
          Delete
        </button>
        <button className="flex justify-between items-center bg-[#5db85d] px-5 py-3">
          <FaCirclePlus className="mx-3" />
          Add New Employee
        </button>
      </div>
    </div>
  )
}

export default Header
