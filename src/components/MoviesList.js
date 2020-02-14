import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/actions/index";

class MoviesList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        const { error, loading, movies } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        if (movies){
            return (
                <ul>
                    {movies.map(item =>
                        <li key={item.id}>{item.title}</li>
                    )}
                </ul>
            )
        }

        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.items.data,
    loading: state.movies.loading,
    error: state.movies.error
});

export default connect(mapStateToProps)(MoviesList);