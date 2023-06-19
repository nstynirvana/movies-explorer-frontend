import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="/movies" element={<Movies />}></Route>

        <Route path="/saved-movies" element={<SavedMovies />}></Route>

        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/signup" element={<Register />}></Route>

        <Route path="/signin" element={<Login />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>

      </Routes>
  );
}

export default App;
