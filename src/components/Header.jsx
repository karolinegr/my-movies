import MainMenu from "./MainMenu";
import { HeaderContainer } from "../styles/HeaderContainer";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>My movies</h1>
      <MainMenu />
    </HeaderContainer>
  );
}
