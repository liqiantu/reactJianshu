import { fromJS } from 'immutable';
import { constants} from './index';

const defaultState = fromJS(
    {
        isLogIn: false
	}
);

export default (state = defaultState,action) => {
    switch(action.type) {
        case constants.CHANGE_LOGO_IN:
            return state.set('isLogIn',action.isLog);

        case constants.CHANGE_LOGO_OUT:
            return state.set('isLogIn',action.isLog);
        default:
            return state;
    }
};