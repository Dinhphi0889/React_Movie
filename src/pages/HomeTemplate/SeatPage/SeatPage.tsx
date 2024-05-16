import React from 'react'
import { Outlet } from 'react-router-dom'
import './cssSeatPage.css'
import CumRap from './RenderCumRap/CumRap'

export default function SeatPage() {


  return (
    <div className='container seat'>
      <h1>Đặt Vé</h1>
      <div className='row'>

        <div className='col-4 cumRap'>Cụm Rạp
          <ul className="list-group">
            <CumRap/>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>

        </div>
        <div className='col-8 chonGhe'>Danh sách ghế


        </div>
      </div>
    </div>
  )
}
