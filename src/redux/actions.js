import sendRequest from '@methods/sendRequest';

export function searchBook (query) {
    return async dispatch => {
        const formatedQuery = query.trim().replace(/ /gi, '+');
        // удаление двойных пробелов
        // для пагинатора добавить параметр page 
        const response = await sendRequest('GET', 'http://openlibrary.org/search.json?q=' + formatedQuery);
        const parsedResponse = {
            books: response.docs,
            message: `найдено ${response.numFound}`
        };
        dispatch({type: 'NEW_SEARCH', payload: parsedResponse});
    }
};