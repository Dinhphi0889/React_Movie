import { NavLink } from "react-router-dom"
import './styleSidebar.css'
export default function SideBar() {
    return (
        <div className="sidebar bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className={({ isActive }) => (isActive ? 'nav-link my-active' : 'nav-link')} to=''>Admin</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => (isActive ? 'nav-link my-active' : 'nav-link')} to="add-film">Thêm phim</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => (isActive ? 'nav-link my-active' : 'nav-link')} to="lists-film">Danh sách phim</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({ isActive }) => (isActive ? 'nav-link my-active' : 'nav-link')} to="list-user">Danh sách người dùng</NavLink>
                </li>

            </ul>

        </div>
    )
}

