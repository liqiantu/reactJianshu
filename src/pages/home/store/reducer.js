import { fromJS } from 'immutable';

const defaultState = fromJS(
    {
        list: [],
		articalList: [],
		recommendList: []
	}
);

export default (state = defaultState,action) => {
    switch(action.type) {
        case 'change_home_action':
            return state.merge({
                list: fromJS(action.topicList),
                articalList: fromJS(action.articalList),
                recommendList: fromJS(action.recommendList)
            })

        default:
            return state;
    }
};