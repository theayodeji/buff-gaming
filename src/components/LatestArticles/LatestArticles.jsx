import React from 'react';
import ArticleContainer from "../articlePreview/ArticleContainer"
import "./index.scss"

const headlines = [
    {
      title: "valorant agent cypher",
      subtitle: "lore and backstory",
      articleImg: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/120429109144873.5fcd8e483d176.png",
      author: "Blake Dubouis",
      timeToRead: 10,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur."
    },
    {
      title: "eafc drops new title update, gamers worried",
      subtitle: "",
      articleImg: "https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/363446846_1660353107774131_6063752636375189563_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2-5aY_rAMZMAX_ZLI5U&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AfCTkM4tE6oD_bSdse7fDDMb10ifFWAuMHUC3tcGpRVulA&oe=654F6889",
      author: "The Goodman",
      timeToRead: 15,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur."
    },
    {
      title: "call of duty",
      subtitle: "influence redefined",
      articleImg: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/KHQRTCILZAVT1654115190478.jpg",
      author: "tommy ghost",
      timeToRead: 13,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur."
    },
    {
      title: "the league of legends resumes",
      subtitle: "servers up again",
      articleImg: "https://www.esports.net/wp-content/uploads/2023/07/league-wallpaper-e1689679247425.webp",
      author: "Ninja",
      timeToRead: 6,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur."
    },
    {
      title: "the league of legends resumes",
      subtitle: "servers up again",
      articleImg: "https://www.esports.net/wp-content/uploads/2023/07/league-wallpaper-e1689679247425.webp",
      author: "Ninja",
      timeToRead: 6,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur."
    },
    {
      title: "Batman returns with a bang",
      articleImg: "https://i.insider.com/559411ae2acae711008b55c0?width=1136&format=jpeg",
      author: "Rufus",
      timeToRead: 12,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur."
    },
    {
      title: "Efootball celebrates Messi triupmh",
      articleImg: "https://pbs.twimg.com/media/F5VmSfuaEAAz250?format=jpg&name=small",
      author: "Ninja",
      timeToRead: 6,
      url: "/",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deleniti, quibusdam reprehenderit odio ullam necessitatibus dolorum id consectetur."
    }
  ];

  const articles = headlines.map((headline, i) =>{
    return ( <ArticleContainer key={i} id={i} hasText={i===0 ? true : false} date={"25 Dec 2022"} section={"latest-articles"} {...headline}/> )
  })

function LatestArticles() {
  return (
    <div className='latest-articles'>
        <h3 className="title">Latest Articles</h3>
        <div className="latest-articles-wrapper grid grid-3">
            {articles}
        </div>
    </div>
  )
}

export default LatestArticles