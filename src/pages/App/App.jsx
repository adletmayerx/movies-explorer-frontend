import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  MoviesPage,
  SavedMoviesPage,
  ProfilePage,
  RegisterPage,
} from "../";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/saved-movies" element={<SavedMoviesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
