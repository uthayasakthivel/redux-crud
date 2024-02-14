import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserThunk } from "../Redux/Action"

const EmployeeList = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(fetchUserThunk())
  }, [])

  //   console.log(users)

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default EmployeeList
