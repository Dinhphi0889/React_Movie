import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import api from '../../../api/api'
import { actInfoAccount } from './duckInfoAccount/action'
import ModalChangeInfo from './ModalChangeInfo'

export default function Account() {
  const dispatch: any = useDispatch()

  const getLocal = localStorage.getItem('user')
  const dataUserLocal = getLocal ? JSON.parse(getLocal) : null
  const [user, setUser] = useState<any>()
  const { data } = useSelector((state: RootState) => state.InfoAccountReducer)
  const tk = dataUserLocal.taiKhoan

  useEffect(() => {
    dispatch(actInfoAccount(tk))
  }, [])
  useEffect(() => {
    if (data) {
      setUser(data)
    }

  }, [data])

  const handleShowInfo = () => {

    if (user) {
      return user.map((itemUser: any, index: any) => {
        return <tr key={index}>
          <th scope="row">{itemUser.taiKhoan}</th>
          <th>{itemUser.hoTen}</th>
          <td>{itemUser.email}</td>
          <td>{itemUser.soDT}</td>
          <td>{itemUser.matKhau}</td>
          <td>
            <button className='btn btn-warning'
              data-toggle="modal" data-target="#infoModal"
            >Đổi thông tin</button>
          </td>
        </tr>
      })
    }
  }


  return (
    <div className='container' style={{ height: '80vh' }}>
      <h2 style={{
        color: 'white',
        textAlign: 'center',
        margin: '30px 0',


      }}>Thông tin tài khoản</h2>
      <table className="table table-dark">
        <thead>
          <tr style={{ color: '#48f148' }}>
            <th scope="col">Tài Khoản</th>
            <th scope="col">Họ Tên</th>
            <th scope="col">Email</th>
            <th scope="col">Số Điện Thoại</th>
            <th scope="col">Mật Khẩu</th>
            <th>Cài đặt</th>
          </tr>
        </thead>
        <tbody>
          {handleShowInfo()}
        </tbody>
      </table>
      <ModalChangeInfo data={data} />
    </div>

  )
}
