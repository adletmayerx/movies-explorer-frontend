import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, MoviesPage } from "../";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
};

export default App;
