import { combineReducers } from 'redux';
import moviesReducer from './acyncReducer';

export const rootReducer = combineReducers({
    movies: moviesReducer
});