import React from 'react'
import { Form } from 'react-bootstrap'

export default function AddFilmPage() {
  return (
    <div className='container'>
      <h1>Thêm Phim Mới</h1>
      <Form.Label>Mã Phim</Form.Label>
      <Form.Control
        type="text"
        id="editMaPhim"
        name='maPhim' />
      <Form.Label>Tên Phim</Form.Label>
      <Form.Control
        type="text"
        id="editTenPhim"
        name='tenPhim' />

      <Form.Label>Bí Danh</Form.Label>
      <Form.Control
        type="text"
        id="editBiDanh"
        name='biDanh' />

      <Form.Label>Trailer</Form.Label>
      <Form.Control
        type="text"
        id="editTrailer"
        name='trailer' />
      <Form.Label>Mô Tả</Form.Label>
      <Form.Control
        type="text"
        id="editMoTa"
        name='moTa' />
      <Form.Label>Mã Nhóm</Form.Label>
      <Form.Control
        type="text"
        id="editMaNhom"
        name='maNhom' />
      <Form.Label>Ngày Khởi Chiếu</Form.Label>
      <Form.Control
        type="date"
        id="editNgayKhoiChieu"
        name='ngayKhoiChieu' />
      <Form.Label>Đánh Giá</Form.Label>
      <Form.Control
        type="text"
        id="editDanhGia"
        name='danhGia' />
      <Form.Label>Độ Hot</Form.Label>
      <Form.Control
        type="checkbox"
        id="editHot"
        name='hot' />
      <Form.Label>Đang Chiếu</Form.Label>
      <Form.Control
        type="checkbox"
        id="editDangChieu"
        name='dangChieu' />
      <Form.Label>Sắp Chiếu</Form.Label>
      <Form.Control
        type="checkbox"
        id="editSapChieu"
        name='sapChieu' />

    </div>
  )
}
