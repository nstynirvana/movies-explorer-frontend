import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Movies.css";

function Movies() {
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

export default Movies;
