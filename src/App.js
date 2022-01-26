import { cardDetails } from "./components/cards/CardDetails";
import "./App.css";
import CardList from "./components/cards/CardList";
import NavBar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="card-list">
        <CardList cardDetails={cardDetails} />
      </div>
    </div>
  );
}

export default App;
