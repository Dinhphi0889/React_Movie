import React, { useEffect, useState } from 'react'
import './../authenCss.css'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actFetchLogin } from './duck/action'
import Account from '../../HomeTemplate/AccountPage/Account'



export default function LoginPage() {
  let user = {
    taiKhoan: '',
    matKhau: '',
  }
  const dispatch: any = useDispatch()
  const [dataLogin, setDataLogin] = useState(user)

  const handleOnChange = (event: any) => {
    const { name, value } = event.target
    setDataLogin({ ...dataLogin, [name]: value })
    console.log([name],value)
  }
  const handleSubmit = () => {
    dispatch(actFetchLogin(dataLogin))

  }




  return (
    <div>
      <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title " id="exampleModalLabel">Đăng Nhập</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" >×</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <h6>Tài Khoản</h6>
                <div className="input-group mb-3">
                  <input type="text"
                    id='inputTaiKhoanDangNhap'
                    name='taiKhoan'
                    className="form-control"
                    placeholder='Nhập tài khoản...'
                    onChange={handleOnChange} />

                </div>

                <h6>Mật Khẩu</h6>
                <div className="input-group mb-3">
                  <input type="password"
                    id='inputMatKhauDangNhap'
                    name='matKhau'
                    className="form-control"
                    placeholder='Nhập mật khẩu...'
                    onChange={handleOnChange} />
                </div>
                <div className="input-group mb-3">
                  <a href='' type='button'
                    data-toggle='modal'
                    data-target='#registerModal'
                    data-dismiss='modal'
                  >Chưa có tài khoản? Đăng ký</a>
                </div>

              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

              <button
                type="submit"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={handleSubmit}
                >Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
