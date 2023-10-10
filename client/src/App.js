import "./App.css";
import { ToastContainer } from "react-toastify";

import Exchange from "./components/Exchange";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Search />
      <Exchange />
    </>
  );
}

export default App;
