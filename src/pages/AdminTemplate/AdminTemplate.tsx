import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './_components/sidebar'
import './cssAdmin.css'

export default function ListsFilmPage() {
  return (
    <div className='adminPage'>
      <div className='left'>

        <SideBar />
      </div>
      <div className='right'>
        <Outlet />
      </div>
    </div>
  )
}
