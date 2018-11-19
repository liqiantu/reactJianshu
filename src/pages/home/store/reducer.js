import { fromJS } from 'immutable';
import { constants} from './index';

const defaultState = fromJS(
    {
        list: [],
		articalList: [],
		recommendList: []
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

        default:
            return state;
    }
};