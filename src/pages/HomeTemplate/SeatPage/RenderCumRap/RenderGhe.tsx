import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { useParams } from 'react-router-dom'
import { actDatVe } from '../duckDatVe/action';




export default function RenderGhe() {

    const { maLichChieu } = useParams();
    const dispatch: any = useDispatch()

    const { data, loading } = useSelector((state: RootState) => state.getGheReducer)

    const [selectSeat, setSelectSeat] = useState([])
    const [giaVe, setGiaVe] = useState(0)
    const [maGhe, setMaGhe] = useState(0)
    const [gheDaChon, setGheDaChon] = useState<any>([])

    const handleMaGhe = (data: any) => {

        const listSelectClone: any = [...selectSeat, data.tenGhe]
        setSelectSeat(listSelectClone)
        setGiaVe(data.giaVe)
        setMaGhe(data.maGhe)
    };

    let DanhSachVaGiaGhe: { maGhe: Number, giaVe: Number }[] = []
    const infoSelect = {
        maGhe: maGhe,
        giaVe: giaVe,
    }
    const dataDatVe = () => {
        
        DanhSachVaGiaGhe.push(infoSelect)
        const dataVe = {
            maLichChieu: Number(maLichChieu),
            danhSachVe: DanhSachVaGiaGhe
        }
        console.log(dataVe)
        return dataVe

    }
    const datVe = (dataVe: any) => {
        console.log(dataVe)

        dispatch(actDatVe(dataVe))
    }
    const onSubmit = (event: any) => {
        event.preventDefault();
    }


    const handleGhe = () => {
        if (loading) {
            return <div className='loader'>Loading...</div>
        }
        if (data) {
            return data.map((itemGhe, index) => {
                return itemGhe.daDat ?
                    <button key={index} className='btn btn-success'
                        style={{
                            margin: '5px',
                            padding: '7px 25px',
                            textAlign: 'center',
                        }}
                        onClick={() => {
                            { handleMaGhe(itemGhe) }
                        }}
                    ><i className="fa-solid fa-couch" style={{
                        textAlign: 'center',
                        marginRight: '0',
                        display: 'block'
                    }}
                    ></i><span>{itemGhe.tenGhe}</span></button> :
                    <button key={index} className='btn btn-warning'
                        disabled
                        style={{
                            margin: '5px',
                            padding: '7px 25px',
                            textAlign: 'center',
                        }}
                        onClick={() => {
                            { handleMaGhe(itemGhe) }
                        }}
                    ><i className="fa-solid fa-couch" style={{
                        textAlign: 'center',
                        marginRight: '0',
                        display: 'block'
                    }}
                    ></i><span>{itemGhe.tenGhe}</span></button>
            })
        }
    }

    return (<>
        <h1 style={{
            textAlign: 'center',
            margin: '20px 0'
        }}>Danh Sách Ghế</h1>
        <div style={{
            width: '100%',
        }}>
            {/* form hiển thị thông tin đặt ghế và giá vé */}
            <form onSubmit={onSubmit}
                style={{

                    height: '200px',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}>
                <div className='showInput'
                    style={{
                        width: '50%'
                    }}
                >
                    <div className="form-group" style={{
                        padding: '0 0 20px 10px'
                    }}>Giá vé:
                        <input className="form-control" disabled
                            value={giaVe}
                        />
                    </div>
                    <div className="form-group" style={{
                        padding: '0 0 0 10px'
                    }}>Ghế Đã Chọn
                        <input className="form-control" disabled
                            value={selectSeat}
                        />
                    </div>
                </div>
                <div className='button' style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '10px 0',
                    width: '50%'
                }}>
                    {/* button đặt vé */}
                    <button type="submit" className="btn btn-primary"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '40px'
                        }}
                        onClick={() => {
                            datVe(dataDatVe())
                        }}
                    >Xác nhận</button>
                    <button type="submit" className="btn btn-warning"
                        onClick={() => {
                            setSelectSeat([])
                            setGiaVe(0)
                        }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '40px'

                        }}>Chọn Lại </button>
                </div>
            </form>
        </div>

        <div style={{
            margin: '10px 0'
        }}>{handleGhe()}</div>
    </>
    )
}
