import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserThunk } from "../Redux/Action"
import TableRow from "./TableRow"

const EmployeeList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.data)

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUserThunk())
    }
  }, [])

  console.log("from employee", users)

  return (
    <div>
      <TableRow users={users} />
    </div>
  )
}

export default EmployeeList
