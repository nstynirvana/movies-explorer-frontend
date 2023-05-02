import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies() {
    return (
        
        <>

            <Navigation />

            <section className="movies">

                <SearchForm />

                <MoviesCardList />

            </section>

            <Footer />

        </>

    )
}

export default SavedMovies;