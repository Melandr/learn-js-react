import { DELETE_ARTICLE, INCREMENT, SET_SELECT_ARTICLES, SET_DATE, CHANGE_DATE_RANGE } from "../constants";

export function increment() {
    return {
        type: INCREMENT,
    };
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id },
    };
}

export function setSelectArticles(selected) {
    return {
        type: SET_SELECT_ARTICLES,
        payload: { selected },
    };
}

export function setDate(date) {
    return {
        type: SET_DATE,
        payload: { date },
    };
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange },
    };
}
