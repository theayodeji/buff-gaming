import React from "react";
import valchar from "./assets/valorant-agent.png";
import valbg from "./assets/valorant-bg.png";
import csgo from "./assets/csgo-bg.png";
import csgochar from "./assets/csgo-character-model-png-the-image-is-png-format-with-a-clean-transparent-background-mundode-sophia 1.png";
import fornitebg from "./assets/fortnite-bg.png";
import fortnitechar from "./assets/fortnite-char.png";
import lolchar from "./assets/league-of-legend.png";
import lolbg from "./assets/lol-bg.png";
import "./index.scss"

const featuredgames = [
  { logo: valbg, character: valchar, gameName: "valorant" },
  { logo: csgo, character: csgochar, gameName: "csgo" },
  { logo: lolbg, character: lolchar, gameName: "lol" },
  { logo: fornitebg, character: fortnitechar, gameName: "fortnite" },
];

const FeaturedGamesEl = featuredgames.map((game, i) => {
  return (
    <div className="featured-game" key={i}>
      <div className="featured-game-wrapper">
        <img src={game.logo} alt={game.gameName} />
      </div>
      <img  className="animated zoomInDown game-character" src={game.character} alt={game.gameName} />
    </div>
  );
});

function FeaturedGames() {
  return (
    <div className="featured-games">
      <div className="featured-games-wrapper">
        {FeaturedGamesEl}
      </div>
    </div>
  );
}

export default FeaturedGames;
