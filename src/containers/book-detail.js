import React, { Component } from 'react';
import {connect} from 'react-redux';

//Creates component (BookDetail)
class BookDetail extends Component {
    //when first booking up "{this.props.book.title}" = "{null.title}" as the user hasnt clicked on anything yet, this causes an error in React
    render() {
        //Catches the null error that occurs on first booting up (before a user has selected a book "this.props.books" = null) - If "this.props.book" does not exist (i.e the user hasnt clicked anything yet), exit early and rerender the page with a message
        if(!this.props.book){
            return <div>Select a book to get started.</div>
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

//Extracts and passes active book to our component (BookDetail) - maps application "state" to "props" of the component, "state" takes app/global state, extracts the active book, stores it as a JS object and passes the object to our component for rendering
function mapStateToProps(state) {
    //Returns object to BookDetail (this.props.), "book: state.activeBook" refers to reducers -> index.js  
    return {
      book: state.activeBook  
    };
}

//Exports/creates container - executes mapStateToProps function which returns the active book to our component (BookDetail), and takes our component to be exported
export default connect(mapStateToProps)(BookDetail);