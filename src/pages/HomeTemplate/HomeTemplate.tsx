import { Navigate, Outlet } from "react-router-dom";
import HeaderHomePage from "./_component/header/HeaderHomePage";
import FooterHomePage from "./_component/footer/FooterHomePage";
import "../HomeTemplate/_component/style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function HomeTemplate() {

  return (
    <div style={{ backgroundColor: "#1A191F" }}>
      <HeaderHomePage />
      <Outlet />
      <FooterHomePage />
    </div>
  );
}
