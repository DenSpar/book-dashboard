const initialState = {
    message: 'initial message',
    books: [],
    modal: {}
};

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'NEW_SEARCH': return {...action.payload, modal: {}};
        case 'SHOW_BOOK_INFO': 
            return {...state, modal: action.payload};
        case 'HIDE_BOOK_INFO': 
            return {...state, modal: {}};
        default: return state;
    }
}