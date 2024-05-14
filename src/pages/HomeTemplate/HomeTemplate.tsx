import { Navigate, Outlet } from "react-router-dom";
import HeaderHomePage from "./_component/header/HeaderHomePage";
import FooterHomePage from "./_component/footer/FooterHomePage";
import "../HomeTemplate/_component/style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function HomeTemplate() {
  const { data } = useSelector((state: RootState) => state.LoginReducer)
  if (data?.maLoaiNguoiDung === 'KhachHang') {
    return <Navigate to='/' />

  }
  else if (data?.maLoaiNguoiDung === 'QuanTri') {
    return <Navigate to='admin' />
  }
  return (
    <div style={{ backgroundColor: "#1A191F" }}>
      <HeaderHomePage />
      <Outlet />
      <FooterHomePage />
    </div>
  );
}
