import React from "react";

function ArticleContainer({ section, articleImg, title, text, date, author }) {
  return (
    <div className={`${section} article-preview-container`}>
      <img src={articleImg} alt="" />
      {text ? (
        <div className="article-preview-text">
          <h3 className="article-title">{title}</h3>
          <p className="article-text">{text}</p>
          <div className="info">
            <span className="author">{author}</span>
            <div className="circle"></div>
            <span className="time-to-read">{date} min read</span>
          </div>
        </div>
      ) : (
        <div className="article-preview-text">
          <h3 className="article-title">{title}</h3>
          <div className="info">
            <span className="author">{author}</span>
            <div className="circle"></div>
            <span className="time-to-read">{date} min read</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleContainer;
