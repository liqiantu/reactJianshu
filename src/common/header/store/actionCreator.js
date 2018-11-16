import { constants } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

// 不向外暴露的函数放在顶部
const changeList = (list) => ({
    type: constants.CHANGE_LIST,
    list: fromJS(list)
});

export const searchFocusAction = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
    type: constants.SEARCH_BLUR
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