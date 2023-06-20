import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./App.css";
import MainApi from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoToolTip from "../InfoTooltip/InfoTooltip";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const [movies, setMovies] = React.useState([]);

  const [isSuccess, setSuccess] = React.useState(false);

  const [isInfoToolTipOpen, setInfoToolTipOpen] = React.useState(false);

  const [email, setEmail] = React.useState("");

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoggedIn) {
      MoviesApi.getMovies()
        .then((movies) => {
          setMovies(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (isLoggedIn) {
      MainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        setInfoToolTipOpen(false);
      }
    }
    if (isInfoToolTipOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isInfoToolTipOpen]);

  function handleAddMovieSubmit(movie) {
    console.log(movie);
    MoviesApi.addNewMovie(movie)
      .then((newMovie) => {
        setMovies([newMovie, ...movies]);
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(info) {
    MainApi.editUserInfo(info)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleUserEmail(email) {
    setEmail(email);
  }

  function handleInfoTooltipClick() {
    setInfoToolTipOpen(true);
  }

  const handleRegisterSubmit = (name, email, password) => {
    MainApi.register(name, email, password)
      .then((res) => {
        if (res) {
          setSuccess(true); //сообщение об успешной регистраци
          navigate("/sign-in");
        }
      })
      .catch(() => {
        handleInfoTooltipClick();
        setSuccess(false);
      })
      .finally(() => {
        handleInfoTooltipClick();
      });
  };

  function closeInfoToolTipPopup() {
    setInfoToolTipOpen(false);
  }

  function handleLoginSubmit(email, password) {
    MainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token); //сохранили токен
          handleUserEmail(email);
          handleLogin(); //статус пользователя - зарегистрирован
          navigate("/"); //переадресация на основную страницу
        } else {
          return;
        }
      })
      .catch(() => {
        handleInfoTooltipClick(); //открытие модального окна с ошибкой
        setSuccess(false);
      });
  }

  function tokenCheck() {
    const token = localStorage.getItem("token"); //сохранили токен
    if (token) {
      MainApi.getContent(token)
        .then((data) => {
          handleUserEmail(data.email);
          handleLogin(); //обновлен статус пользователя - зарегистрирован
          navigate("/"); //переадресация на страницу пользователя
        })
        .catch((err) => console.log(err));
    }
  }

  function signOutProfile() {
    localStorage.removeItem("token"); //удалили токен
    setLoggedIn(false); // обновили статус пользователя
    navigate("/sign-in"); //переадресация на странцицу входа
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={Main}
                movies={movies}
                useremail={email}
                signOutProfile={signOutProfile}
              />
            </>
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <>
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={Movies}
                movies={movies}
                onAddMovie={handleAddMovieSubmit}
              />
            </>
          }
        ></Route>

        <Route
          path="/saved-movies"
          element={
            <>
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={SavedMovies}
                movies={movies}
              />
            </>
          }
        ></Route>

        <Route
          path="/profile"
          element={<Profile onUpdateUser={handleUpdateUser} />}
        ></Route>

        <Route
          path="/signup"
          element={<Register onRegister={handleRegisterSubmit} />}
        ></Route>

        <Route
          path="/signin"
          element={<Login onLogin={handleLoginSubmit} />}
        ></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

      <InfoToolTip
        isOpen={isInfoToolTipOpen}
        onClose={closeInfoToolTipPopup}
        isSuccess={isSuccess}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
