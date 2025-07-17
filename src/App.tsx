import {Outlet} from "react-router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar/Navbar";
import './App.css';

function App() {
  return <>
    <Navbar/>
    <Outlet/>
    <ToastContainer/>
  </>;
}

export default App;