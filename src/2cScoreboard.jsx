import { useGame } from "./GameContext";

export default function HighScore() {
  const { setGame, score } = useGame();
  return (
    <section>
      <h2>Whack A Mole</h2>
      <p>{score}</p>
      <p>*Time(optional)*</p>
      <button onClick={() => setGame(false)}>Restart</button>
    </section>
  );
}
