import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import './cssSeatPage.css'
import CumRap from './RenderCumRap/CumRap'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { actFetchListCumRap } from './RenderCumRap/duckCumRap/action'
import RenderGhe from './RenderCumRap/RenderGhe'



export default function SeatPage() {
  const dispatch: any = useDispatch()

  const { maPhim } = useParams()
  useEffect(() => {
    if (maPhim) {
      dispatch(actFetchListCumRap(maPhim))
    }
  }, [])

  return (
    <div className='container seat'>

      <div className='row'>

        <div className='col-4 cumRap'
          style={{
            border: 'solid 1px white',
            width: '100%',
          }}>
          <ul className="list-group">
            <CumRap />
          </ul>
        </div>
        <div className='col-8 chonGhe'>
          <RenderGhe />
        </div>
      </div>
    </div>
  )
}
