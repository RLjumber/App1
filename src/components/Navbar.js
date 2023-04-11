import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Navbar = () => {

    const TypGrid = styled(Grid)(({ theme }) => ({
        padding: "4rem",
        borderLeft: "solid white 2px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        [theme.breakpoints.down('800')]: {
            padding: "2rem",
            textAlign: "center",
            '& h1': {
                fontSize: "2rem !important",
            },
        },
    }));

  return (
    <Grid
        sx={{
            // border: "solid red 2px",
            display: "flex",
            width: "30vw",
            height: "80vh",
            alignItems: "left"
        }}
        container spacing={0}
        direction="column"
        color={"lavender"}
    >
        <TypGrid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant='h1'>About</Typography>
        </TypGrid>
        <TypGrid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant='h1'>Projects</Typography>
        </TypGrid>
        <TypGrid item xs={12} sm={6} md={4} lg={3}>
            <Typography variant='h1'>Learn</Typography>
        </TypGrid>
    </Grid>
  );
};

export default Navbar;
