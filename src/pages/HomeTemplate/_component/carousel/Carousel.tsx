import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store'
import { actFetchBanner } from './duckGetCarousel/action'
import RenderCarousel from './RenderCarousel'
import './cssCarousel.css'

export default function Carousel() {
    const dispatch: any = useDispatch()

    const { banner, loading } = useSelector((state: RootState) => state.BannerReducer)

    useEffect(() => {
        dispatch(actFetchBanner())
    }, [])


    const handleRenderBanner = () => {
        if (loading)
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );

        if (banner && banner.length > 0) {
            return banner.map((item, index) => {
                return <RenderCarousel banner={item} key={index}/>
            })
        }
    }

    return (
        <>

            <div className="carousel container">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./image/banner_film.jpg" className="d-block" alt="" />
                        </div>
                        {handleRenderBanner()}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        </>
    )
}
