export type CumRapChieu = {
  maCumRap: string;
  tenCumRap: string;
  hinhAnh: string;
  diaChi: string;
  lichChieuPhim: LichChieuPhim[];
}
export type HeThongRapChieu = {
  cumRapChieu: CumRapChieu[];
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