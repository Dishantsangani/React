import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayoyt() {
  return (
    <div>
      <h1>Admin Page</h1>
      <Outlet/>
    </div>
  )
}
