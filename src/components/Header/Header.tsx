import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}

export const Header = () => {
  const reactDescriptions = ["Fundamental", "Core", "Essential"];

  const index = getRandomNumber(reactDescriptions.length);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[index]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};
