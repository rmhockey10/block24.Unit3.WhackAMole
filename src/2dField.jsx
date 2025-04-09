import { useGame } from "./GameContext";
import moleImage from "../public/mole.png";

export default function Field() {
  const { field, whack } = useGame();

  return (
    <>
      {field.map((image, index) => {
        if (image === moleImage) {
          return (
            <img
              key={index}
              src={image}
              alt={`image-${index}`}
              onClick={() => whack()}
            />
          );
        } else {
          return <img key={index} src={image} alt={`image-${index}`} />;
        }
      })}
    </>
  );
}
