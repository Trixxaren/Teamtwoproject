import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Komponent/Header";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Startsida</div>} />
        <Route path="/Showgame" element={<div>Show Game sida</div>} />
      </Routes>
    </Router>
  );
};

export default App;

