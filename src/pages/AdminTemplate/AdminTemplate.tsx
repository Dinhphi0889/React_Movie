import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ListsFilmPage() {
  return (
    <div>
        <h3>Admin</h3>
        <Outlet />
    </div>
  )
}
