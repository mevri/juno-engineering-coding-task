import React, { useState, useEffect, useCallback } from "react";
import { fetchImageUrls } from "../api/index";
import IconButtons from "./IconButtons";
import CircularProgress from '@mui/material/CircularProgress'

const ImageCarousel = () => {
    const [images, setImages] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 6000)

        return () => clearInterval(interval)
    })

    const nextSlide = () => {
        setCurrentIndex(curr => {
            if (curr === images.length - 1) {
                return 0
            } else {
                return curr + 1
            }
        })
    }

    const prevSlide = () => {
        setCurrentIndex(curr => {
            if (!curr) {
                return images.length - 1
            } else {
                return curr - 1
            }
        })
    }

    const fetchData = useCallback(async () => {
        const data = await fetchImageUrls()
        setImages(data)
        setLoading(false)
    }, [])


    useEffect(() => {
        fetchData()
    }, [fetchData])


    return (
        <div className="carousel-wrapper">
            <IconButtons handleClick={prevSlide} direction='left' loading={loading} />
            <div className="carousel-wrapper-content">
                {
                    loading ?
                        <CircularProgress /> :
                        <img src={images[currentIndex]} alt=""/>
                }
            </div>
            <IconButtons handleClick={nextSlide} direction='right' loading={loading} />

        </div>
    )
};
export default ImageCarousel;
