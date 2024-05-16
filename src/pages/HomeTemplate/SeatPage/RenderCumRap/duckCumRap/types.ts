export type CumRapChieu = {
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: string;
  diaChi: string;
}
export type HeThongRapChieu = {
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
}
export type LichChieuPhim = {
  maLichChieu: string;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: Date;
  giaVe: number;
  thoiLuong: number;
}
export type Content = {
  lichChieuPhim: LichChieuPhim[];
  cumRapChieu: CumRapChieu[];
  heThongRapChieu: HeThongRapChieu[];
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
  ngayKhoiChieu: Date;
  danhGia: number;
}