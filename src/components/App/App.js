import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = React.useState(false);

  function handleBurgerPopupClick() {
    setIsBurgerPopupOpen(true);
  }

  function closePopup() {
    setIsBurgerPopupOpen(false);
  }

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="/movies" element={<Movies />}></Route>

        <Route
          path="/saved-movies"
          element={<SavedMovies onBurgerPopup={handleBurgerPopupClick} />}
        ></Route>

        <Route path="/profile" element={<Profile />}></Route>

        <Route path="/signup" element={<Register />}></Route>

        <Route path="/signin" element={<Login />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

      <BurgerMenu isOpen={isBurgerPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;
