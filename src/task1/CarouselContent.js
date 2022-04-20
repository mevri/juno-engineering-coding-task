import React from 'react';
import IconButtons from './IconButtons';
import CircularProgress from '@mui/material/CircularProgress'


const CarouselContent = ({ prevSlide, nextSlide, loading, image }) => {
    return (
        <>
            <IconButtons handleClick={prevSlide} direction='left' loading={loading} />
            <div className="carousel-wrapper-content">
                {
                    loading ?
                        <CircularProgress /> :
                        <img src={image} alt="" />
                }
            </div>
            <IconButtons handleClick={nextSlide} direction='right' loading={loading} />
        </>
    )
}

export default CarouselContent;