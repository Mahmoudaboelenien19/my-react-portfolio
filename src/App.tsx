import "@/styles/pages/App.scss";
import ThemContext from "@/components/context/ThemeContext";
import { Toaster } from "react-hot-toast";
import Home from "@/components/Home/Home";
import { Suspense } from "react";
import Loading from "./components/loading/loading";

const App = () => {
  return (
    <ThemContext>
      <Home />

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
