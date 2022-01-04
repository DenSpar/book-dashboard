import React from 'react';
import {connect} from 'react-redux';
import BookCard from '@components/BookCard';

const BookList = (state) => (
    <div className="outerContainer">
        <div className="innerContainer">
            <div className="contentContainer">
                <h2 className="contentContainer__title fontDefault">{state.message}</h2>
                {state.books.map((book,i) => <BookCard book={book} key={i} />)}
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, null)(BookList);