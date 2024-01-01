import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { airlinesData } from "./AirlineDetails"; // Import your airlinesData array
import "./HomePage.css"; // Import your CSS file for styling
import Video from "../assets/AirlineAssets/HomePageVideo.mp4";
import Video1 from "../assets/AirlineAssets/SanjayLava.mp4";
import Video2 from "../assets/AirlineAssets/MalaKaava.mp4";
import Video3 from "../assets/AirlineAssets/Aerial.mp4";
import { AbhiramAirlineUrl } from "./AirlineDetails";
import { Container, Typography, Grid, CssBaseline } from "@mui/material"; // Import Material-UI components

const HomePage = () => {
  const scrollRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        scrollRef.current.scrollTop = scrollTop + 1;
      }
    };

    const interval = setInterval(handleScroll, 50); // Adjust the interval speed as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderAirlineSections = () => {
    const sections = [];

    for (let i = startIndex; i < startIndex + 16; i += 4) {
      if (i >= airlinesData.length) break;

      const leftAirline1 = airlinesData[i];
      const leftAirline2 = airlinesData[i + 1];
      const rightAirline1 = airlinesData[i + 2];
      const rightAirline2 = airlinesData[i + 3];

      sections.push(
        // <div
        //   className="parallax-section bg-white my-2 border border-gray-200"
        //   key={i}
        // >
        <div
          className="parallax-section"
          key={i}
        >
          <div className="airline">
            <div className="image-container">
              <div className="image-overlay">
                <Link to={leftAirline1.link}>
                  <img
                    src={leftAirline1.img}
                    className="full-image"
                    alt="Airline"
                  />
                  <h2>{leftAirline1.name}</h2>
                  <p>{leftAirline1.text}</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="airline">
            <div className="image-container">
              <div className="image-overlay">
                <Link to={leftAirline2.link}>
                  <img src={leftAirline2.img} className="full-image"></img>
                  <h2>{leftAirline2.name}</h2>
                  <p>{leftAirline2.text}</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="airline">
            <div className="image-container">
              <div className="image-overlay">
                <Link to={rightAirline1.link}>
                  <img src={rightAirline1.img} className="full-image"></img>
                  <h2>{rightAirline1.name}</h2>
                  <p>{rightAirline1.text}</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="airline">
            <div className="image-container">
              <div className="image-overlay">
                <Link to={rightAirline2.link}>
                  <img src={rightAirline2.img} className="full-image"></img>
                  <h2>{rightAirline2.name}</h2>
                  <p>{rightAirline2.text}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return sections;
  };

  return (
    <div>
      <CssBaseline /> {/* Add CssBaseline for consistent styling */}
      <div className="hero-page-main">
        <div className="fullscreen-video parallax-section">
          <video autoPlay muted loop className="responsive-video">
            <source src={Video3} type="video/mp4" />
          </video>
          <div className="text-overlay">
            <h1 className="title">Sweet 16 Airlines</h1>
            <p className="subtitle">Live to Travel</p>
          </div>
        </div>
      </div>
      <div className="hero-page">{renderAirlineSections()}</div>

      {/* Material-UI Footer */}
      <Container
        component="footer"
        maxWidth="false"
        sx={{ mt: 0.2, bgcolor: "darkgrey", padding: 2, width: "100%", minWidth: "100vw" }}
      >        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary" align="center">
              Sweet Sixteen Airline Impact 2023B batch
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
