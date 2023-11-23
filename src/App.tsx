import "@/styles/pages/App.scss";
import ThemContext from "@/components/context/ThemeContext";
import { Toaster } from "react-hot-toast";
import Home from "@/components/Home/Home";
import Cursor from "./components/customComponents/Cursor";

const App = () => {
  return (
    <ThemContext>
      <Home />
      <Cursor />
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        containerClassName=""
        toastOptions={{
          style: {
            background: "var(--main)",
            color: "var(--third)",
            width: 300,
            padding: 10,
            whiteSpace: "nowrap",
            fontSize: 10,
          },
        }}
      />
    </ThemContext>
  );
};

export default App;
