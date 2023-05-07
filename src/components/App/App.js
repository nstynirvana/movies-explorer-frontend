import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';
import { Route, Routes, useNavigate  } from 'react-router-dom';

function App() {
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  function handleBurgerPopupClick() {
    setIsBurgerPopupOpen(true);
  }

  function closePopup() {
    setIsBurgerPopupOpen(false);
  }

  function handleRegister() {
    setIsLoggedIn(true);
  }

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function signOutProfile(){
    setIsLoggedIn(false);
    navigate("/");
  }
  
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              onBurgerPopup={handleBurgerPopupClick}
              isOpen={isBurgerPopupOpen}
              onClose={closePopup}
            />
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <Movies
              isLoggedIn={isLoggedIn}
              onBurgerPopup={handleBurgerPopupClick}
              isOpen={isBurgerPopupOpen}
              onClose={closePopup}
            />
          }
        ></Route>

        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              isLoggedIn={isLoggedIn}
              onBurgerPopup={handleBurgerPopupClick}
              isOpen={isBurgerPopupOpen}
              onClose={closePopup}
            />
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <Profile
              isLoggedIn={isLoggedIn}
              onBurgerPopup={handleBurgerPopupClick}
              isOpen={isBurgerPopupOpen}
              onClose={closePopup}
              signOutProfile={signOutProfile}
            />
          }
        ></Route>

        <Route path="/signup" element={<Register handleRegister={handleRegister}/>}></Route>

        <Route path="/signin" element={<Login handleLogin={handleLogin}/>}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
