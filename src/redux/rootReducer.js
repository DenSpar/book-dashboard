const initialState = {
    message: 'введите название книги в поле поиска',
    books: [],
    modal: {}
};

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'NEW_SEARCHING': return {...state, message: action.payload};
        case 'SHOW_SEARCH_RESULT': return {...action.payload};
        case 'SHOW_BOOK_INFO': 
            return {...state, modal: action.payload};
        case 'HIDE_BOOK_INFO': 
            return {...state, modal: {}};
        default: return state;
    }
}