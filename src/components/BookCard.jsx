import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {showBookInfo} from '@redux/actions';

const BookCard = ({book}) => {
    const dispatch = useDispatch();
    // const authorsNum = book.author.length;
    // let authors = "автор: не указан";
    // if (authorsNum === 1) authors = `автор: ${book.author[0]}`;
    // if (authorsNum > 1) authors = `авторы: ${book.author.join(", ")}`;
    return (
        <div 
        className="contentContainer__listRep_itemContainer flex border_1px border-radius_12px box-sizing"
        onClick={() => dispatch(showBookInfo(book))}
        >
            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbnForCover}-S.jpg?default=false`} alt="битая картинка" className="cover_s" />
            <div className="contentContainer__listRep_itemContainer_infoContainer flex flex-direction_column">
                <div className="repNameContainer flex align-items_center">
                    <img src="book.jpg" alt="" className="repImgForList" />
                    <span className="bookTitle fontDefault">{book.title}</span>
                </div>
                <div className="repStarsContainer flex">
                    <span className="repStarsNumForList fontDefault">
                        {book.author.title}
                        {book.author.shortValue}
                    </span>
                </div>
            </div>
        </div>
    )
};

export default connect(null, {showBookInfo})(BookCard);