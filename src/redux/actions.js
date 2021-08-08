import sendRequest from '@methods/sendRequest';
import {get} from 'lodash';

export function searchBook (query) {
    return async dispatch => {
        const formatedQuery = query.trim().replace(/ /gi, '+');
        // удаление двойных пробелов
        // для пагинатора добавить параметр page 
        const response = await sendRequest('GET', 'http://openlibrary.org/search.json?q=' + formatedQuery);
        const parsedResponse = {
            message: `найдено ${response.numFound}`
        };
        if(response.docs.length) {
            parsedResponse.books = response.docs.map(book => ({
                authors: get(book,'author_name', []).join(', '),
                title: get(book,'title', ''),
                publishDate: get(book,'publish_date', []).join(', '),
                publisher: get(book,'publisher', []).join(', '),
                isbn: get(book,'isbn', []).join(', ')
            }));
        } else {
            parsedResponse.books = [];
        };
        dispatch({type: 'NEW_SEARCH', payload: parsedResponse});
    }
};