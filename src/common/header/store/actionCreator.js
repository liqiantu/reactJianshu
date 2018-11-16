import { constants } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocusAction = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
    type: constants.SEARCH_BLUR
});

export const changeList = (list) => ({
    type: constants.CHANGE_LIST,
    list: fromJS(list)
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
        .then((res) => {
            dispatch(changeList(res.data.data));
        })
        .catch((e) => {
            console.log(e);
        });

    }
};