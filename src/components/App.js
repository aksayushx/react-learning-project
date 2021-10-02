import Carousel from "react-bootstrap/Carousel";
import logo from "../assets/logo.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import appStore from "../assets/AppStoreBadge.svg";
import playStore from "../assets/google-play-badge.png";
import { Icons } from "./icons";
import React from "react";
import { Navbar } from "./navbar";
import "../styles/App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  /*const FEED_QUERY = gql`
    {
      title
      subtitle
    }
  `;

  const { data } = useQuery(FEED_QUERY);*/
  //console.log(data.title);
  const desc =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <nav className="navbar">
              <div className="container">
                <a className="navbar-brand" href="/">
                  <img alt="logo" src={logo} />
                </a>
              </div>
            </nav>
            <h2 id="head-left">{desc}</h2>
            <p id="para">{desc}</p>
            <div className="row download">
              <img src={appStore} alt="AppStore" />
              <img src={playStore} alt="PlayStore" />
            </div>
          </div>
          <div className="col-sm-6 side">
            <Navbar className="my-nav" />
            <Carousel className="my-carousel">
              <Carousel.Item>
                <img className="slide" src={slide1} alt="First slide" />
                <Carousel.Caption>
                  <div className="container caption-carousel">
                    <h5 className="head align-left">Type Text</h5>
                    <p className="carousel-text align-left">{desc}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="slide" src={slide2} alt="Second slide" />
                <Carousel.Caption>
                  <div className="container caption-carousel">
                    <h6 className="head align-left">Type Text</h6>
                    <p className="carousel-text align-left">{desc}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="row my-icons">
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
