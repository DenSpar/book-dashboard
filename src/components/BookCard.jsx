import React from 'react';

const BookCard = () => (
    <div className="contentContainer__listRep_itemContainer flex flex-wrap border_1px border-radius_12px box-sizing">
        <div className="repNameContainer flex align-items_center">
            <img src="book.jpg" alt="" className="repImgForList" />
            <a href="" className="repNameForList fontDefault text-decoration_none" target="_blank"></a>
        </div>
        <div className="repStarsContainer flex">
            <img src="star.jpg" alt="" className="repImgForList" />
            <span className="repStarsNumForList fontDefault"></span>
        </div>
        <span className="lastCommitForList fontDefault">last commit: </span>
        <a href="" className="repLink fontDefault">go to book</a>
    </div>
);

export default BookCard