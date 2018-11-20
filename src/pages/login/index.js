import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './styled';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
// import { actionCreators } from '../store';

class Login extends PureComponent {
    render() {
        const { logIn, isLogIn} = this.props;
        
        if (isLogIn) {
            return <Redirect to='/' />
        }

        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='用户名' innerRef={ (ele) => {this.accountElem = ele} }></Input>
                    <Input placeholder='密码' innerRef={ (ele) => {this.pswElem = ele} }></Input>
                    <Button onClick={ () => { logIn(this.accountElem,this.pswElem) } }>提交</Button>
                </LoginBox>
            </LoginWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogIn: state.getIn(['login','isLogIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn(accountElem,pswElem) {
            dispatch(actionCreators.logIn(accountElem.value,pswElem.value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);