import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useState } from "react";
import { actFetchRegister } from "./duck/action";


export default function RegisterPage() {

  const dispatch: any = useDispatch()

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
  }

  const { data } = useSelector((state: RootState) => state.modalEditMovie)
  const [values, setValues] = useState<any>(null);


  const handleOnChange = (event: any) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })

  }
  const handleRegister = () => {
    dispatch(actFetchRegister(values))
  }

  return (
    <div>
      <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
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
                    id='inputTaiKhoanDangKi'
                    name='taiKhoan'
                    className="form-control"
                    onChange={handleOnChange} />
                </div>

                <h6>Mật Khẩu</h6>
                <div className="input-group mb-3">
                  <input type="text"
                    id='inputPassWordDangKi'
                    name='matKhau'
                    className="form-control"
                    onChange={handleOnChange} />
                </div>

                <h6>Email</h6>
                <div className="input-group mb-3">
                  <input type="text"
                    id='inputEmailDangKi'
                    name='email'
                    className="form-control"
                    onChange={handleOnChange} />
                </div>
                <h6>Số Điện Thoại</h6>
                <div className="input-group mb-3">
                  <input type="text"
                    id='inputSDTDangKi'
                    name='soDT'
                    className="form-control"
                    onChange={handleOnChange} />
                </div>
                <h6>Họ Tên</h6>
                <div className="input-group mb-3">
                  <input type="text"
                    id='inputHoTenDangKi'
                    name='hoTen'
                    className="form-control"
                    onChange={handleOnChange} />
                </div>

              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary"
                onClick={handleRegister}>Đăng Kí</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
