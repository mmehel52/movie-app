import "./App.css";
import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/navbar/Navbar";
const style = {
  colors: {
    header: "#FF4858",
    body: "#1B7F79",
    text: "#747F7F",
  },
  responsive: "724px",
};
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={style}>
        <Navbar />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
