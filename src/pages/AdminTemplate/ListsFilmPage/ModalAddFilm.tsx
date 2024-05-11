
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { useEffect, useState } from "react"
import { TypeListMovieAdmin } from "../duck/type"

// interface listEditMovie {
//     maPhim: string | number,
//     tenPhim: string,
//     biDanh: string,
//     trailer: string,
//     hinhAnh: string,
//     moTa: string,
//     maNhom: string,
//     ngayKhoiChieu: string,
//     danhGia: number,
//     hot: false,
//     dangChieu: false,
//     sapChieu: false,
// }

const ModalAddFilm = () => {
    const { data } = useSelector((state: RootState) => state.modalEditMovie)


    const handleOnChange = (event: any) => {
        const { name, value } = event.target
        console.log(name, value)
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
                        <h5 className="modal-title">Detail</h5>
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
                                        <input type="number" name="maPhim" className="form-control" id="maPhim" aria-describedby="emailHelp" value={data?.maPhim}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Tên Phim</h6></label>
                                        <input type="text" className="form-control" id="tenPhim"
                                            value={data?.tenPhim}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Bí Danh</h6></label>
                                        <input type="text" className="form-control" id="biDanh"
                                            value={data?.biDanh}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Trailer</h6></label>
                                        <input type="text" className="form-control" id="trailer"
                                            value={data?.trailer}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Hình Ảnh</h6></label>
                                        <input type="text" name="hinhAnh" className="form-control" id="hinhAnh"
                                            value={data?.hinhAnh}
                                            onChange={handleOnChange} />
                                        <span
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                paddingTop: '10px'
                                            }}
                                        >
                                            <img src={data?.hinhAnh} alt="" style={{
                                                width: '150px',
                                            }}></img>
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Mô Tả</h6></label>
                                        <input type="text" name="moTa" className="form-control" id="moTa"
                                            value={data?.moTa}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Mã Nhóm</h6></label>
                                        <input type="text" name="maNhom" className="form-control" id="maNhom"
                                            value={data?.maNhom}
                                            onChange={handleOnChange} />
                                    </div>
                                    <div className="form-group">
                                        <label><h6>Ngày Khởi Chiếu</h6></label>
                                        <input type="datetime-local" name="ngayKhoiChieu" className="form-control" id="ngayKhoiChieu"
                                            value={data?.ngayKhoiChieu}
                                            onChange={handleOnChange} />

                                    </div>
                                    <div className="form-group">
                                        <label><h6>Đánh Giá</h6></label>
                                        <input type="text" name="danhGia" className="form-control" id="danhGia"
                                            value={data?.danhGia}
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
                                            checked={data?.hot ? true : false}
                                            style={{
                                                width: '140px'
                                            }}
                                            onChange={handleOnChange}
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
                                            checked={data?.dangChieu ? true : false}
                                            style={{
                                                width: '75px'
                                            }}
                                            onChange={handleOnChange}
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
                                            checked={data?.sapChieu ? true : false}
                                            style={{
                                                width: '100px'
                                            }}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success" type="submit">Lưu</button>
                        <button className="btn btn-danger" type="button">Huỷ</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ModalAddFilm

