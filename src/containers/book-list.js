import React, {Component} from 'react';
//Imports the connect function - Imports only the "connect" property (a function) from 'react-redux' that allows us to connect React and Redux
import { connect } from 'react-redux';

//Creates class component BookList
class BookList extends Component {
    //Builds book list
    renderList(){
        //Gets book titles - Refers to books object from the mapStateToProps (as this.props.books), Loops (using .map) through the array of books and returns titles as an <li> (for use in the <ul> below), remember we need a key as a unique identifier for each item in the list
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });    
    }
    
    //Displays book list on page - when we reference other functions (renderList) or variables in our JSX we use {}
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//Links App state to component - Takes application state (array of books + selected book etc.) and returns an object (books) that will be available to our BookList component (as this.props.books)
function mapStateToProps(state){
    //Returns object to be used by our BookList component - Takes the book list from our Application state and stores it as an object (this.props.books), Object = Key (books)/Value (state.books), this object will be reassigned to the component (as this.props.books) whenever the container is rerendered
    return{
        books: state.books
    };
}

//Creates a container - Connects React <-> Redux, Takes a function and a component and produces a container, if our App state changes our container (BookList) will automatically rerender with new list of books
export default connect(mapStateToProps)(BookList);