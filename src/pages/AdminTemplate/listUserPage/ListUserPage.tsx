import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { actFetchListUser } from './duckListMovie/action'

export default function ListUserPage() {
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(actFetchListUser())
    }, [])

    const { data } = useSelector((state: RootState) => state.ListUserAdmin)

    const handleListUserAdmin = () => {
        if (data) {
            return data.map((user, index) => {
                console.log(user)
                return <tr key={index}>
                    <th scope="row">{user.taiKhoan}</th>
                    <td>{user.hoTen}</td>
                    <td>{user.email}</td>
                    <td>{user.soDT}</td>
                    <td>{user.maLoaiNguoiDung}
                    </td>
                    <td>
                        <button className='btn btn-warning'>Sửa</button>
                        <button className='btn btn-success'>Xóa</button>
                    </td>
                </tr>
            })
        }
    }

    return (
        <div className='listsUser'>
            <h3 className='tittleListUser'>Danh sách người dùng</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tài Khoản</th>
                        <th scope="col">Họ Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số Điện Thoại</th>
                        <th scope="col">Mã Loại Người Dùng</th>
                        <th scope="col">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {handleListUserAdmin()}
                </tbody>
            </table>

        </div>
    )
}
