import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HomeTemplate() {
    return (
    <div>
        <h3>Home</h3>
        <Outlet />
    </div>
    )
}
