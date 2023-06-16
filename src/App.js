import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/Auth/SignUp/SignUp";
import LogIn from "./Components/Auth/LogIn/LogIn";
import EmailPage from "./Components/Pages/EmailPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navbar />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/EmailPage" element={<EmailPage />} />
      </Routes>
    </>
  );
}

export default App;
