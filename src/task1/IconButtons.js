import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'

const style = (loading) => ({
    cursor: loading ? "not-allowed" : "pointer",
    height: '50px',
    width: '50px',
})


const IconButtons = ({ handleClick, direction, loading }) => {
    return (
        <IconButton onClick={!loading && handleClick}
            sx={style(loading)}>
            {direction === 'left' ? < ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
        </IconButton>
    )
}

export default IconButtons;