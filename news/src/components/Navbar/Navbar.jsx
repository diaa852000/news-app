import React from 'react'
import { Box, Icon, Stack, Typography } from '@mui/material'
import NavLinks from './NavLinks'
import NavBtns from './NavBtns'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useMediaQuery } from '@mui/material';
import {theme} from '../../utils/theme'

const Navbar = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className='mx-2 md:mx-[2rem] mb-2 border-b border-[rgba(0,0,0,0.7)] bg-white'>
            <Stack spacing={3}>
                <Box className='pt-2 flex items-center justify-center transition-all ease-in-out duration-150'>
                    <input 
                        type="text"
                        className='rounded-md px-2 py-px w-full md:w-2/3 lg:w-1/3 bg-[#f1efef] placeholder-black placeholder:text-center placeholder:text-xs outline-none text-sm shadow-sm'
                        placeholder='NEWS.WORLD'
                    />
                </Box>
                <Stack 
                    direction={'row'} 
                    justifyContent={'space-between'}
                >
                    <Typography variant='subtitle2' sx={{fontWeight:600}}>
                        NEWS.WORLD
                    </Typography>

                    <NavLinks />
                    <Stack direction={'row'} spacing={2}>
                        <NavBtns>Register</NavBtns>
                        <NavBtns>Log in</NavBtns>

                        {isSmallScreen && (
                            <Icon sx={{ display: 'block' }}>
                                <DensityMediumIcon />
                            </Icon>
                        )}
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Navbar