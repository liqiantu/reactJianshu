import { constants } from './index';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeHomeData = (res) => {
    return {
        type: constants.CHANGE_HOME_ACTION,
        articalList: res.articleList,
        recommendList: res.recommendList,
        topicList: res.topicList
    }
}

const getMoreData = (res,page) => {
    return {
        type: constants.GET_MORE_LIST_ACTION,
        list: fromJS(res),
        page: page
    }
}

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((result)=> {
            const res = result.data.data;
            dispatch(changeHomeData(res));
        })
        .catch();
        }
}

export const getMoreListItem = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page)
        .then((result)=> {
            const res = result.data.data;
            console.log(res);
            dispatch(getMoreData(res,page + 1));
        })
        .catch();
        }
    }