import ColorContextComponent from "./components/context/colorContext";
import Nav from "./components/Nav";
import { useState } from "react";
import Loading from "./components/loading";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ColorContextComponent>
          <Nav />
        </ColorContextComponent>
      )}
    </>
  );
};

export default App;
