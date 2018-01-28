import React, { Component } from 'react';
import {connect} from 'react-redux';

//Creates component (BookDetail)
class BookDetail extends Component {
    render() {
        return (
            <div>Book Detail</div>
        );
    }
}

//Extracts and passes active book to our component (BookDetail) - "state" takes app/global state, extracts the active book, stores it as a JS object and passes the object to our component for rendering
function mapStateToProps(state) {
    //Returns object to BookDetail (this.props.), "book: state.activeBook" refers to reducers -> index.js  
    return {
      book: state.activeBook  
    };
}

//Exports/creates container - executes mapStateToProps function which returns the active book to our component (BookDetail), and takes our component to be exported
export default connect(mapStateToProps)(BookDetail);