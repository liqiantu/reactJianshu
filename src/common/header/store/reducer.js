import * as constants from './constant';
import { fromJS } from 'immutable'

const defaultState = fromJS({    
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);

        case constants.SEARCH_BLUR:
            return state.set('focused',false); 
        
        case constants.CHANGE_LIST:
            return state.merge({
                totalPage: action.totalPage,
                list: action.list
            });

        case constants.CHANGE_PAGE:
            return state.set('page',action.page);

        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);

        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        
        default:
            return state;
    }
};