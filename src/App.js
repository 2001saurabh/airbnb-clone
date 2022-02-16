import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import HomeDetailsPage from "./components/pages/HomeDetailsPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="s/homes/search_mode" element={<HomeDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
