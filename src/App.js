import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/Auth/SignUp/SignUp";
import LogIn from "./Components/Auth/LogIn/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navbar />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
