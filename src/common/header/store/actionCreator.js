import { constants } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

// 不向外暴露的函数放在顶部
const changeList = (list) => ({
    type: constants.CHANGE_LIST,
    list: fromJS(list),
    totalPage: Math.ceil(list.length / 10)
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
     page
});

export const searchFocusAction = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
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