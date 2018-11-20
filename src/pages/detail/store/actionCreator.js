import { constants } from './index';
import axios from 'axios';

const changeArticle = (title,content) => (
    {
        type: constants.GET_ARTICLE,
        title,
        content
    }
)

export const getArticleAction = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id)
        .then((res) => {
            const result = res.data.data;
            dispatch(changeArticle(result.title,result.content));
        })
        .catch();
    }
}