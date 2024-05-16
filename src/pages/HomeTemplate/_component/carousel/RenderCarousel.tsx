import React from 'react'
import { Banner } from './duckGetCarousel/type'
import { useDispatch } from 'react-redux'
type Props = {
    banner: Banner
}
export default function RenderCarousel(props: Props) {
    const { banner } = props
    return (
        <div className="carousel-item">
            <img src={banner.hinhAnh} className="d-block" alt="" />
            <div className="carousel-caption d-none d-md-block">
            </div>
        </div>
    )
}
