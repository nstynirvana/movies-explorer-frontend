import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Register.css";

function SavedMovies() {
    return (
        <>
            <Header />

            <section className="movies">

                <SearchForm />

                <MoviesCardList />

            </section>

            <Footer />
        </>

    )
}

export default SavedMovies;