//
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/Auth/SignUp/SignUp";
import LogIn from "./Components/Auth/LogIn/LogIn";
import WelcomeScreen from "./Components/WelcomeScreen";
import Inbox from "./Components/Inbox";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navbar />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/WelcomeScreen" element={<WelcomeScreen/>}/>
        <Route path="/Inbox" element={<Inbox/>}/>
      </Routes>
    </>
  );
}

export default App;
