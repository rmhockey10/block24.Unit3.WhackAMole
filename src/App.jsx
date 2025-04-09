import HomePage from "./1aHomePage.jsx";
import Game from "./1cGame.jsx";
import { useGame } from "./GameContext.jsx";

export default function App() {
  const { isGame } = useGame();

  return <>{!isGame ? <HomePage /> : <Game />}</>;
}
