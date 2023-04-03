import React from 'react';
import { Grid, Typography } from '@mui/material';


const Navbar = () => {

    const typStyle = {
        // border: "solid red 1px",
        marginLeft: "4vw",
        borderLeft: "solid white 1px",
        padding: "4rem"
    }

  return (
    <Grid  sx={{
        // border: "solid red 1px",
        marginTop: "5%",
        width: "50vw",
        marginLeft: "1vw"
    }}
    container spacing={10}
    direction="column"
    color={"lavender"}
    >
        <Grid item xs={1} sx={typStyle}>
            <Typography variant='h1' component={"h3"}>About</Typography>
        </Grid>
        <Grid item xs={1} sx={typStyle}>
            <Typography variant='h1'>Projects</Typography>
        </Grid>
        <Grid item xs={1} sx={typStyle}>
            <Typography variant='h1'>Learn</Typography>
        </Grid>
    </Grid>
  );
};

export default Navbar;
