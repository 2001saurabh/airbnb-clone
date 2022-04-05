import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import HomeDetails from "./components/pages/HomeDetails";
import HomeList from "./components/pages/HomeList";
import Checkout from "./components/pages/Checkout";
import RoomImageList from "./components/homeDetails/RoomImageList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="s/homes/search_mode" element={<HomeList />} />
        <Route path="/rooms/:id" element={<HomeDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/images/:id" element={<RoomImageList />} />
      </Routes>
    </div>
  );
}

export default App;
