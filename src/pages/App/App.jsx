import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../../components";
import {
  HomePage,
  MoviesPage,
  SavedMoviesPage,
  ProfilePage,
  RegisterPage,
  LoginPage,
  NotFoundPage,
} from "../";
import { mainApi, moviesApi } from "../../utils/api";
import currentUserContext from "../../contexts/current-user-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //todo
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/movies"
            element={<ProtectedRoute loggedIn={isLoggedIn} component={MoviesPage} />}
          />
          <Route
            path="/saved-movies"
            element={<ProtectedRoute loggedIn={isLoggedIn} component={SavedMoviesPage} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute loggedIn={isLoggedIn} component={ProfilePage} />}
          />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </currentUserContext.Provider>
  );
};

export default App;
