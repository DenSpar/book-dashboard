const initialState = {
    message: 'initial message',
    books: [],
    modal: {}
};

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'NEW_SEARCH': return action.payload;
        case 'SHOW_BOOK_INFO': 
        console.log({...state, modal: action.payload})
            return {...state, modal: action.payload};
        case 'HIDE_BOOK_INFO': 
        console.log({...state, modal: action.payload})
            return {...state, modal: {}};
        default: return state;
    }
}