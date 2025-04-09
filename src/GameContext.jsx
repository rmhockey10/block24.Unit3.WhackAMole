import { createContext, useContext, useState } from "react";
import holeImage from "../public/hole.png";
import moleImage from "../public/mole.png";

const GameContext = createContext();

let arr = [
  holeImage,
  holeImage,
  holeImage,
  holeImage,
  holeImage,
  holeImage,
  holeImage,
  holeImage,
  holeImage,
];

export function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [isGame, setGame] = useState(false);
  const [field, setField] = useState(arr);

  const startEndGame = () => {
    setScore(0);
    setGame(true);
    shuffle();
    //timer go here? //
    // setGame(false);
  };

  const scoreCount = () => {
    const newScore = score + 1;
    setScore(newScore);
  };

  function shuffle() {
    let arr = [
      holeImage,
      holeImage,
      holeImage,
      holeImage,
      holeImage,
      holeImage,
      holeImage,
      holeImage,
      holeImage,
    ];

    let randomIndex = Math.floor(Math.random() * arr.length);
    arr[randomIndex] = moleImage;
    setField(arr);
  }

  const whack = () => {
    shuffle();
    scoreCount();
  };

  const value = {
    scoreCount,
    score,
    startEndGame,
    isGame,
    setGame,
    shuffle,
    field,
    whack,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) throw Error("useGame must be used within GameContext Provider");

  return context;
}
