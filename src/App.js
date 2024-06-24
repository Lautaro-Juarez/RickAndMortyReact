import { NavBar } from "./components/NavBar";
import { Principal } from "./components/Principal";
import { CharactersProvider } from "./context/CharactersProvider";

export function App() {
  return (
    <CharactersProvider>
      <NavBar/>
      <Principal />
    </CharactersProvider>
  );
}
