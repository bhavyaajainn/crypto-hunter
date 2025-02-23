import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner.jpg)",
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    height: "400px", 
    width: "100%",
    display: "flex",
    alignItems: "center", 
    justifyContent: "center", 
  },
  bannerContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  tagline:{
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  }
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
       <div className={classes.tagline}>
        <Typography
        variant='h2'
        style={{
            fontWeight: "bold",
            marginBottom: 15,
            fontFamily: "Montserrat",
            textAlign: "center",
            color: "gold",
        }}
        >
            Crypto Hunter
        </Typography>
        <Typography
        variant='subtitle2'
        style={{
            fontWeight: "bold",
            color: "white",
            textTransform:"capitalize",
            textAlign: "center",
            fontFamily: "Montserrat"
        }}
        >
            Get All The Info Regarding Your Favorite Crypto Currency
        </Typography>
       </div>
       <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
