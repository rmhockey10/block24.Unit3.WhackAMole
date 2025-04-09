import { useGame } from "./GameContext";

export default function Welcome() {
  const { startEndGame } = useGame();

  return (
    <section>
      <h1>Whack A Mole</h1>
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>
      <button onClick={() => startEndGame()}>Play</button>
    </section>
  );
}
