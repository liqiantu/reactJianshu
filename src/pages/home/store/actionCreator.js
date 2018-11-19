import { constants } from './index';
import axios from 'axios';

const changeHomeData = (res) => {
    return {
        type: 'change_home_action',
        articalList: res.articleList,
        recommendList: res.recommendList,
        topicList: res.topicList
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