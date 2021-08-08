import React from 'react';

const BookCard = ({book}) => (
    <div className="contentContainer__listRep_itemContainer flex flex-wrap border_1px border-radius_12px box-sizing">
        <div className="repNameContainer flex align-items_center">
            <img src="book.jpg" alt="" className="repImgForList" />
            <span className="bookTitle fontDefault"> {book.title}</span>
        </div>
        <div className="repStarsContainer flex">
            <span className="repStarsNumForList fontDefault">автор: {book.authors}</span>
        </div>
    </div>
);

export default BookCard