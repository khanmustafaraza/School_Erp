import React from 'react'
import { Outlet ,Navigate } from 'react-router-dom'

const AdminRoute = () => {
    const isTrue = true;
  return (
    isTrue ?<Outlet/>:null
  )
}

export default AdminRoute