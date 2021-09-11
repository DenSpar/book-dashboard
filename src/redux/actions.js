import sendRequest from '@methods/sendRequest';
import {get} from 'lodash';

export function searchBook (query) {
    return async dispatch => {
        const formatedQuery = query.trim().replace(/ /gi, '+');
        // удаление двойных пробелов
        const response = await sendRequest('GET', `http://openlibrary.org/search.json?title=${formatedQuery}&limit=100`);
        const parsedResponse = {
            message: `найдено ${response.numFound}`
        };
        if(response.docs.length) {
            parsedResponse.books = response.docs.map(book => ({
                authors: get(book,'author_name', []).join(', '),
                title: get(book,'title', ''),
                publishDate: get(book,'publish_date', []).join(', '),
                publisher: get(book,'publisher', []).join(', '),
                isbn: get(book,'isbn', []).join(', '),
                isbnForCover: get(book,'isbn[0]', '')
            }));
        } else {
            parsedResponse.books = [];
        };
        dispatch({type: 'NEW_SEARCH', payload: parsedResponse});
    }
};

export function showBookInfo (bookInfo) {
    // return dispatch => dispatch({type: 'SHOW_BOOK_INFO', payload: bookInfo});
    return dispatch => {
        console.log("click showBookInfo");
        dispatch({type: 'SHOW_BOOK_INFO', payload: bookInfo})
    };
};

export function hideBookInfo (bookInfo) {
    // return dispatch => dispatch({type: 'HIDE_BOOK_INFO', payload: bookInfo});
    return dispatch => {
        console.log("click hideBookInfo");
        dispatch({type: 'HIDE_BOOK_INFO', payload: bookInfo})
    };
};
