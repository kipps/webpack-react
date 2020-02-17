export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

function fakeGetMovies() {
    return fetch('https://reactjs-cdp.herokuapp.com/movies/')
        .then(response => response.json());
}

export function fetchMovies() {
    return dispatch => {
        dispatch(fetchMoviesBegin());
        return fakeGetMovies()

            .then(json => {
                dispatch(fetchMoviesSuccess(json));
                return json;
            })
            .catch(error =>
                dispatch(fetchMoviesFailure(error))
            );
    };
}

export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: { movies }
});

export const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: { error }
});