import React, { act, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { Account } from './duckInfoAccount/type'
import { actChangeInfo } from './duckChangeInfoAccount/action'


type Props = {
    data: any | null
}
export default function ModalChangeInfo(props: Props) {
    const dispatch: any = useDispatch()

    const { data } = props
    const [dataEdit, setDataEdit] = useState<any>()
    // const { data } = useSelector((state: RootState) => state.InfoAccountReducer)

    useEffect(() => {
        if (data) {
            data.map((itemEdit: any) => {
                setDataEdit(itemEdit)
            })
        }
    }, [data])

    const handleOnChange = (event: any) => {
        const { name, value } = event.target
        setDataEdit({ ...dataEdit, [name]: value })

    }
    const handleOnSubmit = () => {
        dispatch(actChangeInfo(dataEdit))
    }

    return (
        <div>
            <div className="modal fade" id="infoModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thay đổi thông tin</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div>
                                <h4 className="col-form-label">Tài Khoản</h4>
                                <input type="text"
                                    value={dataEdit?.taiKhoan || ''}
                                    name='taiKhoan'
                                    onChange={handleOnChange}
                                    className="form-control"
                                />

                                <h4 className="col-form-label">Họ Tên</h4>
                                <input type="text"
                                    value={dataEdit?.hoTen || ''}
                                    name='hoTen'
                                    onChange={handleOnChange}
                                    className="form-control"
                                />

                                <h4 className="col-form-label">Email</h4>
                                <input type="text"
                                    value={dataEdit?.email || ''}
                                    name='email'
                                    onChange={handleOnChange}
                                    className="form-control" />

                                <h4 className="col-form-label">Số điện thoại</h4>
                                <input type="text"
                                    value={dataEdit?.soDT || ''}
                                    name='soDT'
                                    onChange={handleOnChange}

                                    className="form-control" />


                                <h4 className="col-form-label">Mật khẩu</h4>
                                <input type="text"
                                    value={dataEdit?.matKhau || ''}
                                    name='matKhau'
                                    onChange={handleOnChange}
                                    className="form-control" id="recipient-name" />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                onClick={handleOnSubmit}
                            >Lưu Thay đổi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
