import { useDispatch, useSelector } from 'react-redux'
import { LichChieuPhim } from './duckCumRap/types'
import { RootState } from '../../../../store'
import { NavLink, useParams } from 'react-router-dom'
import { actFetchGhe } from '../duckRenderGhe/action'

export default function CumRap() {
    const dispatch: any = useDispatch()

    const { maLichChieu, maPhim } = useParams()

    const { heThongRap } = useSelector((state: RootState) => state.getListCumRapReducer)

    const handleCumRap = () => {
        if (heThongRap && heThongRap.heThongRapChieu) {
            return heThongRap.heThongRapChieu.map((item) => {
                return item.cumRapChieu.map((itemCumRap, index) => {
                    return itemCumRap.lichChieuPhim.map((getMaLichChieu) => {
                        return <li key={index} className="list-group-item"
                            onClick={() => {
                                RenderGhe(itemCumRap.lichChieuPhim)
                            }}
                            style={{
                                backgroundColor: '#1a191f',
                                border: 'solid 1px white',
                                margin: '20px 0'
                            }}
                        >
                            <NavLink
                                to={`/ticket-movie/${maPhim}/${getMaLichChieu.maLichChieu}`}
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}>

                                <img src={itemCumRap.hinhAnh}
                                    style={{
                                        width: '100%',
                                        marginBottom: '20px'
                                    }}></img>
                                <img
                                    style={{
                                        width: '50px',
                                        marginRight: '10px'
                                    }} src={item.logo}></img>
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                    }}
                                    to={``}>Tên Rạp: {itemCumRap.tenCumRap}

                                </NavLink>
                                <h6
                                    style={{
                                        marginTop: '10px'
                                    }}>
                                    Địa Chỉ: {itemCumRap.diaChi}</h6>
                            </NavLink>
                        </li>
                    })

                })
            })
        }
    }
    const RenderGhe = (data: any) => {
        return data.map((value: LichChieuPhim) => {
            dispatch(actFetchGhe(value.maLichChieu))
        })
    }


    return <div>
        <div>
            <div className="card"
                style={{
                    width: '100%',
                    backgroundColor: '#1a191f',
                    marginTop: '10px'
                }}
            >
                <img src={heThongRap?.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className=""
                        style={{
                            marginBottom: '10px'
                        }}>Tên Phim: {heThongRap?.tenPhim}</h5>
                    <p className="">Mô Tả: {heThongRap?.moTa}</p>
                </div>
            </div>
        </div>

        <div>
            {handleCumRap()}
        </div>

    </div>
};
