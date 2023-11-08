import React from "react";
import { Link } from "react-router-dom";

function ArticleContainer({ hasText, section, articleImg, title, text, date, author, subtitle, timeToRead }) {
  return (
    <Link to={"/"} className={`${section}-article-preview-container`}>
      <img src={articleImg} alt="" />
      {hasText ? (
        <div className="article-preview-text">
          <h3 className="article-title">{title}: {subtitle? subtitle : ''}</h3>
          <p className="article-text">{text}</p>
          <div className="info">
            <span className="author">{author}</span>
            <div className="circle"></div>
            <span className="time-to-read">{date}</span>
          </div>
        </div>
      ) : (
        <div className="article-preview-text">
          <h3 className="article-title">{title}</h3>
          <div className="info">
            <span className="author">{author}</span>
            <div className="circle"></div>
            <span className="time-to-read">{timeToRead} min read</span>
          </div>
        </div>
      )}
    </Link>
  );
}

export default ArticleContainer;
