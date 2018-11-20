import { constants } from './index';
import axios from 'axios';

const changeLogIn = () => (
    {
        type: constants.CHANGE_LOGO_IN,
        isLog: true
    }
)

const changeLogOut = () => ({
    type: constants.CHANGE_LOGO_OUT,
    isLog: false
})

export const logIn = (account,psw) => {
    return (dispatch) => {
        if (account.length && psw.length) {
            axios.get('/api/login.json?account='+account+'&psw='+psw)
            .then( (res) => {
                const result = res.data.data;
                console.log(res.data.data);
                if(result) {
                    dispatch(changeLogIn());
                }else {
                    alert('登录失败！！');
                }
            } )
            .catch();
        }else {
            alert('登录失败！！');
        }
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch(changeLogOut());
    }
}