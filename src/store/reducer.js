
const defaultState = {
    focused: false
}

export default (state = defaultState,action) => {
    if(action.type === 'search_focus_type') {
        return {
            focused: true
        }
    }
    if(action.type === 'search_blur_type') {
        return {
            focused: false
        }
    }
    return state;
};