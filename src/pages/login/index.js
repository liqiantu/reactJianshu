import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './styled';
// import { actionCreators } from '../store';

class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='用户名'></Input>
                    <Input placeholder='密码'></Input>
                    <Button>提交</Button>
                </LoginBox>
            </LoginWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);