import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchListCumRap } from './duckCumRap/action'
import { AppState } from '../../../../store/type'
import { CumRapChieu, HeThongRapChieu } from './duckCumRap/types'
import { RootState } from '../../../../store'
import { NavLink } from 'react-router-dom'

export default function CumRap() {
    const dispatch: any = useDispatch()
    // useEffect(() => {
    //     dispatch(actFetchListCumRap())
    // }, [])
    // debugger
    const { data } = useSelector((state: RootState) => state.getListCumRapReducer)
    console.log(data)
    const handleCumRap = () => {
        if (data) {
            console.log(data)
            return data.map((item, index) => {
                return item.cumRapChieu.map((itemCumRap, index) => {
                    return <li key={index} className="list-group-item"
                        style={{
                            backgroundColor: '#1a191f'
                        }}
                    >
                        <img
                            style={{
                                width: '50px',
                                marginRight: '10px'
                            }} src={item.logo}></img>
                        <NavLink
                            style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}
                            to={''}>{itemCumRap.tenCumRap}
                        </NavLink></li>
                })
            })
        }
    }


    return (
        <div>
            {handleCumRap()}
        </div>
    )
}
