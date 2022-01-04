import sendRequest from "@methods/sendRequest";
import {get} from "lodash";

const DEFAULT_LIMIT = 3;
const prepareField = (valuesArr, singularFieldName, pluralFieldName, limit = null) => {
    const field = {};
    const valueNum = valuesArr.length;
    if (valueNum === 0) {
        field.title = singularFieldName;
        field.shortValue = " не указан"
    };
    if (valueNum === 1) {
        field.title = `${singularFieldName}:`;
        field.shortValue = ` ${valuesArr[0]}`;
    };

    if (!limit) {
        if (valueNum > 1) {
            field.title = `${pluralFieldName}:`;
            field.shortValue = ` ${valuesArr.join(", ")}`;
        };
    } else {
        if (valueNum > 1) {
            field.title = pluralFieldName;
            field.shortValue = ` ${valuesArr.slice(0, limit).join(", ")}`;
        };
        if (valueNum > limit) {
            field.shortValue = field.shortValue + ", ...";
            field.numText = ` ${limit}/${valueNum}:`;
            field.existLongValue = true;
            field.fullValue = valuesArr.join(", ");
        } else {
            field.title = field.title + ":"
            field.numText = "";
            field.existLongValue = false;
            field.fullValue = "";
        };
    };
    return field;
}

export function searchBook (query) {
    return async dispatch => {
        // удаление двойных пробелов
        const formatedQuery = query.trim().replace(/ /gi, "+");
        const response = await sendRequest("GET", `http://openlibrary.org/search.json?title=${formatedQuery}&limit=100`);
        const parsedResponse = {
            message: `по запросу ${formatedQuery} найдено ${response.numFound} книг`
        };
        if(response.docs.length) {
            parsedResponse.books = response.docs.map(book => ({
                title: get(book,"title", ""),
                author: prepareField(get(book,"author_name", []), "автор", "авторы"),
                publishDate: prepareField(
                    get(book,"publish_date", []),
                    "дата публикации",
                    "даты публикаций",
                    DEFAULT_LIMIT
                ),
                publisher: prepareField(get(book,"publisher", []), "издатель", "издатели", DEFAULT_LIMIT),
                isbn: prepareField(get(book,"isbn", []), "ISBN", "ISBN", DEFAULT_LIMIT),
                isbnForCover: get(book,"isbn[0]", "")
            }));
        } else {
            parsedResponse.books = [];
        };
        dispatch({type: "NEW_SEARCH", payload: parsedResponse});
    }
};

export function showBookInfo (bookInfo) {
    return dispatch => dispatch({type: "SHOW_BOOK_INFO", payload: bookInfo});
};

export function hideBookInfo (bookInfo) {
    return dispatch => dispatch({type: "HIDE_BOOK_INFO", payload: bookInfo});
};
