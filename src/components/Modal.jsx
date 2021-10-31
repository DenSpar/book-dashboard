import React, { useState, useEffect } from 'react';
import {isEmpty} from 'lodash';
import {connect, useDispatch} from 'react-redux';
import {hideBookInfo} from '@redux/actions';

const ExpandedField = ({field}) => {
    const [isShortListChoosen, setChoosenList] = useState(true);

    const ShowHideFullList = ({isVisible, isShortValue, handler}) => {
        return isVisible ? (
            <span 
            className="repStarsNumForList activeText"
            onClick={() => handler()}>
                ({isShortValue ? "показать" : "скрыть"} полный список)
            </span>
        ) : null
    };

    return (
        <span
        className="repStarsNumForList fontDefault">
            {field.title}
            {isShortListChoosen && field.numText} 
            <ShowHideFullList 
                isVisible={field.existLongValue}
                isShortValue={isShortListChoosen}
                handler={() => setChoosenList(!isShortListChoosen)}
            />
            {isShortListChoosen ? field.shortValue : field.fullValue}
        </span>
    )
}

const Modal = (state) => {
    const [isModal, setModal] = useState(false);
    const [book, setBook] = useState({});
    const dispatch = useDispatch();

    useEffect (
        () => {
            if (!isEmpty(state.modal)) {
                setBook(state.modal)
                setModal(true)
            };
        },
        [state]
    );

    const closeModal = () => {
        setModal(false);
        dispatch(hideBookInfo());
    }

    return isModal && (
        <div className="modal flex justify-content_center flex-direction_column">
            <div className="modal-body flex flex-direction_column justify-content_center align-items_center">
                <div className="flex flex-direction_column justify-content_center align-items_center">
                    <div className="contentContainer__modal flex">
                        <div className="contentContainer__modal_imageContainer flex justify-content_center align-items_center flex-shrink_0">
                            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbnForCover}-M.jpg?default=false`} alt="битая картинка" className="cover_m" />
                        </div>
                        <div className="contentContainer__modal flex flex-direction_column">
                            <span className="modalTitleFont">{book.title}</span>
                            <span className="repStarsNumForList fontDefault">
                                {book.author.title}{book.author.shortValue}
                            </span>
                            <ExpandedField field={book.publishDate}/>
                            <ExpandedField field={book.publisher}/>
                            <ExpandedField field={book.isbn}/>
                            <ExpandedField field={book.publishDate}/>
                        </div>
                    </div>
                    <button onClick={() => closeModal()} className="modal__closeBtn">Close</button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {hideBookInfo})(Modal);