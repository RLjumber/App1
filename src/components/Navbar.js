import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Navbar = () => {

    const TypGrid = styled(Grid)(({ theme }) => ({
        padding: "4rem",
        borderLeft: "solid white 2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        '&:first-child': {
            borderLeft: "none",
        },
    }));

    // example of syntax with 
    // <Box sx={system({
    //     width: 200,
    //     height: 200,
    //     bg: 'primary.main',
    //   })} />
    

  return (
    <Grid
        sx={{
            // border: "solid red 2px",
            display: "flex",
            width: "80vw",
            height: "60vh",
            alignItems: "center"
        }}
        container spacing={0}
        direction="row"
        color={"lavender"}
    >
        <TypGrid item xs={4}>
            <Typography variant='h1' component={"h3"}>About</Typography>
        </TypGrid>
        <TypGrid item xs={4}>
            <Typography variant='h1'>Projects</Typography>
        </TypGrid>
        <TypGrid item xs={4}>
            <Typography variant='h1'>Learn</Typography>
        </TypGrid>
    </Grid>
  );
};

export default Navbar;
