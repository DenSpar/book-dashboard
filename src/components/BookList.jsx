import React from 'react';
import BookCard from '@components/BookCard';

const BookList = () => (
    <div className="outerContainer">
        <div className="innerContainer">
            <div className="contentContainer">
                <h2 className="contentContainer__title fontDefault">найдено результатов...</h2>
                <BookCard />
            </div>
        </div>
    </div>
);

export default BookList