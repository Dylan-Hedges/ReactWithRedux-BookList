import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//Adds reducers to our combineReducers call
const rootReducer = combineReducers({
    //Adds a k/v to our app/global state - key="books"/value=returns our array of books from reducer_books.js
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
