import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { useEffect, useRef, useState } from "react"
import { TypeListMovieAdmin } from "../duck/type"
import './../cssAdmin.css'

// let listEditMovie: TypeListMovieAdmin = {
//     maPhim: '',
//     tenPhim: '',
//     biDanh: '',
//     trailer: '',
//     hinhAnh: '',
//     moTa: '',
//     maNhom: '',
//     ngayKhoiChieu: '',
//     danhGia: 0,
//     hot: false,
//     dangChieu: false,
//     sapChieu: false,
// }

const ModalAddFilm = () => {
    const { data } = useSelector((state: RootState) => state.modalEditMovie)
    const [values, setValues] = useState<any>(null);

    useEffect(() => {
        // lắng nghe khi có data edit thì mình gán giá trị lại cho values
        if (data) {
            setValues(data);
        }
    }, [data]);

    const handleOnChange = (event: any) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
        console.log(values)

    }
    const handCheckBox = (event: any) => {
        const { name, checked } = event.target
        if (name === 'hot') {
            values[name] = checked
        } else if (name === 'dangChieu') {
            values[name] = checked
        } else if (name === 'sapChieu') {
            values[name] = checked
        }
        setValues({ ...values, [name]: checked })
        console.log(values)
    }

    const handleSubmit = () => {
        console.log(values)
    }

    return (
        <div
            className="modal fade"
            id="modalDetail"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true">
            <div
                className="modal-dialog"
                style={{ maxWidth: "700px" }}
                role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 style={{
                            color: 'black'
                        }}
                            className="modal-title">Chỉnh Sửa</h4>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <tbody>
                                <div>
                                    <div className="form-group">
                                        <label><h6>Mã Phim</h6></label>
                                        <input type="number" name="maPhim" className="form-control" id="maPhim"
                                            value={values?.maPhim || ""}
                                            onChange={handleOnChange}
                                            disabled={!!data} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Tên Phim</h6></label>
                                        <input type="text"
                                            name="tenPhim" className="form-control" id="tenPhim"
                                            value={values?.tenPhim || ""}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Bí Danh</h6></label>
                                        <input type="text"
                                            name="biDanh"

                                            className="form-control" id="biDanh"
                                            value={values?.biDanh || ""}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Trailer</h6></label>
                                        <input type="text"
                                            name="trailer"
                                            className="form-control" id="trailer"
                                            value={values?.trailer || ""}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Hình Ảnh</h6></label>
                                        <input type="text" name="hinhAnh" className="form-control" id="hinhAnh"
                                            value={values?.hinhAnh || ""}
                                            onChange={handleOnChange} />
                                        <span
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingTop: '10px'
                                            }}
                                        >
                                            <img src={values?.hinhAnh} alt="" style={{
                                                width: '150px',
                                            }}></img>
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Mô Tả</h6></label>
                                        <input type="text" name="moTa" className="form-control" id="moTa"
                                            value={values?.moTa || ""}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Mã Nhóm</h6></label>
                                        <input type="text" name="maNhom" className="form-control" id="maNhom"
                                            value={values?.maNhom || ""}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Ngày Khởi Chiếu</h6></label>
                                        <input type="datetime-local" name="ngayKhoiChieu" className="form-control" id="ngayKhoiChieu"
                                            value={values?.ngayKhoiChieu || ""}
                                            onChange={handleOnChange} />

                                    </div>
                                    <div className="form-group">
                                        <label><h6>Đánh Giá</h6></label>
                                        <input type="text" name="danhGia" className="form-control" id="danhGia"
                                            value={values?.danhGia || ""}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: '10px'
                                        }}>
                                        <label><h6>Độ Hot</h6></label>
                                        <input type="checkbox" name="hot" className="form-control" id="hot"
                                        
                                            style={{
                                                width: '140px'
                                            }}
                                            onChange={handCheckBox}
                                        />

                                    </div>
                                    <div className="form-group"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: '10px'
                                        }}>
                                        <label><h6>Đang Chiếu</h6></label>
                                        <input type="checkbox" name="dangChieu" className="form-control" id="dangChieu"

                                            // checked={values?.dangChieu ? true : false}
                                            style={{
                                                width: '75px'
                                            }}
                                            onChange={handCheckBox}
                                        />
                                    </div>
                                    <div className="form-group"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: '10px'
                                        }}>
                                        <label><h6>Sắp Chiếu</h6></label>
                                        <input type="checkbox" name="sapChieu" className="form-control" id="sapChieu"

                                            checked={values?.sapChieu ? true : false}
                                            style={{
                                                width: '100px'
                                            }}
                                            onChange={handCheckBox}
                                        />
                                    </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success"
                            data-dismiss='modal'
                            type="submit"
                            onClick={handleSubmit}>Lưu</button>
                        <button className="btn btn-danger" type="button" data-dismiss='modal'>Huỷ</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ModalAddFilm

