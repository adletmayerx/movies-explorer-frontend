import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { mainApi } from "../../utils/api";
import currentUserContext from "../../contexts/current-user-context";

const App = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
        }
      })
      .catch((e) => console.error(e));
  };

  const handleLogin = (email, password) => {
    mainApi
      .login(email, password)
      .then((res) => {
        authorizeUser();
      })
      .catch((e) => console.error(e));
  };

  const authorizeUser = useCallback(() => {
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((e) => console.error(e));
  }, [navigate, setCurrentUser]);

  useEffect(() => {
    if (!isLoggedIn) {
      authorizeUser();
    }
  }, [authorizeUser, isLoggedIn]);

  return (
    <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
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
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                component={ProfilePage}
              />
            }
          />
          <Route path="/signup" element={<RegisterPage handleRegister={handleRegister} />} />
          <Route path="/signin" element={<LoginPage handleLogin={handleLogin} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </currentUserContext.Provider>
  );
};

export default App;
