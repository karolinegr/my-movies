import { Link } from "react-router-dom";
import { MainMenuContainer } from "../styles/MainMenuContainer";

export default function MainMenu() {
  return (
    <MainMenuContainer>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </ul>
    </MainMenuContainer>
  );
}
