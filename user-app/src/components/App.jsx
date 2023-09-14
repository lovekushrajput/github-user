import React from "react";
import Logo from "./Logo";
import User from "./User";
import { Route, Routes } from "react-router-dom";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/:name" element={<UserInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
