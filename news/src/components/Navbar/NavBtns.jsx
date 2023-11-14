import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBtns = ({children, ...restProps}) => {
    return (
        <Link {...restProps}>
            <Typography 
                variant='subtitle1' 
                color={'#000'} 
                display={{xs: 'none', sm: 'flex'}} 
            >
                {children}
            </Typography>
        </Link>
    )
}

export default NavBtns