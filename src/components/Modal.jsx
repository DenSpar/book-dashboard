import React, { useState, useEffect } from 'react';
import {isEmpty} from 'lodash';
import {connect, useDispatch} from 'react-redux';
import {hideBookInfo} from '@redux/actions';

const Modal = (state) => {
    const [isModal, setModal] = useState(false);
    const dispatch = useDispatch();

    useEffect (
        () => {
            if (!isEmpty(state.modal)) setModal(true);
            console.log(state.modal);
        },
        [state]
    );

    const closeModal = () => {
        setModal(false);
        dispatch(hideBookInfo());
    }

    return isModal && (
        <div className="modal flex justify-content_center flex-direction_column">
            <div className="modal-body">
                <h1>modal tittle</h1>
                <span className="repStarsNumForList fontDefault">modal text</span>
                <button onClick={() => closeModal()}>Close</button>
            </div>
        </div>
    )
};

// export default Modal;

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {hideBookInfo})(Modal);