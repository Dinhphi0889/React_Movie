import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import SideBar from './_components/sidebar'
import './cssAdmin.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function ListsFilmPage() {


  return (
    <div className='adminPage'>
      <div className='left'>

        <SideBar />
      </div>
      <div className='right container'>
        <Outlet />
      </div>
    </div>
  )
}
