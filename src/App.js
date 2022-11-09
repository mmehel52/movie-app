import "./App.css";
import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
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
      <AuthContextProvider>
        <ThemeProvider theme={style}>
          <Navbar />
          <AppRouter />
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
