import React from "react";
import { Link } from "react-router-dom";

function PreviewSlide({ img, title, subtitle, timeToRead, url, author }) {
  return (
    <Link to={url} className="home-preview-slider-slide">
      <img src={img} alt="" />
      <div className="preview-slide-details">
        <h1 className="title">{title}{subtitle ? <span>:</span> : <br/>}</h1>
        {subtitle && <h1 className="subtitle">{subtitle}</h1>}
        <div className="other-info">
          <span className="author">{author}</span>
          <div className="circle"></div>
          <span className="time-to-read">{timeToRead} min read</span>
        </div>
      </div>
    </Link>
  );
}

export default PreviewSlide;
