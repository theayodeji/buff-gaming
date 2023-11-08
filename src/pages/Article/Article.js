import React from "react";
import AuthorInfo from "./AuthorInfo";
import AsideContainer from "../../components/ui/AsideContainer/AsideContainer"
import { useParams } from "react-router-dom";

function Article() {

  const { articleId : id }= useParams();

  const articles = [
    {
      title: "valorant agent cypher",
      subtitle: "lore and backstory",
      articleImg: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/120429109144873.5fcd8e483d176.png",
      author: "Blake Dubouis",
      timeToRead: 10,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur. \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur..",
      date:"21 Dec 2022"
    },
    {
      title: "eafc drops new title update, gamers worried",
      subtitle: "",
      articleImg: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/363446846_1660353107774131_6063752636375189563_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2-5aY_rAMZMAX_ZLI5U&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfCTkM4tE6oD_bSdse7fDDMb10ifFWAuMHUC3tcGpRVulA&oe=654F6889",
      author: "The Goodman",
      timeToRead: 15,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur. \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur.",
      date:"21 Dec 2022"
    },
    {
      title: "call of duty",
      subtitle: "influence redefined",
      articleImg: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/KHQRTCILZAVT1654115190478.jpg",
      author: "tommy ghost",
      timeToRead: 13,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur. \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur.",
      date:"21 Dec 2022"
    },
    {
      title: "the league of legends resumes",
      subtitle: "servers up again",
      articleImg: "https://www.esports.net/wp-content/uploads/2023/07/league-wallpaper-e1689679247425.webp",
      author: "Ninja",
      timeToRead: 6,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur. \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur.",
      date:"21 Dec 2022"
    },
    {
      title: "the league of legends resumes",
      subtitle: "servers up again",
      articleImg: "https://www.esports.net/wp-content/uploads/2023/07/league-wallpaper-e1689679247425.webp",
      author: "Ninja",
      timeToRead: 6,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur. \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur.",
      date:"21 Dec 2022"
    },
    {
      title: "Batman returns with a bang",
      articleImg: "https://i.insider.com/559411ae2acae711008b55c0?width=1136&format=jpeg",
      author: "Rufus",
      timeToRead: 12,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur. \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur.",
      date:"21 Dec 2022"
    },
    {
      title: "Efootball celebrates Messi triupmh",
      articleImg: "https://pbs.twimg.com/media/F5VmSfuaEAAz250?format=jpg&name=small",
      author: "Ninja",
      timeToRead: 6,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur. \n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur.",
      date:"21 Dec 2022"
    }
  ];

  return (
    <div className="container article">
      <div className="article-wrapper">
        <img src={articles[id].articleImg} alt="" />
        <div className="article-content">
            <p className="date">{articles[id].date}</p>
            <h1 className="title">{articles[id].title + ( articles[id].subtitle ? ": " +  articles[id].subtitle  : "")}</h1>
            <AuthorInfo author={articles[id].author}/>
            <article>{articles[id].text}</article>
        </div>
        <div className="related-articles">
            <h3 className="title">Related articles</h3>
        </div>
      </div>
      <AsideContainer />
    </div>
  );
}

export default Article;
