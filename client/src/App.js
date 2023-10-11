import "./App.css";
import { ToastContainer } from "react-toastify";

import Exchange from "./components/Exchange";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Exchange />
    </>
  );
}

export default App;
