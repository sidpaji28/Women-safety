import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import UserHome from "./pages/UserHome";
import VoiceRecord from "./components/VoiceRecord";
import Helpline from "./components/Helpline";
import Videos from "./components/Videos";
import Start from "./pages/Start";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/voice-record" element={<VoiceRecord />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
};

export default App;
