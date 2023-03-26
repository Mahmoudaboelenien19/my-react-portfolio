import { useContext } from "react";
import ColorContextComponent from "./components/context/colorContext";
import Nav from "./components/Nav";

function App() {
  return (
    <ColorContextComponent>
      <Nav />
    </ColorContextComponent>
  );
}

export default App;
