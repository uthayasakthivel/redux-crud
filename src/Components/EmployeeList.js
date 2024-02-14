import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserThunk } from "../Redux/Action"
import TableRow from "./TableRow"

const EmployeeList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(fetchUserThunk())
  }, [dispatch])

  //   console.log(users)

  return (
    <div>
      <TableRow users={users} />
    </div>
  )
}

export default EmployeeList
