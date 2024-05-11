import { useDispatch } from "react-redux"
import { TypeListMovieAdmin } from "../duck/type"
import { EditMovieAdmin } from './duckListFilm/action'
import ModalAddFilm from "./ModalAddFilm"
import { useState } from "react"



type Props = {
    movie: TypeListMovieAdmin
}



export default function ShowListFilm(props: Props) {

    const dispatch: any = useDispatch()

    const editMovie = (data: any) => {
        dispatch(EditMovieAdmin(data))
    }

    const { movie } = props
    return (
        <>
            <tr key={movie.maPhim}>
                <th>
                    {movie.maPhim}
                </th>
                <td>
                    <img src={movie.hinhAnh} alt="" width={100}></img>
                </td>
                <td>
                    <h5>{movie.tenPhim}</h5>
                </td>
                <td>{movie.moTa}</td>
                <td className="buttonSetting">
                    <button className="btn btn-primary" data-toggle="modal" data-target="#modalDetail" onClick={() => {
                        editMovie(movie)
                    }
                    }>Sửa</button>
                    <button className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        </>
    )
}
