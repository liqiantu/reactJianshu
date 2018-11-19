import { fromJS } from 'immutable';
import { constants} from './index';

const defaultState = fromJS(
    {
        list: [],
		articalList: [],
        recommendList: [],
        articlePage: 1
	}
);

export default (state = defaultState,action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_ACTION:
            return state.merge({
                list: fromJS(action.topicList),
                articalList: fromJS(action.articalList),
                recommendList: fromJS(action.recommendList)
            })
        
        case constants.GET_MORE_LIST_ACTION:
            return state.merge({
                articalList: state.get('articalList').concat(action.list),
                articlePage: action.page
            })
            // return state.set('articalList',state.get('articalList').concat(action.list));

        default:
            return state;
    }
};