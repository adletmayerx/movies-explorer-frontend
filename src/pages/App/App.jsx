import React, { useState, useContext } from "react";
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
import { mainApi, moviesApi } from "../../utils/api";
import currentUserContext from "../../contexts/current-user-context";

const App = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false); //todo
  const { currentUser, setCurrentUser } = useContext(currentUserContext);

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
  const authorizeUser = () => {
    mainApi
      .getUserInfo()
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
        setIsLoggedIn(true);
        debugger;
        navigate("/movies");
      })
      .catch((e) => console.error(e));
  };
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
          <Route path="/signup" element={<RegisterPage handleRegister={handleRegister} />} />
          <Route path="/signin" element={<LoginPage handleLogin={handleLogin}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </currentUserContext.Provider>
  );
};

export default App;
