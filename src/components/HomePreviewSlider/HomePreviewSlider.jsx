import React from "react";
import cod from "./assets/cod-poster.jpg";
import valorant from "./assets/valorant.png";
import eafc from "./assets/eafc.jpg";
import lol from "./assets/leagueoflegends.png";
import PreviewSlide from "./PreviewSlide";
import "./index.scss";
import { ReactComponent as SlideControlLeft } from "./assets/slide-control-left.svg";
import { ReactComponent as SlideControlRight } from "./assets/slide-control-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



function HomePreviewSlider() {
  const headlines = [
    {
      title: "valorant agent cypher",
      subtitle: "lore and backstory",
      img: valorant,
      author: "Blake Dubouis",
      timeToRead: 10,
      url: "/",
    },
    {
      title: "eafc drops new title update, gamers worried",
      subtitle: "",
      img: eafc,
      author: "The Goodman",
      timeToRead: 15,
      url: "/",
    },
    {
      title: "call of duty",
      subtitle: "influence redefined",
      img: cod,
      author: "tommy ghost",
      timeToRead: 13,
      url: "/",
    },
    {
      title: "the league of legends resume",
      subtitle: "servers up again",
      img: lol,
      author: "Ninja",
      timeToRead: 6,
      url: "/",
    },
  ];

  const headlineEl = headlines.map((headline, index) => {
    return (
      <SwiperSlide key={index} >
        <PreviewSlide {...headline} id={index}/>
      </SwiperSlide>
    );
  });

  return (
    //     <div className="slider-indicator">
    //       <div className="slider-indicator-bar active" id="1"></div>
    //       <div className="slider-indicator-bar" id="2"></div>
    //       <div className="slider-indicator-bar" id="3"></div>
    //       <div className="slider-indicator-bar" id="4"></div>
    //     </div>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".slider-control-right",
        prevEl: ".slider-control-left",
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // pagination={{ clickable: true }}
    >
      {headlineEl}
      <div className="slider-controls">
        <SlideControlLeft className="slider-control-left" />
        <SlideControlRight className="slider-control-right" />
      </div>
    </Swiper>
  );
}

export default HomePreviewSlider;
