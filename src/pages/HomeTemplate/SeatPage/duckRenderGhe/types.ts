export type DanhSachGhe = {
    maGhe: number;
    tenGhe: string;
    maRap: number;
    loaiGhe: LoaiGhe;
    stt: string;
    giaVe: number;
    daDat: boolean;
    taiKhoanNguoiDat: null | string;
}
export enum LoaiGhe {
    Thuong = "Thuong",
    Vip = "Vip",
}
