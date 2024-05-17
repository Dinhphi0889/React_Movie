import React from 'react'
import { Outlet } from 'react-router-dom'
import './cssSeatPage.css'
import CumRap from './RenderCumRap/CumRap'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

export default function SeatPage() {

  const { data } = useSelector((state: RootState) => state.getListCumRapReducer)
  if(data){
    return data.map((item) =>{
      console.log(item)
    })
  }



  return (
    <div className='container seat'>
      <h1>Đặt Vé</h1>
      <div className='row'>

        <div className='col-4 cumRap'>
          <ul className="list-group">
            <CumRap />
          </ul>
        </div>
        <div className='col-8 chonGhe'>Danh sách ghế
        </div>
      </div>
    </div>
  )
}
