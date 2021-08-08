const initialState = {
    message: 'initial message',
    books: []
};

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'NEW_SEARCH': return action.payload;
        // для пагинатора
        // case 'ANOTHER_PAGE': return {...state, books: action.payload}
        default: return state;
    }
    return state;
}