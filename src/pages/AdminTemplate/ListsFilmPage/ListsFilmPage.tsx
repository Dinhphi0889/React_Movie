import './listMovie.css'
import { useEffect } from 'react'
import { actFetchListMovieAdmin } from "../duck/action"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import ShowListFilm from './ShowListFilm'
import { Button } from 'react-bootstrap'
import ModalAddFilm from './ModalAddFilm'


export default function ListsFilmPage() {

  const dispatch: any = useDispatch()
  const { data, loading } = useSelector((state: RootState) => state.listMovieAdminReducer)



  useEffect(() => {
    dispatch(actFetchListMovieAdmin())
  }, [])

  const renderListMovieAdmin = () => {
    if (loading) return <div>loading...</div>

    if (data && data.length > 0) {
      return data.map((item) => {
        return <ShowListFilm movie={item} />
      })
    }
  }

  return (
    <>
      <div className="showListsMovie">
        <h1>Danh sách phim</h1>
        <input placeholder="tìm kiếm" type="text" className="searchMovie"></input>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã Phim</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col">Tên Phim</th>
              <th scope="col">Mô tả</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {renderListMovieAdmin()}
          </tbody>
        </table>
      </div>
      <div className='container'>
        <ModalAddFilm />
      </div>
    </>
  )
}
