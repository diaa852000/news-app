import { Stack, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const NavLinks = () => {
    const _links = [
        { link: "/", page: "Home", id: "0" },
        { link: "/culture", page: "culture", id: "1" },
        { link: "/politics", page: "politics", id: "2" },
        { link: "/sports", page: "sports", id: "3" },
    ];
    return (
        <Stack 
            direction={'row'} 
            spacing={2} 
            display={{xs: 'none', sm: 'flex'}}
        >
            {_links.map(link => (
                <Link
                    key={link.id}
                    to={link.link}
                >
                    <Typography variant='subtitle1'>
                        {link.page}
                    </Typography>
                </Link>
            ))}
        </Stack>
    )
}

export default NavLinks