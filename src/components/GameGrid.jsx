import React, { useEffect, useState } from "react";
import { gamesData } from "../data/games"; // Importing the mock data
import GameCard from "../components/GameCard";

const GameGrid = ({ selectedGenre, selectedPlatform }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(gamesData); // Mock fetching games
  }, []);

  //Filter games by genre and platform
  const filteredGames = games.filter((game) => {
    const genre = game.genre.toLowerCase();
    const platform = game.platform.toLowerCase();

    const genreMatch =
      selectedGenre.length === 0 || selectedGenre.includes(genre);
    const platformMatch =
      selectedPlatform.length === 0 ||
      selectedPlatform.some((p) => platform.includes(p));

    return genreMatch && platformMatch;
  });

  return (
    <div className="game-list">
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameGrid;
